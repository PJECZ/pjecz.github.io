// Consultas Listas Especiales
$(document).ready(function() {
    $('#listasEspecialesTabla').DataTable( {
        "ajax": 'https://storage.googleapis.com/pjecz-consultas/listas-especiales.json/listas-especiales.json',
        "columns": [
            { "data": "Fecha" },
            { "data": "Juzgado" },
            { "data": "Archivo",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='"+oData.Archivo+"'><i class='fa fa-download'></i> Descargar</a>");
                }
            }
        ],
        "pageLength": 50,
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
