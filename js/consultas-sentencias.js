// Consultas Sentencias
$(document).ready(function () {

    // Inicialmente se muestra los select y se oculta la lista
    $("#elegirListaDeSentencias").show();
    $("#listaDeSentencias").hide();

    // Opciones del select distrito
    $("#distritoSelect").append(
        '<option value="0">- Elija la entidad/distrito -</select>',
        '<option value="1">Consejo de la Judicatura</select>',
        '<option value="2">Pleno del Tribunal Superior de Justicia</select>',
        '<option value="3">Tribunal Constitucional Local</select>',
        '<option value="4">Tribunales Especializados</select>',
        '<option value="5">Salas TSJ</select>',
        '<option value="6">Tribunal Distrital Rio Grande Materia Penal</select>',
        '<option value="7">Tribunal Distrital Saltillo Materia Penal</select>',
        '<option value="8">Tribunales Distritales</select>',
        '<option value="9">Distrito de Acuña</select>',
        '<option value="10">Distrito de Monclova</select>',
        '<option value="11">Distrito de Parras de la Fuente</select>',
        '<option value="12">Distrito de Rio Grande</select>',
        '<option value="13">Distrito de Sabinas</select>',
        '<option value="14">Distrito de Saltillo</select>',
        '<option value="15">Distrito de San Pedro de las Colonias</select>',
        '<option value="16">Distrito de Torreón</select>'
    );

    // Arreglo de opciones para el select autoridad,
    // debe tener la misma cantidad de elementos que el distritoSelect,
    // note los textos se concatenan con un signo de más
    // el primero está vacío porque no se ha elejido la entidad/distrito
    var options = [

        '',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Consejo%20de%20la%20Judicatura/Consejo%20de%20la%20Judicatura/lista.json">Consejo de la Judicatura</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Pleno%20del%20Tribunal%20Superior%20de%20Justicia/Pleno%20del%20Tribunal%20Superior%20de%20Justicia/lista.json">Pleno del Tribunal Superior de Justicia</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunal%20Constitucional%20Local/Tribunal%20Constitucional%20Local/lista.json">Tribunal Constitucional Local</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunales%20Especializados/Tribunal%20de%20Apelaci%C3%B3n%20Especializado%20en%20Materia%20de%20Adolescentes/lista.json">Tribunal de Apelación Especializado en Materia de Adolescentes</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunales%20Especializados/Tribunal%20de%20Conciliaci%C3%B3n%20y%20Arbitraje/lista.json">Tribunal de Conciliación y Arbitraje</option>',


        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Colegiada%20Civil%20y%20Familiar/lista.json">Sala Colegiada Civil y Familiar</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Colegiada%20Penal/lista.json">Sala Colegiada Penal</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Regional/lista.json">Sala Regional</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Regional%20Penal/lista.json">Sala Regional Penal</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Regional%20Ponencia%20Carlos%20de%20Lara%20McGrat/lista.json">Sala Regional Ponencia Carlos de Lara McGrat</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Regional%20Ponencia%20Jos%C3%A9%20Francisco%20G%C3%B3mez%20G%C3%B3mez/lista.json">Sala Regional Ponencia José Francisco Gómez Gómez</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Regional%20Ponencia%20Jos%C3%A9%20Ignacio%20M%C3%A1ynez%20Varela/lista.json">Sala Regional Ponencia José Ignacio Máynez Varela</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Regional%20Ponencia%20Ulises%20G.%20Hern%C3%A1ndez%20Torres/lista.json">Sala Regional Ponencia Ulises G. Hernández Torres</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Salas%20TSJ/Sala%20Regional%20Ponencia%20Vladimir%20Kaiceros%20Barranco/lista.json">Sala Regional Ponencia Vladimir Kaiceros Barranco</option>',


        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunal%20Distrital%20Rio%20Grande%20Materia%20Penal/Tribunal%20Distrital%20Rio%20Grande%20Materia%20Penal/lista.json">Tribunal Distrital Rio Grande Materia Penal</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunal%20Distrital%20Saltillo%20Materia%20Penal/Tribunal%20Distrital%20Saltillo%20Materia%20Penal/lista.json">Tribunal Distrital Saltillo Materia Penal</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunales%20Distritales/Primer%20Tribunal%20Distrital/lista.json">Primer Tribunal Distrital</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunales%20Distritales/Segundo%20Tribunal%20Distrital/lista.json">Segundo Tribunal Distrital</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunales%20Distritales/Tercer%20Tribunal%20Distrital/lista.json">Tercer Tribunal Distrital</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Tribunales%20Distritales/Cuarto%20Tribunal%20Distrital/lista.json">Cuarto Tribunal Distrital</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Civil Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Familiar Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Penal Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20del%20Sistema%20Acusatorio%20Y%20Oral%20de%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio Y Oral de Acuña</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Penal Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Monclova/Juzgado%20de%20Primera%20Instancia%20Penal%20del%20Sistema%20Acusatorio%20y%20Oral%20Frontera/lista.json">Juzgado de Primera Instancia Penal del Sistema Acusatorio y Oral Frontera</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Parras%20de%20la%20Fuente/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20y%20Familiar%20Parras/lista.json">Juzgado de Primera Instancia en Materia Civil y Familiar Parras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Parras%20de%20la%20Fuente/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20de%20Parras/lista.json">Juzgado de Primera Instancia en Materia Familiar Oral de Parras</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Piedras%20Negras/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Piedras%20Negras/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20Penal%20Piedras%20Negras%20Especializado%20en%20Narcomenudeo/lista.json">Juzgado Primero Penal Piedras Negras Especializado en Narcomenudeo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Oral Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Penal Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Piedras%20Negras/lista.json">Juzgado Tercero de Primera Instancia en Materia Penal Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Rio%20Grande/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20del%20Sistema%20Acusatorio%20y%20Oral%20Piedras%20Negras/lista.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio y Oral Piedras Negras</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Sabinas/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20y%20Familiar%20Sabinas/lista.json">Juzgado de Primera Instancia en Materia Civil y Familiar Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Sabinas/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Sabinas/lista.json">Juzgado de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Sabinas/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20de%20Sabinas/lista.json">Juzgado de Primera Instancia en Materia Penal de Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Sabinas/Juzgado%20de%20Primera%20Instancia%20Penal%20del%20Sistema%20Acusatorio%20y%20Oral%20Sabinas/lista.json">Juzgado de Primera Instancia Penal del Sistema Acusatorio y Oral Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Sabinas/Juzgado%20Sexto%20Auxiliar%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Sabinas/lista.json">Juzgado Sexto Auxiliar de Primera Instancia en Materia Familiar Sabinas</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Saltillo/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Auxiliar%20del%20Juzgado%20Segundo%20Familiar%20Saltillo/lista.json">Juzgado de Primera Instancia en Materia Familiar Auxiliar del Juzgado Segundo Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20del%20Sistema%20Acusatorio%20y%20Oral%20Saltillo/lista.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio y Oral Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Saltillo/lista.json">Juzgado Primero de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Saltillo/lista.json">Juzgado Primero de Primera Instancia en Materia Penal Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Primero%20Letrado%20Civil%20Saltillo/lista.json">Juzgado Primero Letrado Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Saltillo/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Saltillo/lista.json">Juzgado Segundo de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Segundo%20Letrado%20Civil%20Saltillo/lista.json">Juzgado Segundo Letrado Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Saltillo/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Saltillo/lista.json">Juzgado Tercero de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Cuarto de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Saltillo/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Saltillo/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Oral Saltillo</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20San%20Pedro%20de%20las%20Colonias/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20San%20Pedro/lista.json">Juzgado de Primera Instancia en Materia Civil San Pedro</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20San%20Pedro%20de%20las%20Colonias/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20San%20Pedro/lista.json">Juzgado de Primera Instancia en Materia Familiar Oral San Pedro</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Torre%C3%B3n/lista.json">Juzgado Primero de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20del%20Sistema%20Acusatorio%20y%20Oral%20Torreon/lista.json">Juzgado de Primera Instancia en Materia Penal del Sistema Acusatorio y Oral Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Segundo%20Letrado%20Civil%20Torre%C3%B3n/lista.json">Juzgado Segundo Letrado Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Torre%C3%B3n/lista.json">Juzgado Tercero de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Tercero%20Letrado%20Civil%20Torre%C3%B3n/lista.json">Juzgado Tercero Letrado Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Cuarto de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Torre%C3%B3n/lista.json">Juzgado Cuarto de Primera Instancia en Materia Penal Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Quinto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Torre%C3%B3n/lista.json">Juzgado Quinto de Primera Instancia en Materia Familiar Oral Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Sentencias/Distrito%20de%20Torre%C3%B3n/Juzgado%20Quinto%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Torre%C3%B3n/lista.json">Juzgado Quinto de Primera Instancia en Materia Penal Torreón</option>'

    ];

    // Al cambiar el distrito se cambian las opciones en autoridad
    $("#distritoSelect").change(function () {
        var val = $(this).val();
        $("#autoridadSelect").html(options[val]);
    });

    // Al dar clic en el botón mostrar
    $("#mostrarButton").click(function () {

        // Si hay un valor en autoridadSelect
        if (!$("#autoridadSelect").is(":empty")) {

            // Si es la primera vez se muestra la tabla
            // de lo contrario hay que limpiar y destruir
            // para que puedan cargarse otros resultados
            if ($("#listaDeSentencias").is(":hidden")) {
                $("#listaDeSentencias").show();
            } else {
                $('#listaDeSentencias').DataTable().clear();
                $('#listaDeSentencias').DataTable().destroy();
            }

            // Cargar los datos a la tabla
            // toma el valor de distritoSelect que es el URL al archivo JSON
            // dicho archivo debe tener valores para Fecha, Sentencia, Expediente, P. Género y Archivo
            $('#listaDeSentencias').DataTable({
                "ajax": $("#autoridadSelect").val(),
                "columns": [
                    { "data": "Fecha" },
                    { "data": "Sentencia" },
                    { "data": "Expediente" },
                    { "data": "Genero" },
                    {
                        "data": "Archivo",
                        "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                            $(nTd).html("<a href='" + oData.Archivo + "' target='_blank'><i class='fa fa-download'></i> Descargar</a>");
                        }
                    }
                ],
                "pageLength": 50,
                "order": [[0, "desc"]],
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
