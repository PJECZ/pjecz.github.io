let distritos_plataforma_web_api_url;
let autoridades_plataforma_web_api_url;
let listas_plataforma_web_api_url;
let id_autoridad;

$(document).ready(function() {
    $('#divcargando').hide();

    getDistritos();

    getYears();

    $('#ListasTable').removeClass('table-striped');

    $('#ListasTable').DataTable();

    $('#distritos').show();
    $('#autoridades').hide();
    $('#tablaResultado').hide();

    $("#search-distrito").keyup(function() {
        //$(this).addClass('hidden');

        var searchTerm = $("#search-distrito").val();
        var listItem = $('#listDistritos').children('li');

        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        //extends :contains to be case insensitive
        $.extend($.expr[':'], {
            'containsi': function(elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase()
                    .indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $("#listDistritos li").not(":containsi('" + searchSplit + "')").each(function(e) {
            $(this).addClass('hiding out').removeClass('in');
            setTimeout(function() {
                $('.out').addClass('hidden');
            }, 300);
        });

        $("#listDistritos li:containsi('" + searchSplit + "')").each(function(e) {
            $(this).removeClass('hidden out').addClass('in');
            setTimeout(function() {
                $('.in').removeClass('hiding');
            }, 1);
        });

        var jobCount = $('#listDistritos .in').length;
        $('.list-countDistritos').text(jobCount + ' Elementos');

        //shows empty state text when no jobs found
        if (jobCount == '0') {
            $('#listDistritos').addClass('empty');
        } else {
            $('#listDistritos').removeClass('empty');
        }
    });

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

    $("#btnbackDistritos").click(function() {
        $('#divcargando').hide();
        $('#distritos').show();
        $('#autoridades').hide();
        $('#tablaResultado').hide();
        $('#consultaDistrito').empty();
    });

    $("#btnbackAutoridades").click(function() {
        $('#divcargando').hide();
        $('#distritos').hide();
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
        case "distritos":
            switch (location.hostname) {
                case "localhost":
                    // Para desarrollo
                    distritos_plataforma_web_api_url = "http://172.30.37.233:8001/distritos";
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    distritos_plataforma_web_api_url = "http://172.30.37.233:8001/distritos";
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    distritos_plataforma_web_api_url = "http://172.30.37.233:8001/distritos";
                    break;
                default:
                    // Para producción
                    distritos_plataforma_web_api_url = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/distritos";
            }
            break;
        case "autoridades":
            switch (location.hostname) {
                case "localhost":
                    // Para desarrollo
                    autoridades_plataforma_web_api_url = "http://172.30.37.233:8001/autoridades?distrito_id=" + id;
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    autoridades_plataforma_web_api_url = "http://172.30.37.233:8001/autoridades?distrito_id=" + id;
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    autoridades_plataforma_web_api_url = "http://172.30.37.233:8001/autoridades?distrito_id=" + id;
                    break;
                default:
                    // Para producción
                    autoridades_plataforma_web_api_url = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/autoridades?distrito_id=" + id;
            }
            break;
        case "listas":
            switch (location.hostname) {
                case "localhost":
                    // Para desarrollo
                    listas_plataforma_web_api_url = "http://172.30.37.233:8001/listas_de_acuerdos?autoridad_id=" + id + '&ano=' + anio;
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    listas_plataforma_web_api_url = "http://172.30.37.233:8001/listas_de_acuerdos?autoridad_id=" + id + '&ano=' + anio;
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    listas_plataforma_web_api_url = "http://172.30.37.233:8001/listas_de_acuerdos?autoridad_id=" + id + '&ano=' + anio;
                    break;
                default:
                    // Para producción
                    listas_plataforma_web_api_url = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/listas_de_acuerdos?autoridad_id=" + id + '&ano=' + anio;
            }
            break;
    }
}

function getDistritos() {
    $('#divcargando').show();
    consulta("distritos");
    var imagen = "icono-distrito-";
    $.ajax({
        'url': distritos_plataforma_web_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function(response) {
            $.each(response, function(i, distrito) {
                $("#listDistritos").append('<li onclick="getAutoridades(this.value);" class="in li" value="' + distrito.id + '"><a class="text-white btn-floating btn-fb btn-sm"><img class="rounded-circle" src="../../theme/images/' + imagen + distrito.id + '.png"></a> ' + distrito.distrito + ' </li> ');
            });
            $("#listDistritos").append('<span class = "empty-item" > Sin resultados </span>');
            var jobCount = response.length;
            $('.list-countDistritos').text(jobCount + ' Elementos');
            $('#divcargando').hide();
        }
    });

}

function getAutoridades(distrito) {
    $('#divcargando').show();
    $('#distritos').hide();
    $('#autoridades').show();
    $('#tablaResultado').hide();
    $('#consultaJuzgado').val("");
    consulta("autoridades", distrito);
    var nombreDistrito = "";
    $.ajax({
        'url': autoridades_plataforma_web_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function(response) {
            $("#listAutoridades").empty();
            $.each(response, function(i, autoridad) {
                $("#listAutoridades").append('<li onclick="resultadoConsulta(this.value,0);" class="in li" value="' + autoridad.id + '">' + autoridad.autoridad + ' </li> ');
                nombreDistrito = autoridad.distrito;
            });
            $("#listAutoridades").append('<span class = "empty-item" > Sin resultados < /span>');
            var jobCount = response.length;
            $('.list-countAutoridades').text(jobCount + '  Elementos');
            $('#consultaDistrito').html(nombreDistrito);
            $('#divcargando').hide();
        }
    });
}

function resultadoConsulta(autoridad, anio) {
    id_autoridad = autoridad;
    $('#divcargando').show();
    $('#distritos').hide();
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
    var nombreDistrito = "";
    var nombreAutoridad = "";
    $.ajax({
        'url': listas_plataforma_web_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function(result) {
            $.each(result, function(i, lista) {
                if (i == 0) {
                    nombreAutoridad = lista.autoridad;
                    nombreDistrito = lista.distrito;
                    return false;
                }
            });
            $('#consultaJuzgado').html(nombreAutoridad);
            // DataTable
            $('#ListasTable').DataTable({
                'data': result,
                'columns': [
                    { 'data': "fecha", 'width': "40%" },
                    { 'data': "descripcion", 'width': "40%" },
                    { 'data': "url", 'width': "20%", "render": function(data, type, row) { return "<a href='" + data + "' target='_blank'> <i class='fa fa-download'></i> Descargar</a>" } },
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