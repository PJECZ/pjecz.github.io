// Consultas Listas de Acuerdos
$(document).ready(function() {

    $("#elegirListaDeAcuerdos").show();
    $("#listaDeAcuerdos").hide();

    $("#distritoSelect").append(
        '<option value="0">Pleno del Tribunal Superior de Justicia</select>',
        '<option value="1">Tribunal Constitucional Local</select>',
        '<option value="2">Tribunales Especializados</select>',
        '<option value="3">Salas TSJ</select>',
        '<option value="4">Tribunal Distrital Saltillo materia Penal</select>',
        '<option value="5">Tribunal Electoral del Estado de Coahuila de Zaragoza</select>',
        '<option value="6">Tribunales Distritales</select>',
        '<option value="7">Distrito de Acuña</select>',
        '<option value="8">Distrito de Monclova</select>',
        '<option value="9">Distrito de Parras de la Fuente</select>',
        '<option value="10">Distrito de Rio Grande</select>',
        '<option value="11">Distrito de Sabinas</select>',
        '<option value="12">Distrito de Saltillo</select>',
        '<option value="13">Distrito de San Pedro de las Colonias</select>',
        '<option value="14">Distrito de Torreón</select>'
    );

    var options = [
        '<option value="#">Pleno del Tribunal Superior de Justicia</option>',

        '<option value="#">Tribunal Constitucional Local</option>',

        '<option value="#">Tribunales Especializados</option>',

        '<option value="#">Salas TSJ</option>',

        '<option value="#">Tribunal Distrital Saltillo materia Penal</option>',

        '<option value="#">Tribunal Electoral del Estado de Coahuila de Zaragoza</option>',

        '<option value="#">Tribunales Distritales</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Civil Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Familiar Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Penal Acuña</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Penal Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Monclova/Juzgado%20en%20Materia%20de%20Adolescentes%20Monclova/lista.json">Juzgado en Materia de Adolescentes Monclova</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Parras%20de%20la%20Fuente/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20y%20Familiar%20Parras/lista.json">Juzgado de Primera Instancia en Materia Civil y Familiar Parras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Parras%20de%20la%20Fuente/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20de%20Parras/lista.json">Juzgado de Primera Instancia en Materia Familiar Oral de Parras</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Piedras%20Negras/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Piedras%20Negras/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20Penal%20Piedras%20Negras%20Especializado%20en%20Narcomenudeo/lista.json">Juzgado Primero Penal Piedras Negras Especializado en Narcomenudeo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Oral Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Penal Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Piedras%20Negras/lista.json">Juzgado Tercero de Primera Instancia en Materia Penal Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Rio%20Grande/Juzgado%20en%20Materia%20de%20Adolescentes%20Piedras%20Negras/lista.json">Juzgado en Materia de Adolescentes Piedras Negras</option>',

        '<option value="#">Distrito de Sabinas</option>',

        '<option value="#">Distrito de Saltillo</option>',

        '<option value="#">Distrito de San Pedro de las Colonias</option>',

        '<option value="#">Distrito de Torreón</option>'
    ];

    $("#distritoSelect").change(function() {
        var val = $(this).val();
        $("#autoridadSelect").html(options[val]);
    });

    $("#mostrarButton").click(function(){

        console.log($("#autoridadSelect").val())

        $("#listaDeAcuerdos").show();

        $('#listaDeAcuerdos').DataTable( {
            "ajax": $("#autoridadSelect").val(),
            "ajax": 'https://storage.googleapis.com/pjecz-consultas/Listas%20de%20Acuerdos/Distrito%20de%20Parras%20de%20la%20Fuente/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20y%20Familiar%20Parras/' + + '/' + ,
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

    });

} );
