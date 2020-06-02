// Consultas Agenda de Audiencias
$(document).ready(function() {

    // Inicialmente se muestra los select y se oculta la lista
    $("#elegirAgendaAudiencias").show();
    $("#listaAgendaAudiencias").hide();

    // Opciones del select distrito
    let distritoSelect = $("#distritoSelect");
    distritoSelect.empty();
    distritoSelect.append('<option selected="true" disabled>- Elija la entidad o distrito -</option>');
    distritoSelect.prop("selectedIndex", 0);
    $.getJSON("/json/distritos.json", function(datos) {
        $.each(datos, function(clave, dato) {
            distritoSelect.append($('<option></option>').attr('value', dato.id).text(dato.nombre))
        })
    });

    // Al cambiar el distrito se cambian las opciones en autoridad
    $("#distritoSelect").change(function() {
        var val = $(this).val();
        $("#autoridadSelect").html();
    });

    // Al dar clic en el botón mostrar
    $("#mostrarButton").click(function(){

        // Si hay un valor en autoridadSelect
        if (!$("#autoridadSelect").is(":empty")) {

            // Si es la primera vez se muestra la tabla
            // de lo contrario hay que limpiar y destruir
            // para que puedan cargarse otros resultados
            if ($("#listaDeAcuerdos").is(":hidden")) {
                $("#listaDeAcuerdos").show();
            } else {
                $('#listaDeAcuerdos').DataTable().clear();
                $('#listaDeAcuerdos').DataTable().destroy();
            }

            // Cargar los datos a la tabla
            // toma el valor de distritoSelect que es el URL al archivo JSON
            // dicho archivo debe tener valores indicados
            $('#listaDeAcuerdos').DataTable( {
                "ajax": $("#autoridadSelect").val(),
                "columns": [
                    { "data": "Fecha" },
                    { "data": "Expediente" },
                    { "data": "Audencia" },
                    { "data": "Actores" },
                    { "data": "Demandados" }
                ],
                "pageLength": 50,
                "order": [[ 0, "desc" ]],
                "language": {
                    "lengthMenu": "Mostrar _MENU_",
                    "search": "Filtrar:",
                    "zeroRecords": "Cargando información...",
                    "info": "Página _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay registros",
                    "infoFiltered": "(filtrados desde _MAX_ registros totales)",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast": "Último",
                        "sNext": "Siguiente",
                        "sPrevious": "Anterior"
                    }
                }
            }); // Cargar los datos a la tabla

        } // Si hay un valor en autoridadSelect

    }); // Al dar clic en el botón mostrar

});
