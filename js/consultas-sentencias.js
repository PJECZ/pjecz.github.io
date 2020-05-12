// Consultas Sentencias
$(document).ready(function() {

    $("#sentenciasDiv").hide();
    $("#sentenciasTable").hide();

    $("#distritoSelect").append(
        '<option value="0">Pleno del Tribunal Superior de Justicia</select>',
        '<option value="1">Tribunal Constitucional Local</select>',
        '<option value="2">Tribunales Especializados</select>',
        '<option value="3">Salas TSJ</select>',
        '<option value="4">Tribunales Distritales</select>',
        '<option value="5">Distrito de Saltillo</select>',
        '<option value="6">Distrito de Monclova</select>',
        '<option value="7">Distrito de Sabinas</select>',
        '<option value="8">Distrito de Rio Grande</select>',
        '<option value="9">Distrito de Acuña</select>',
        '<option value="10">Distrito de Torreón</select>',
        '<option value="11">Distrito de San Pedro de las Colonias</select>',
        '<option value="12">Distrito de Parras de la Fuente</select>'
    );

    var options = [
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0001.json">Pleno del Tribunal Superior de Justicia</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0101.json">Tribunal Constitucional Local</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0201.json">Tribunal de Apelación Especializado en Materia de Adolescentes</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0202.json">Tribunal de Conciliación y Arbitraje</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0301.json">Sala Civil</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0302.json">Sala Auxiliar Penal</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0303.json">Sala Penal</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0304.json">Sala Regional</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0401.json">Primer Tribunal Distrital</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0402.json">Segundo Tribunal Distrital</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0403.json">Tercer Tribunal Distrital</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0404.json">Cuarto Tribunal Distrital</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0501.json">Juzgado Primero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0502.json">Juzgado Segundo de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0503.json">Juzgado Tercero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0504.json">Juzgado Cuarto de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0505.json">Juzgado Primero de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0506.json">Juzgado Segundo de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0507.json">Juzgado Tercero de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0508.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0509.json">Juzgado Primero de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0510.json">Juzgado Segundo de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0511.json">Juzgado Tercero de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0512.json">Juzgado Primero de Primera Instancia en Materia Penal Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0513.json">Juzgado Primero Letrado Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0514.json">Juzgado Segundo Letrado Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0515.json">Juzgado Segundo Penal Saltillo Especializado en Narcomenudeo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0516.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio y Oral Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0517.json">Juzgado de Primera Instancia en Materia Familiar Auxiliar del Juzgado Segundo Familiar Saltillo</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0601.json">Juzgado Primero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0602.json">Juzgado Segundo de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0603.json">Juzgado Tercero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0604.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0605.json">Juzgado Primero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0606.json">Juzgado Segundo de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0607.json">Juzgado Tercero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0608.json">Juzgado Primero de Primera Instancia en Materia Penal Monclova</option>',
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0609.json">Juzgado de Primera Instancia Penal del Sistema Acusatorio y Oral Frontera</option>' +

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0701.json">Juzgado de Primera Instancia en Materia Civil y Familiar Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0702.json">Juzgado de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0703.json">Juzgado de Primera Instancia en Materia Penal de Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0704.json">Juzgado de Primera Instancia Penal del Sistema Acusatorio y Oral Sabinas</option>',
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0705.json">Juzgado Sexto Auxiliar de Primera Instancia en Materia Familiar Sabinas</option>' +

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0801.json">Juzgado Primero de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0802.json">Juzgado Segundo de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0803.json">Juzgado Primero de Primera Instancia en Materia Familiar Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0804.json">Juzgado Segundo de Primera Instancia en Materia Familiar Oral Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0805.json">Juzgado Primero Penal Piedras Negras Especializado en Narcomenudeo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0806.json">Juzgado Segundo de Primera Instancia en Materia Penal Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0807.json">Juzgado Tercero de Primera Instancia en Materia Penal Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0808.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio y Oral Piedras Negras</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0901.json">Juzgado de Primera Instancia en Materia Civil Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0902.json">Juzgado de Primera Instancia en Materia Penal Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0903.json">Juzgado de Primera Instancia en Materia Familiar Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-0904.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio Y Oral de Acuña</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1001.json">Juzgado Primero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1002.json">Juzgado Segundo de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1003.json">Juzgado Primero de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1004.json">Juzgado Segundo de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1005.json">Juzgado Cuarto de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1006.json">Juzgado Tercero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1007.json">Juzgado Tercero de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1008.json">Juzgado Segundo Letrado Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1009.json">Juzgado Quinto de Primera Instancia en Materia Familiar Oral Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1010.json">Juzgado Primero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1011.json">Juzgado Segundo de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1012.json">Juzgado Tercero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1013.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1014.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio y Oral Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1015.json">Juzgado Primero de Primera Instancia en Materia Penal Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1016.json">Juzgado Segundo de Primera Instancia en Materia Penal Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1017.json">Juzgado Tercero de Primera Instancia en Materia Penal Especializado en Narcomenudeo Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1018.json">Juzgado Cuarto de Primera Instancia en Materia Penal Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1019.json">Juzgado Quinto de Primera Instancia en Materia Penal Torreón</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1101.json">Juzgado de Primera Instancia en Materia Civil San Pedro</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1102.json">Juzgado de Primera Instancia en Materia Familiar Oral San Pedro</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1201.json">Juzgado de Primera Instancia en Materia Civil y Familiar Parras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/sentencias-1202.json">Juzgado de Primera Instancia en Materia Familiar Oral de Parras</option>'
    ];

    $("#distritoSelect").change(function() {
        var val = $(this).val();
        $("#autoridadSelect").html(options[val]);
    });

    $("#mostrarButton").click(function(){
        console.log($("#autoridadSelect").val())
    });

    $("#sentenciasDiv").show();

} );
