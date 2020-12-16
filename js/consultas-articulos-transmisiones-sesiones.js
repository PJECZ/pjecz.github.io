// Consultas
$(document).ready(function() {

    $('#articulosTransmisionesSesiones').DataTable( {
        "ajax": '/json/transmisiones-sesiones.json',
        "columns": [
            { "data": "date" },
            { "data": "category" },
            { "data": "title",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol)
                {
                    $(nTd).html("<a href='"+oData.url+"' target='_blank'>"+oData.title+"</a>");
                }
            }
        ],
        "pageLength": 10,
        "order": [[ 0, "desc" ]],
        "language": {
            "lengthMenu": "Mostrar _MENU_",
            "search": "Filtrar:",
            "zeroRecords": "No se encontraron registros",
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
    } );

} );
