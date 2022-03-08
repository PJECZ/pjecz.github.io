'use strict';

let distritos_plataforma_web_api_url;
let peritos_plataforma_web_api_url;

$(document).ready(function () {

    // Que no se refresque la página al presionar Enter
    $('#buscarForm').on('submit', function(event){
        event.preventDefault();
    });

    // URL de la API
    switch (location.hostname) {
        case "localhost":
            // Para desarrollo
            distritos_plataforma_web_api_url = "http://localhost:8001/distritos";
            peritos_plataforma_web_api_url = "http://localhost:8001/peritos";
            break;
        case "127.0.0.1":
            // Para desarrollo
            distritos_plataforma_web_api_url = "http://127.0.0.1:8001/distritos";
            peritos_plataforma_web_api_url = "http://127.0.0.1:8001/peritos";
            break;
        default:
            // Para producción
            distritos_plataforma_web_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/distritos";
            peritos_plataforma_web_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/peritos";
    }

    // Alimentar distritoSelect
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
                    'url': peritos_plataforma_web_api_url,
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
                    'url': peritos_plataforma_web_api_url,
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
            $('#peritosRegistrados').hide();
        };

    });

    // Al recibir los datos de la API
    function alRecibirResultados(data) {

        // Si tiene datos, limpiar la tabla
        if ($('#peritosRegistradosTable').length > 0) {
            $('#peritosRegistradosTable').DataTable().clear();
            $('#peritosRegistradosTable').DataTable().destroy();
        };

        // Si no hay resultados, muestra mensaje y termina
        if (data.length == 0) {
            $('#cargandoButton').hide();
            $('#consultarButton').show();
            $('#sinResultados').show();
            $('#sinResultadosAlert').text("No se encontraron expedientes registrados con las opciones dadas.");
            $('#peritosRegistrados').hide();
            return;
        };

        // Mostrar tabla
        $('#peritosRegistrados').show();
        $('#peritosRegistradosTitle').text($('#distritoSelect option:selected').text()); // Toma el texto del distrito elegido

        // DataTable
        $('#peritosRegistradosTable').DataTable({
            'data': data,
            'columns': [
                { 'data': "perito_tipo", 'width': "10%" },
                { 'data': "nombre", 'width': "30%" },
                { 'data': "domicilio", 'width': "10%" },
                { 'data': "telefono_fijo", 'width': "10%" },
                { 'data': "telefono_celular", 'width': "10%" },
                { 'data': "email", 'width': "10%" },
                { 'data': "notas", 'width': "20%" }
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
