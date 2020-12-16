// Consultas
$(document).ready(function() {

    $('#articulosNoticiasEventos').DataTable( {
        "ajax": '/json/noticias-eventos.json',
        "columns": [
            { "data": "date" },
            { "data": "title",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol)
                {
                    $(nTd).html("<a href='"+oData.url+"' target='_blank'>"+oData.title+"</a>");
                }
            },
            { "data": "summary" }
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
