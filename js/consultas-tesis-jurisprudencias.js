// consultas-tesis-jurisprudencias.js
let autoridades_api_url;
let listas_api_url;
let detalle_api_url;
let id_autoridad;

$(document).ready(function() {
    getAutoridades();
    getYears();

    $('#divcargando').hide();
    $('#ListasTable').removeClass('table-striped');
    $('#ListasTable').DataTable();
    $('#tablaResultado').hide();
    $('#tablaDetalle').hide();

    $("#search-autoridad").keyup(function() {
        var searchTerm = $("#search-autoridad").val();
        var listItem = $('#listAutoridades').children('li');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

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
                    autoridades_api_url = "http://localhost:8001/autoridades?con_notarias=false&para_glosas=true";
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    autoridades_api_url = "http://127.0.0.1:8001/autoridades?con_notarias=false&para_glosas=true";
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    autoridades_api_url = "http://172.30.37.233:8001/autoridades?con_notarias=false&para_glosas=true";
                    break;
                default:
                    // Para producción
                    autoridades_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/autoridades?con_notarias=false&para_glosas=true";
            }
            break;
        case "listas":
            switch (location.hostname) {
                case "localhost":
                    // Para desarrollo
                    listas_api_url = "http://localhost:8001/tesis_jurisprudencias?autoridad_id=" + id;
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    listas_api_url = "http://127.0.0.1:8001/tesis_jurisprudencias?autoridad_id=" + id;
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    listas_api_url = "http://172.30.37.233:8001/tesis_jurisprudencias?autoridad_id=" + id;
                    break;
                default:
                    // Para producción
                    listas_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/tesis_jurisprudencias?autoridad_id=" + id;
            }
            break;
        case "detalle":
            switch (location.hostname) {
                case "localhost":
                    // Para desarrollo
                    detalle_api_url = "http://localhost:8001/tesis_jurisprudencias/" + id;
                    break;
                case "127.0.0.1":
                    // Para desarrollo
                    detalle_api_url = "http://127.0.0.1:8001/tesis_jurisprudencias/" + id;
                    break;
                case "172.30.37.233":
                    // Para desarrollo
                    detalle_api_url = "http://172.30.37.233:8001/tesis_jurisprudencias/" + id;
                    break;
                default:
                    // Para producción
                    detalle_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/tesis_jurisprudencias/" + id;
            }
            break;
        }
}

function getAutoridades() {
    // Limpiar
    $('#divcargando').show();
    $('#autoridades').show();
    $('#tablaResultado').hide();
    $('#consultaJuzgado').val("");
    // Definir la URL de la API
    consulta("autoridades", 0, 0);
    // Consultar la API
    $.ajax({
        'url': autoridades_api_url,
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
    // Limpiar
    $('#divcargando').show();
    $('#autoridades').hide();
    $('#tablaResultado').show();
    $('#tablaDetalle').hide();
    $('#consultaJuzgado').val("");
    if ($('#ListasTable').length > 0) {
        $('#ListasTable').DataTable().clear();
        $('#ListasTable').DataTable().destroy();
    };
    // Definir la URL de la API
    if (anio == 0) {
        var currentYear = new Date().getFullYear();
        anio = currentYear
    }
    id_autoridad = autoridad;
    consulta("listas", id_autoridad, anio);
    var nombreAutoridad = "";
    // Consultar la API
    $.ajax({
        'url': listas_api_url,
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
                    { 'data': "id", 'width': "20%" },
                    { 'data': "aprobacion_fecha", 'width': "20%" },
                    { 'data': "titulo", 'width': "60%" }
                ],
                'columnDefs': [
                    {
                        'targets': 0,
                        'data': null,
                        render: function(data, type, row, meta) {
                            return '<button onClick="detalleConsulta(' + data + ')">' + data + '</button>';
                        }
                    }
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

function detalleConsulta(id_tesis_jurisprudencia) {
    // Limpiar
    $('#divcargando').show();
    $('#autoridades').hide();
    $('#tablaResultado').hide();
    $('#tablaDetalle').show();
    $('#consultaJuzgado').val("");
    // Definir la URL de la API
    consulta("detalle", id_tesis_jurisprudencia, 0);
    $.ajax({
        'url': detalle_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function(result) {
            $('#detalleTitulo').text(result.titulo);
            $('#detalleRegistro').text(result.id);
            $('#detalleSubtitulo').text(result.subtitulo);
            $('#detalleDistrito').text(result.distrito);
            $('#detalleAutoridad').text(result.autoridad);
            $('#detalleTipo').text(result.tipo);
            $('#detalleClaveControl').text(result.clave_control);
            $('#detalleClase').text(result.clase);
            $('#detalleRubro').text(result.rubro);
            $('#detalleTexto').text(result.texto);
            $('#detallePrecedentes').text(result.precedentes);
            $('#detalleVotacion').text(result.votacion);
            $('#detalleVotosParticulares').text(result.votos_particulares);
            $('#detalleEpoca').text(result.epoca);
            $('#detalleMateria').text(result.materia);
            $('#detalleAprobacionFecha').text(result.aprobacion_fecha);
            $('#detallePublicacionTiempo').text(result.publicacion_tiempo);
            $('#detalleAplicacionTiempo').text(result.aplicacion_tiempo);
            $('#divcargando').hide();
        }
    });
}
