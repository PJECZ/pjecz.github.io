// consultas-tesis-jurisprudencias.js
let autoridades_api_url = 0;
let listas_api_url;
let detalle_api_url;
let id_autoridad;

$(document).ready(function() {
    resultadoConsulta();
    $('#divcargando').hide();
    $('#tablaResultado').show();
    $('#tablaDetalle').hide();

    $("#btnbackTesisJusrisprudencias").click(function() {
        resultadoConsulta();
        $('#autoridades').hide();
    });

});

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

function resultadoConsulta(id_autoridad, anio) {
    // Limpiar
    $('#divcargando').show();
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
    id_autoridad = 0;
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
            // DataTable
            $('#ListasTable').DataTable({
                'data': result,
                'columns': [
                    { 'data': "id", 'width': "auto" },
                    { 'data': "aprobacion_fecha", 'width': "auto" },
                    { 'data': "titulo", 'width': "auto" },
                    { 'data': "subtitulo", 'width': "auto" },
                    { 'data': "autoridad", 'width': "auto" }
                ],
                'columnDefs': [
                    {
                        'targets': 0,
                        'data': null,
                        render: function(data, type, row, meta) {
                            return '<button type="button" class="btn btn-secondary" onClick="detalleConsulta(' + data + ')">' + data + '</button>';
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
            $('#detalleTituloTJ').text(result.titulo);
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
