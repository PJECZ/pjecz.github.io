'use strict';

let distritos_plataforma_web_api_url;
let autoridades_plataforma_web_api_url;
let ubicaciones_expedientes_plataforma_web_api_url;
let distritos = [];
let encontradoIndice;
let formularioEsValido;

/*
 * Consultas Ubicación de Expedientes
 */
$(document).ready(function () {

    switch (location.hostname) {
        case "localhost":
            // Para desarrollo
            distritos_plataforma_web_api_url = "http://localhost:8001/distritos";
            autoridades_plataforma_web_api_url = "http://localhost:8001/autoridades";
            ubicaciones_expedientes_plataforma_web_api_url = "http://localhost:8001/ubicaciones_expedientes";
            break;
        case "127.0.0.1":
            // Para desarrollo
            distritos_plataforma_web_api_url = "http://127.0.0.1:8001/distritos";
            autoridades_plataforma_web_api_url = "http://127.0.0.1:8001/autoridades";
            ubicaciones_expedientes_plataforma_web_api_url = "http://127.0.0.1:8001/ubicaciones_expedientes";
            break;
        default:
            // Para producción
            distritos_plataforma_web_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/distritos";
            autoridades_plataforma_web_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/autoridades";
            ubicaciones_expedientes_plataforma_web_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/ubicaciones_expedientes";
    }

    // Cargar distritos
    $.ajax({
        'url': distritos_plataforma_web_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function (dataDistritos) {
            alRecibirDistritos(dataDistritos);
        }
    });
    function alRecibirDistritos(dataDistritos) {
        $.each(dataDistritos, function (i, distrito) {
            // Alimentar arreglo con objetos
            distritos.push({
                id: distrito.id,
                nombre: distrito.distrito,
                autoridades: []
            });
            // Agregar opciones a distritoSelect
            $('#distritoSelect').append($('<option>', {
                value: distrito.id,
                text: distrito.distrito
            }));
        });
        // Cargar autoridades
        $.ajax({
            'url': autoridades_plataforma_web_api_url,
            'type': "GET",
            'dataType': "json",
            'success': function (dataAutoridades) {
                alRecibirAutoridades(dataAutoridades);
            }
        });
        function alRecibirAutoridades(dataAutoridades) {
            // Acumular autoridades en cada distrito
            $.each(dataAutoridades, function (i, autoridad) {
                // Buscar distrito en el listado de objetos, acumular opción de autoridad
                encontradoIndice = distritos.findIndex(x => x.id == autoridad.distrito_id);
                if (encontradoIndice !== undefined && encontradoIndice !== -1) {
                    distritos[encontradoIndice]['autoridades'].push({
                        value: autoridad.id,
                        text: autoridad.autoridad
                    });
                }
            });
            // Poner las autoridades del primer distrito
            distritos[0]['autoridades'].forEach(
                valor_texto => $('#autoridadSelect').append($('<option>', valor_texto))
            );
        }
    }

    // Al cambiar el select distrito, cambiar las opciones de autoridad
    $("#distritoSelect").change(function () {
        $('#autoridadSelect').empty();
        encontradoIndice = distritos.findIndex(x => x.id == $(this).val());
        distritos[encontradoIndice]['autoridades'].forEach(
            valor_texto => $('#autoridadSelect').append($('<option>', valor_texto))
        );
    });

    // Al dar clic en el botón Consultar
    $('#consultarButton').click(function () {

        // Validar
        formularioEsValido = true;
        if ($('#expedienteInput').val().trim() == '') {
            $('#revisarParametrosAlert').text("Falta el número de expediente.");
            formularioEsValido = false;
        };

        // Si es válido el formulario
        if (formularioEsValido) {
            // Mostrar botón Cargando...
            $('#consultarButton').hide();
            $('#cargandoButton').show();
            $('#revisarParametros').hide();
            $('#sinResultados').hide();
            // Llamar a la API y ejecutar acciones hasta recibir resultados
            $.ajax({
                'url': ubicaciones_expedientes_plataforma_web_api_url,
                'type': "GET",
                'data': {
                    'autoridad_id': $('#autoridadSelect').val(),
                    'expediente': $('#expedienteInput').val().trim()
                },
                'dataType': "json",
                'success': function (data) {
                    alRecibirResultados(data);
                }
            });
        } else {
            // No es válido, debe revisar los parámetros
            $('#revisarParametros').show();
            $('#ubicacionExpedientes').hide();
        };

    });

    // Al recibir los datos de la API
    function alRecibirResultados(data) {

        // Si tiene datos, limpiar la tabla
        if ($('#ubicacionExpedientesTable').length > 0) {
            $('#ubicacionExpedientesTable').DataTable().clear();
            $('#ubicacionExpedientesTable').DataTable().destroy();
        };

        // Si no hay resultados, muestra mensaje y termina
        if (data.length == 0) {
            $('#cargandoButton').hide();
            $('#consultarButton').show();
            $('#sinResultados').show();
            $('#sinResultadosAlert').text("No se encontraron expedientes registrados con las opciones dadas.");
            $('#ubicacionExpedientes').hide();
            return;
        };

        // Mostrar tabla
        $('#ubicacionExpedientes').show();

        // DataTable
        $('#ubicacionExpedientesTable').DataTable({
            'data': data,
            'columns': [
                { 'data': "expediente", 'width': "50%" },
                { 'data': "ubicacion", 'width': "50%" }
            ],
            'pageLength': 10,
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

        // Mostrar botón Consultar y ocultar botón Cargando...
        $('#consultarButton').show();
        $('#cargandoButton').hide();

    }; // Al recibir los datos de la API

});
