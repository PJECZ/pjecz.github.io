let autoridades_plataforma_web_api_url;
let listas_plataforma_web_api_url;
let id_autoridad;

$(document).ready(function() {
    getAutoridades();

    getYears();

    $('#divcargando').hide();

    $('#ListasTable').removeClass('table-striped');

    $('#ListasTable').DataTable();

    $('#tablaResultado').hide();

    $("#search-autoridad").keyup(function() {
        //$(this).addClass('hidden');

        var searchTerm = $("#search-autoridad").val();
        var listItem = $('#listAutoridades').children('li');

        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        //extends :contains to be case insensitive
        $.extend($.expr[':'], {
            'containsi': function(elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase()
                    .indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $("#listAutoridades li").not(":containsi('" + searchSplit + "')").each(function(e) {
            $(this).addClass('hiding out').removeClass('in');
            setTimeout(function() {
                $('.out').addClass('hidden');
            }, 300);
        });

        $("#listAutoridades li:containsi('" + searchSplit + "')").each(function(e) {
            $(this).removeClass('hidden out').addClass('in');
            setTimeout(function() {
                $('.in').removeClass('hiding');
            }, 1);
        });

        var jobCount = $('#listAutoridades .in').length;
        $('.list-countAutoridades').text(jobCount + ' Elementos');

        //shows empty state text when no jobs found
        if (jobCount == '0') {
            $('#listAutoridades').addClass('empty');
        } else {
            $('#listAutoridades').removeClass('empty');
        }

    });


    $("#btnbackAutoridades").click(function() {
        $('#divcargando').hide();
        $('#autoridades').show();
        var currentYear = new Date().getFullYear();
        $("#anio").val(currentYear);
        id_autoridad = 0;
        $('#tablaResultado').hide();
        $('#consultaJuzgado').empty();
        $('#ListasTable').DataTable().clear();
        $('#ListasTable').DataTable().destroy();
    });

    $('#anio').on('change', function(e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        resultadoConsulta(id_autoridad, valueSelected);
    });
});

function getYears() {
    var currentYear = new Date().getFullYear();
    var years = [];
    var startYear = 2015;
    for (var i = currentYear; i >= startYear; i--) {
        years.push('<option value= "' + currentYear + '">' + currentYear-- + '</option>');
    }
    $('#anio').append(years);
}

function consulta(api, id = 0, anio = 0) {
    switch (api) {
        case "autoridades":
            switch (location.hostname) {
                case "localhost":
                    // Para desarrollo
                    autoridades_plataforma_web_api_url = "http://172.30.37.233:8001/autoridades?con_notarias=false&para_glosas=true";
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    autoridades_plataforma_web_api_url = "http://172.30.37.233:8001/autoridades?con_notarias=false&para_glosas=true";
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    autoridades_plataforma_web_api_url = "http://172.30.37.233:8001/autoridades?con_notarias=false&para_glosas=true";
                    break;
                default:
                    // Para producción
                    autoridades_plataforma_web_api_url = "https://api.justiciadigital.gob.mx/autoridades?con_notarias=false&para_glosas=true";
            }
            break;
        case "listas":
            switch (location.hostname) {
                case "localhost":
                    // Para desarrollo
                    listas_plataforma_web_api_url = "http://172.30.37.233:8001/glosas?autoridad_id=" + id + '&ano=' + anio;
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    listas_plataforma_web_api_url = "http://172.30.37.233:8001/glosas?autoridad_id=" + id + '&ano=' + anio;
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    listas_plataforma_web_api_url = "http://172.30.37.233:8001/glosas?autoridad_id=" + id + '&ano=' + anio;
                    break;
                default:
                    // Para producción
                    listas_plataforma_web_api_url = "https://api.justiciadigital.gob.mx/glosas?autoridad_id=" + id + '&ano=' + anio;
            }
            break;
    }
}

function getAutoridades() {
    $('#divcargando').show();
    $('#autoridades').show();
    $('#tablaResultado').hide();
    $('#consultaJuzgado').val("");
    consulta("autoridades", 0, 0);
    $.ajax({
        'url': autoridades_plataforma_web_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function(response) {
            $("#listAutoridades").empty();
            $.each(response, function(i, autoridad) {
                $("#listAutoridades").append('<li onclick="resultadoConsulta(this.value,0);" class="in li" value="' + autoridad.id + '">' + autoridad.autoridad + ' </li> ');
            });
            $("#listAutoridades").append('<span class = "empty-item" > Sin resultados < /span>');
            var jobCount = response.length;
            $('.list-countAutoridades').text(jobCount + '  Elementos');
            $('#divcargando').hide();
        }
    });
}


function resultadoConsulta(autoridad, anio) {
    id_autoridad = autoridad;
    $('#divcargando').show();
    $('#autoridades').hide();
    $('#tablaResultado').show();
    $('#consultaJuzgado').val("");
    // Si tiene datos, limpiar la tabla
    if ($('#ListasTable').length > 0) {
        $('#ListasTable').DataTable().clear();
        $('#ListasTable').DataTable().destroy();
    };

    if (anio == 0) {
        var currentYear = new Date().getFullYear();
        anio = currentYear
    }

    consulta("listas", id_autoridad, anio);

    var nombreAutoridad = "";
    $.ajax({
        'url': listas_plataforma_web_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function(result) {
            $.each(result, function(i, lista) {
                if (i == 0) {
                    nombreAutoridad = lista.autoridad;
                    return false;
                }
            });
            $('#consultaJuzgado').html(nombreAutoridad);
            // DataTable
            $('#ListasTable').DataTable({
                'data': result,
                'columns': [
                    { 'data': "fecha", 'width': "20%" },
                    { 'data': "expediente", 'width': "20%" },
                    { 'data': "tipo_juicio", 'width': "30%" },
                    { 'data': "url", 'width': "30%", "render": function(data, type, row) { return "<a href='" + data + "' target='_blank'> <i class='fa fa-download'></i> Descargar</a>" } },
                ],
                'pageLength': 10,
                "order": [
                    [0, "desc"]
                ],
                'language': {
                    'lengthMenu': "Mostrar _MENU_",
                    'search': "Filtrar:",
                    'zeroRecords': "Cargando información...",
                    'info': "Página _PAGE_ de _PAGES_",
                    'infoEmpty': "No hay registros",
                    'infoFiltered': "(filtrados desde _MAX_ registros totales)",
                    'oPaginate': {
                        'sFirst': "Primero",
                        'sLast': "Último",
                        'sNext': "Siguiente",
                        'sPrevious': "Anterior"
                    }
                }
            });
            $('#divcargando').hide();
        }
    });
}
