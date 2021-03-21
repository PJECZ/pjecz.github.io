// Consultas Ubicación de Expedientes
$(document).ready(function () {

    // Variables
    if (location.hostname === "localhost") {
        // Para desarrollo
        var DISTRITOS_PLATAFORMA_WEB_API_URL = "http://localhost:8001/distritos"
        var AUTORIDADES_PLATAFORMA_WEB_API_URL = "http://localhost:8001/autoridades"
        var UBICACIONES_EXPEDIENTES_PLATAFORMA_WEB_API_URL = "http://localhost:8001/ubicaciones_expedientes"
    } else if (location.hostname === "127.0.0.1") {
        // Para desarrollo
        var DISTRITOS_PLATAFORMA_WEB_API_URL = "http://127.0.0.1:8001/distritos"
        var AUTORIDADES_PLATAFORMA_WEB_API_URL = "http://127.0.0.1:8001/autoridades"
        var UBICACIONES_EXPEDIENTES_PLATAFORMA_WEB_API_URL = "http://127.0.0.1:8001/ubicaciones_expedientes"
    } else {
        // Para producción
        var DISTRITOS_PLATAFORMA_WEB_API_URL = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/distritos"
        var AUTORIDADES_PLATAFORMA_WEB_API_URL = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/autoridades"
        var UBICACIONES_EXPEDIENTES_PLATAFORMA_WEB_API_URL = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/ubicaciones_expedientes"
    }
    var distrito_id_max = 0
    var autoridades_opciones = []

    // Cargar distritos
    $.ajax({
        'url': DISTRITOS_PLATAFORMA_WEB_API_URL,
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
            if (distrito.id > distrito_id_max) {
                distrito_id_max = distrito.id;
            };
        });
        // Cargar autoridades
        $.ajax({
            'url': AUTORIDADES_PLATAFORMA_WEB_API_URL,
            'type': "GET",
            'dataType': "json",
            'success': function (dataAutoridades) {
                alRecibirAutoridades(dataAutoridades);
            }
        });
        function alRecibirAutoridades(dataAutoridades) {
            for (let i = 0; i < distrito_id_max; i++) {
                autoridades_opciones.push([]);
            }
            $.each(dataAutoridades, function (i, autoridad) {
                console.log();
                autoridades_opciones[autoridad.distrito_id - 1].push({
                    value: autoridad.id,
                    text: autoridad.autoridad
                });
            });
        };
    };

    // Al cambiar el select distrito, cambiar las opciones de autoridad
    $("#distritoSelect").change(function () {
        $('#autoridadSelect').empty();
        autoridades_opciones[$(this).val() - 1].forEach(cargarAutoridades);
    });
    function cargarAutoridades(value, index, array) {
        $("#autoridadSelect").append($('<option>', value));
    };

    // Al dar clic en el botón Consultar
    $('#consultarButton').click(function () {

        // Validar
        var valido = true;
        if ($('#expedienteInput').val().trim() == '') {
            $('#revisarParametrosAlert').text("Falta el número de expediente.");
            valido = false;
        };

        // Si es válido el formulario
        if (valido) {
            // Mostrar botón Cargando...
            $('#consultarButton').hide();
            $('#cargandoButton').show();
            $('#revisarParametros').hide();
            $('#sinResultados').hide();
            // Llamar a la API y ejecutar acciones hasta recibir resultados
            $.ajax({
                'url': UBICACIONES_EXPEDIENTES_PLATAFORMA_WEB_API_URL,
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
