'use strict';

let distritos_api_url;
let redams_api_url;

$(document).ready(function() {

    // Que no se refresque la página al presionar Enter
    $('#buscarForm').on('submit', function(event){
        event.preventDefault();
    });

    // URL de la API
    switch (location.hostname) {
        case "localhost":
            // Para desarrollo
            distritos_api_url = "http://localhost:8001/distritos";
            redams_api_url = "http://localhost:8001/v2/redams";
            break;
        case "127.0.0.1":
            // Para desarrollo
            distritos_api_url = "http://127.0.0.1:8001/distritos";
            redams_api_url = "http://127.0.0.1:8001/v2/redams";
            break;
        case "172.30.37.233":
            // Para desarrollo
            distritos_api_url = "http://172.30.37.233:8001/distritos";
            redams_api_url = "http://172.30.37.233:8001/v2/redams";
            break;
        default:
            // Para producción
            distritos_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/distritos";
            redams_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/v2/redams";
    }

    // Alimentar distritoSelect
    $.ajax({
        'url': distritos_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function (dataDistritos) {
            alRecibirDistritos(dataDistritos);
        }
    });
    function alRecibirDistritos(data) {
        $('#distritoSelect').append($('<option>', {
            value: 0,
            text: 'Todos'
        }))
        $.each(data, function (i, distrito) {
            $('#distritoSelect').append($('<option>', {
                value: distrito.id,
                text: distrito.distrito
            }));
        });
    };

    // Al dar clic en el botón Consultar
    $('#consultarButton').click(function () {

        // Validar formulario
        let valido = true;
        let nombre = $('#nombreInput').val().trim();
        if (nombre != "" && nombre.length < 4) {
            $('#revisarParametrosAlert').text("El nombre a buscar debe tener por lo menos cuatro letras.");
            valido = false;
        };

        // Si es válido el formulario
        if (valido) {
            // Mostrar botón Cargando...
            $('#consultarButton').hide();
            $('#cargandoButton').show();
            $('#revisarParametros').hide();
            $('#sinResultados').hide();
            // Mostrar DataTable
            ejecutarDataTable();
        } else {
            // Mostrar mensaje de validacion
            $('#revisarParametros').show();
            $('#resultadosDiv').hide();
        };

    });

    // Ejecutar DataTable
    function ejecutarDataTable() {

        // Si tiene datos, limpiar la tabla
        if ($('#resultadosDataTable').length > 0) {
            $('#resultadosDataTable').DataTable().clear();
            $('#resultadosDataTable').DataTable().destroy();
        };

        // Mostrar tabla
        $('#resultadosDiv').show();

        // DataTable
        $('#resultadosDataTable').DataTable({
            'lengthChange': false,
            'ordering': false,
            'searching': false,
            'scrollX': true,
            'serverSide': true,
            'ajax': {
                'url': redams_api_url,
                'type': "GET",
                'data': {
                    'distrito_id': $('#distritoSelect').val(),
                    'nombre': $('#nombreInput').val(),
                },
                'dataType': "json",
                'dataSrc': function (response) {
                    $('#cargandoButton').hide();
                    $('#consultarButton').show();
                    if (response.data.length > 0) {
                        $('#sinResultados').hide();
                        $('#sinResultadosAlert').text("");
                        $('#resultadosDiv').show();
                    } else {
                        $('#sinResultados').show();
                        $('#sinResultadosAlert').text("No se encontraron registros con las opciones dadas.");
                        $('#resultadosDiv').hide();
                    }
                    return response.data;
                }
            },
            'columns': [
                { "data": "distrito_nombre_corto" },
                { "data": "autoridad_descripcion_corta" },
                { "data": "nombre" },
                { "data": "expediente" },
                { "data": "fecha" }
            ],
            'language': {
                'lengthMenu': "Mostrar _MENU_",
                'search': "Filtrar:",
                'zeroRecords': "No se encontraron registros",
                'info': "Total de registros _TOTAL_",
                'infoEmpty': "No hay registros",
                'infoFiltered': "(_TOTAL_ filtrados de _MAX_ registros)",
                'oPaginate': {
                    'sFirst': "Primero",
                    'sLast': "Último",
                    'sNext': "Siguiente",
                    'sPrevious': "Anterior"
                }
            }
        });

    };

});
