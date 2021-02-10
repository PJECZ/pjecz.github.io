// Consultas Abogados Registrados
$(document).ready(function () {

    // Para desarrollo
    //const ABOGADOS_PLATAFORMA_WEB_API_URL = "http://localhost:8000/abogados"

    // Para producción
    const ABOGADOS_PLATAFORMA_WEB_API_URL = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/abogados"

    // Elaborar lista de años, desde el presente hasta 1925
    this.years = function (startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || 1925; // Por defecto este es el año más antiguo
        while (startYear <= currentYear) {
            years.push(currentYear--);
        }
        return years;
    }

    // Agregar cada año como opción al select
    $.each(this.years(), function (i, year) {
        $('#anoSelect').append($('<option>', {
            value: year,
            text: year
        }));
    });

    // Al dar clic en el botón mostrar
    $('#consultarButton').click(function () {

        // Ocultar botón Consultar, mostrar botón Cargando... y ocultar mensaje Sin resultados
        $('#consultarButton').hide();
        $('#cargandoButton').show();
        $('#sinResultados').hide();

        // Llamar a la API y ejecutar acciones al recibir resultados
        $.ajax({
            'url': ABOGADOS_PLATAFORMA_WEB_API_URL,
            'type': "GET",
            'data': {
                'ano': $('#anoSelect').val(),
                'nombre': $('#nombreInput').val(),
            },
            'dataType': "json",
            'success': function (data) {
                alRecibirResultados(data);
            }
        });

    }); // Al dar clic en el botón mostrar

    // Al recibir los datos de la API
    function alRecibirResultados(data) {

        // Si tiene datos, limpiar la tabla
        if ($('#abogadosRegistradosTable').length > 0) {
            $('#abogadosRegistradosTable').DataTable().clear();
            $('#abogadosRegistradosTable').DataTable().destroy();
        };

        // Si no hay resultados, muestra mensaje y termina
        if (data.length == 0) {
            $('#cargandoButton').hide();
            $('#consultarButton').show();
            $('#sinResultados').show();
            $('#abogadosRegistrados').hide();
            return;
        };

        // Mostrar tabla
        $('#abogadosRegistrados').show();

        // DataTable
        $('#abogadosRegistradosTable').DataTable({
            'data': data,
            'columns': [
                { 'data': "fecha", 'width': "20%" },
                { 'data': "libro", 'width': "20%" },
                { 'data': "numero", 'width': "20%" },
                { 'data': "nombre", 'width': "40%" }
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
