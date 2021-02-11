// Consultas Abogados Registrados
$(document).ready(function () {

    // Para desarrollo
    //const ABOGADOS_PLATAFORMA_WEB_API_URL = "http://localhost:8001/abogados"

    // Para producción
    const ABOGADOS_PLATAFORMA_WEB_API_URL = "https://plataforma-web-api-dot-pjecz-268521.uc.r.appspot.com/abogados"

    // Primer año
    const PRIMER_ANO = 1925

    // Elaborar lista de años, desde el presente hasta 1925
    this.years = function (startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear || PRIMER_ANO;
        while (startYear <= currentYear) {
            years.push(currentYear--);
        }
        return years;
    }

    // Agregar en Año de registro desde las opciones al select
    $.each(this.years(), function (i, year) {
        $('#anoDesdeSelect').append($('<option>', {
            value: year,
            text: year
        }));
    });
    $('#anoDesdeSelect').val(PRIMER_ANO);

    // Agregar en Año de registro hasta las opciones al select
    $.each(this.years(), function (i, year) {
        $('#anoHastaSelect').append($('<option>', {
            value: year,
            text: year
        }));
    });

    // Al dar clic en el botón mostrar
    $('#consultarButton').click(function () {

        // Validar
        var valido = true;
        if ($('#nombreInput').val().trim() == '') {
            $('#revisarParametrosAlert').text("Revise por favor: Falta el nombre.");
            valido = false;
        };
        if ($('#anoDesdeSelect').val() > $('#anoHastaSelect').val()) {
            $('#revisarParametrosAlert').text('Revise por favor: El año "desde" debe ser menor que el año "hasta".');
            valido = false;
        };
        if (valido) {
            // Ocultar botón Consultar, mostrar botón Cargando... y ocultar mensaje Sin resultados
            $('#consultarButton').hide();
            $('#cargandoButton').show();
            $('#revisarParametros').hide();
            $('#sinResultados').hide();
            // Llamar a la API y ejecutar acciones al recibir resultados
            $.ajax({
                'url': ABOGADOS_PLATAFORMA_WEB_API_URL,
                'type': "GET",
                'data': {
                    'ano_desde': $('#anoDesdeSelect').val(),
                    'ano_hasta': $('#anoHastaSelect').val(),
                    'nombre': $('#nombreInput').val().trim(),
                },
                'dataType': "json",
                'success': function (data) {
                    alRecibirResultados(data);
                }
            });
        } else {
            $('#revisarParametros').show();
            $('#abogadosRegistrados').hide();
        }

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
            $('#sinResultadosAlert').text("No se encontraron abogados registrados con las opciones dadas.");
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
