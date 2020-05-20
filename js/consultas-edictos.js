// Consultas Edictos
$(document).ready(function() {

    // Inicialmente se muestra los select y se oculta la lista
    $("#elegirEdictos").show();
    $("#listaEdictos").hide();

    // Opciones del select distrito
    $("#distritoSelect").append(
        '<option value="0">- Elija la entidad/distrito -</select>',
        '<option value="1">Pleno del Tribunal Superior de Justicia</select>',
        '<option value="2">Salas TSJ</select>',
        '<option value="3">Distrito de Acuña</select>',
        '<option value="4">Distrito de Monclova</select>',
        '<option value="5">Distrito de Parras de la Fuente</select>',
        '<option value="6">Distrito de Rio Grande</select>',
        '<option value="7">Distrito de Sabinas</select>',
        '<option value="8">Distrito de Saltillo</select>',
        '<option value="9">Distrito de San Pedro de las Colonias</select>',
        '<option value="10">Distrito de Torreón</select>',
    );

    // Arreglo de opciones para el select autoridad,
    // debe tener la misma cantidad de elementos que el distritoSelect,
    // note los textos se concatenan con un signo de más
    // el primero está vacío porque no se ha elejido la entidad/distrito
    var options = [

        '',

        '<option value="">Pleno del Tribunal Superior de Justicia</option>',

        '<option value="">Sala Civil</option>',

        '<option value="">Juzgado de Primera Instancia en Materia Civil Acuña</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Acuña</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Penal Acuña</option>' +
        '<option value="">Notaria Pública 1 Acuña</option>' +
        '<option value="">Notaria Pública 2 Acuña</option>' +
        '<option value="">Notaria Pública 3 Acuña</option>' +
        '<option value="">Notaria Pública 5 Acuña</option>' +
        '<option value="">Notaria Pública 6 Acuña</option>' +
        '<option value="">Notaria Pública 8 Acuña</option>' +
        '<option value="">Notaria Pública 14 Acuña</option>' +
        '<option value="">Notaria Pública 17 Acuña</option>',

        '<option value="">Juzgado Primero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Notaria Pública 14 Monclova</option>' +
        '<option value="">Notaria Pública 15 Monclova</option>' +
        '<option value="">Notaria Pública 17 Monclova</option>' +
        '<option value="">Notaria Pública 18 Monclova</option>' +
        '<option value="">Notaria Pública 21 Monclova</option>' +
        '<option value="">Notaria Pública 22 Monclova</option>',

        '<option value="">Juzgado de Primera Instancia en Materia Civil y Familiar Parras</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Oral de Parras</option>',

        '<option value="">Juzgado Primero de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Familiar Piedras Negras</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Familiar Oral Piedras Negras</option>' +
        '<option value="">Notaria Pública 02 Piedras Negras</option>' +
        '<option value="">Notaria Pública 03 Piedras Negras</option>' +
        '<option value="">Notaria Pública 04 Piedras Negras</option>' +
        '<option value="">Notaria Pública 05 Piedras Negras</option>' +
        '<option value="">Notaria Pública 06 Piedras Negras</option>' +
        '<option value="">Notaria Pública 07 Piedras Negras</option>' +
        '<option value="">Notaria Pública 10 Piedras Negras</option>' +
        '<option value="">Notaria Pública 10 Zaragoza</option>' +
        '<option value="">Notaria Pública 12 Piedras Negras</option>' +
        '<option value="">Notaria Pública 13 Piedras Negras</option>',

        '<option value="">Juzgado de Primera Instancia en Materia Civil y Familiar Sabinas</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="">Juzgado Sexto Auxiliar de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="">Notaria Pública 5 Sabinas</option>' +
        '<option value="">Notaria Pública 6 Sabinas</option>' +
        '<option value="">Notaria Pública 7 Nueva Rosita</option>' +
        '<option value="">Notaria Pública 8 Nueva Rosita</option>' +
        '<option value="">Notaria Pública 12 Sabinas</option>' +
        '<option value="">Notaria Pública 13 Melchor Muzquiz</option>' +
        '<option value="">Notaria Pública 14 Sabinas</option>' +
        '<option value="">Notaria Pública 15 Nueva Rosita</option>',

        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Auxiliar del Juzgado Segundo Familiar Saltillo</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="">Notaria Pública 10 Saltillo</option>' +
        '<option value="">Notaria Pública 100 Saltillo</option>' +
        '<option value="">Notaria Pública 102 Saltillo</option>',

        '<option value="">Juzgado de Primera Instancia en Materia Civil San Pedro</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Oral San Pedro</option>' +
        '<option value="">Notaria Publica 7 Francisco I Madero</option>',

        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="">Juzgado en Materia de Adolescentes Torreón</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="">Juzgado Quinto de Primera Instancia en Materia Familiar Oral Torreón</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="">Juzgado Segundo Letrado Civil Torreón</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="">Notaria Publica 1 Torreon</option>' +
        '<option value="">Notaria Publica 10 Torreon</option>' +
        '<option value="">Notaria Publica 12 Torreon</option>'

    ];

    // Al cambiar el distrito se cambian las opciones en autoridad
    $("#distritoSelect").change(function() {
        var val = $(this).val();
        $("#autoridadSelect").html(options[val]);
    });

    // Al dar clic en el botón mostrar
    $("#mostrarButton").click(function(){

        // Si hay un valor en autoridadSelect
        if (!$("#autoridadSelect").is(":empty")) {

            // Si es la primera vez se muestra la tabla
            // de lo contrario hay que limpiar y destruir
            // para que puedan cargarse otros resultados
            if ($("#listaEdictos").is(":hidden")) {
                $("#listaEdictos").show();
            } else {
                $('#listaEdictos').DataTable().clear();
                $('#listaEdictos').DataTable().destroy();
            }

            // Cargar los datos a la tabla
            // toma el valor de distritoSelect que es el URL al archivo JSON
            // dicho archivo debe tener valores para Fecha, Sentencia, Expediente, P. Género y Archivo
            $('#listaEdictos').DataTable( {
                "ajax": $("#autoridadSelect").val(),
                "columns": [
                    { "data": "Fecha" },
                    { "data": "Expediente" },
                    { "data": "Edicto" },
                    { "data": "Descripcion" },
                    { "data": "Archivo",
                        "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                            $(nTd).html("<a href='"+oData.Archivo+"' target='_blank'><i class='fa fa-download'></i> Descargar</a>");
                        }
                    }
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
