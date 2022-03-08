'use strict';

let distritos_api_url;
let repsvm_agresores_api_url;

$(document).ready(function() {

    switch (location.hostname) {
        case "localhost":
            // Para desarrollo
            distritos_api_url = "http://localhost:8001/distritos";
            repsvm_agresores_api_url = "http://localhost:8001/repsvm_agresores";
            break;
        case "127.0.0.1":
            // Para desarrollo
            distritos_api_url = "http://127.0.0.1:8001/distritos";
            repsvm_agresores_api_url = "http://127.0.0.1:8001/repsvm_agresores";
            break;
        case "172.30.37.233":
            // Para desarrollo
            distritos_api_url = "http://172.30.37.233:8001/distritos";
            repsvm_agresores_api_url = "http://172.30.37.233:8001/repsvm_agresores";
            break;
        default:
            // Para producción
            distritos_api_url = "http://plataforma-web-api.justiciadigital.gob.mx/distritos";
            repsvm_agresores_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/repsvm_agresores";
    }

    // Llamar a la API de Distritos para alimentar distritoSelect
    $.ajax({
        'url': distritos_api_url,
        'type': "GET",
        'dataType': "json",
        'success': function (dataDistritos) {
            alRecibirDistritos(dataDistritos);
        }
    });
    function alRecibirDistritos(dataDistritos) {
        $.each(dataDistritos, function (i, distrito) {
            $('#distritoSelect').append($('<option>', {
                value: distrito.id,
                text: distrito.distrito
            }));
        });
    };

    // Al dar clic en el botón Consultar
    $('#consultarButton').click(function () {

        // Validar
        let valido = true;
        let distrito = $('#distritoSelect').val();
        let nombre = $('#nombreInput').val().trim();
        if (nombre != "" && nombre.length < 4) {
            $('#revisarParametrosAlert').text("El nombre a buscar debe tener por lo menos cuatro letras.");
            valido = false;
        };

        // Si es válido el formulario
        if (valido) {
            // Ocultar botón Consultar, mostrar botón Cargando... y ocultar mensaje Sin resultados
            $('#consultarButton').hide();
            $('#cargandoButton').show();
            $('#revisarParametros').hide();
            $('#sinResultados').hide();
            // Llamar a la API y ejecutar acciones hasta recibir resultados
            if (nombre == "") {
                $.ajax({
                    'url': repsvm_agresores_api_url,
                    'type': "GET",
                    'data': {
                        'distrito_id': distrito
                    },
                    'dataType': "json",
                    'success': function (data) {
                        alRecibirResultados(data);
                    }
                });
            } else {
                $.ajax({
                    'url': repsvm_agresores_api_url,
                    'type': "GET",
                    'data': {
                        'distrito_id': distrito,
                        'nombre': nombre
                    },
                    'dataType': "json",
                    'success': function (data) {
                        alRecibirResultados(data);
                    }
                });
            }
        } else {
            $('#revisarParametros').show();
            $('#resultadosDiv').hide();
        };

    });

    // Al recibir los datos de la API
    function alRecibirResultados(data) {

        // Si tiene datos, limpiar la tabla
        if ($('#resultadosDataTable').length > 0) {
            $('#resultadosDataTable').DataTable().clear();
            $('#resultadosDataTable').DataTable().destroy();
        };

        // Si no hay resultados, muestra mensaje y termina
        if (data.length == 0) {
            $('#cargandoButton').hide();
            $('#consultarButton').show();
            $('#sinResultados').show();
            $('#sinResultadosAlert').text("No se encontraron registros con las opciones dadas.");
            $('#resultadosDiv').hide();
            return;
        };

        // Mostrar tabla
        $('#resultadosDiv').show();

        // DataTable
        $('#resultadosDataTable').DataTable({
            'data': data,
            'columns': [
                { "data": "id" },
                { "data": "distrito" },
                { "data": "materia_tipo_juzgado" },
                { "data": "delito_generico" },
                { "data": "delito_especifico" },
                { "data": "tipo_sentencia" },
                { "data": "nombre" },
                { "data": "numero_causa" },
                { "data": "pena_impuesta" },
                { "data": "observaciones" }
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

    };

} );
