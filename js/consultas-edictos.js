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

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Salas%20TSJ/Sala%20Civil/lista.json">Sala Civil</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Civil Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Familiar Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Penal Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%201%20Acu%C3%B1a/lista.json">Notaria Pública 1 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%202%20Acu%C3%B1a/lista.json">Notaria Pública 2 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%203%20Acu%C3%B1a/lista.json">Notaria Pública 3 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%205%20Acu%C3%B1a/lista.json">Notaria Pública 5 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%206%20Acu%C3%B1a/lista.json">Notaria Pública 6 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%208%20Acu%C3%B1a/lista.json">Notaria Pública 8 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%2010%20Acu%C3%B1a/lista.json">Notaria Pública 10 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%2014%20Acu%C3%B1a/lista.json">Notaria Pública 14 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%2017%20Acu%C3%B1a/lista.json">Notaria Pública 17 Acuña</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Monclova/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Monclova/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%203%20Monclova/lista.json">Notaria Pública 3 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%209%20Monclova/lista.json">Notaria Pública 9 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2013%20Monclova/lista.json">Notaria Pública 13 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2014%20Monclova/lista.json">Notaria Pública 14 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2015%20Monclova/lista.json">Notaria Pública 15 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2017%20Monclova/lista.json">Notaria Pública 17 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2018%20Monclova/lista.json">Notaria Pública 18 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2021%20Monclova/lista.json">Notaria Pública 21 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2022%20Monclova/lista.json">Notaria Pública 22 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2023%20Monclova/lista.json">Notaria Pública 23 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2024%20Monclova/lista.json">Notaria Pública 24 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2029%20Monclova/lista.json">Notaria Pública 29 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2032%20Monclova/lista.json">Notaria Pública 32 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2035%20Monclova/lista.json">Notaria Pública 35 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2036%20Monclova/lista.json">Notaria Pública 36 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2039%20Monclova/lista.json">Notaria Pública 39 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2041%20Monclova/lista.json">Notaria Pública 41 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2042%20Monclova/lista.json">Notaria Pública 42 Monclova</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Monclova/Notaria%20P%C3%BAblica%2044%20Monclova/lista.json">Notaria Pública 44 Monclova</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Parras%20de%20la%20Fuente/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20y%20Familiar%20Parras/lista.json">Juzgado de Primera Instancia en Materia Civil y Familiar Parras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Parras%20de%20la%20Fuente/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20de%20Parras/lista.json">Juzgado de Primera Instancia en Materia Familiar Oral de Parras</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Piedras%20Negras/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Piedras%20Negras/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Piedras%20Negras/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Oral Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2002%20Piedras%20Negras/lista.json">Notaria Pública 02 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2003%20Piedras%20Negras/lista.json">Notaria Pública 03 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2004%20Piedras%20Negras/lista.json">Notaria Pública 04 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2005%20Piedras%20Negras/lista.json">Notaria Pública 05 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2006%20Piedras%20Negras/lista.json">Notaria Pública 06 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2007%20Piedras%20Negras/lista.json">Notaria Pública 07 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2010%20Piedras%20Negras/lista.json">Notaria Pública 10 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2010%20Zaragoza/lista.json">Notaria Pública 10 Zaragoza</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2012%20Piedras%20Negras/lista.json">Notaria Pública 12 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2013%20Piedras%20Negras/lista.json">Notaria Pública 13 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2015%20Piedras%20Negras/lista.json">Notaria Pública 15 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2017%20Piedras%20Negras/lista.json">Notaria Pública 17 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2018%20Piedras%20Negras/lista.json">Notaria Pública 18 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2019%20Nava/lista.json">Notaria Pública 19 Nava</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2022%20Nava/lista.json">Notaria Pública 22 Nava</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2023%20Morelos/lista.json">Notaria Pública 23 Morelos</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2024%20Piedras%20Negras/lista.json">Notaria Pública 24 Piedras Negras</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Rio%20Grande/Notaria%20P%C3%BAblica%2025%20Piedras%20Negras/lista.json">Notaria Pública 25 Piedras Negras</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20y%20Familiar%20Sabinas/lista.json">Juzgado de Primera Instancia en Materia Civil y Familiar Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Sabinas/lista.json">Juzgado de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Juzgado%20Sexto%20Auxiliar%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Sabinas/lista.json">Juzgado Sexto Auxiliar de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%205%20Sabinas/lista.json">Notaria Pública 5 Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%206%20Sabinas/lista.json">Notaria Pública 6 Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%207%20Nueva%20Rosita/lista.json">Notaria Pública 7 Nueva Rosita</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%208%20Nueva%20Rosita/lista.json">Notaria Pública 8 Nueva Rosita</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%2010%20Nueva%20Rosita/lista.json">Notaria Pública 10 Nueva Rosita</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%2012%20Sabinas/lista.json">Notaria Pública 12 Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%2013%20Melchor%20Muzquiz/lista.json">Notaria Pública 13 Melchor Muzquiz</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%2014%20Sabinas/lista.json">Notaria Pública 14 Sabinas</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Sabinas/Notaria%20P%C3%BAblica%2015%20Nueva%20Rosita/lista.json">Notaria Pública 15 Nueva Rosita</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Saltillo/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Saltillo/lista.json">Juzgado Primero de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Saltillo/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Saltillo/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Saltillo/lista.json">Juzgado Cuarto de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Saltillo/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Auxiliar%20del%20Juzgado%20Segundo%20Familiar%20Saltillo/lista.json">Juzgado de Primera Instancia en Materia Familiar Auxiliar del Juzgado Segundo Familiar Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%202%20Saltillo/lista.json">Notaria Pública 2 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%204%20Saltillo/lista.json">Notaria Pública 4 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%205%20Saltillo/lista.json">Notaria Pública 5 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%206%20Saltillo/lista.json">Notaria Pública 6 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%207%20Saltillo/lista.json">Notaria Pública 7 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%208%20Saltillo/lista.json">Notaria Pública 8 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2010%20Saltillo/lista.json">Notaria Pública 10 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2011%20Saltillo/lista.json">Notaria Pública 11 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2012%20Saltillo/lista.json">Notaria Pública 12 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2013%20Saltillo/lista.json">Notaria Pública 13 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2015%20Saltillo/lista.json">Notaria Pública 15 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2016%20Saltillo/lista.json">Notaria Pública 16 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2017%20Saltillo/lista.json">Notaria Pública 17 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2020%20Saltillo/lista.json">Notaria Pública 20 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2021%20Saltillo/lista.json">Notaria Pública 21 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2023%20Saltillo/lista.json">Notaria Pública 23 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2024%20Saltillo/lista.json">Notaria Pública 24 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2025%20Saltillo/lista.json">Notaria Pública 25 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2027%20Saltillo/lista.json">Notaria Pública 27 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2028%20Saltillo/lista.json">Notaria Pública 28 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2029%20Saltillo/lista.json">Notaria Pública 29 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2030%20Saltillo/lista.json">Notaria Pública 30 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2031%20Saltillo/lista.json">Notaria Pública 31 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2033%20Saltillo/lista.json">Notaria Pública 33 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2034%20Saltillo/lista.json">Notaria Pública 34 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2035%20Saltillo/lista.json">Notaria Pública 35 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2036%20Saltillo/lista.json">Notaria Pública 36 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2037%20Saltillo/lista.json">Notaria Pública 37 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2038%20Ramos%20Arizpe/lista.json">Notaria Pública 38 Ramos Arizpe</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2040%20Saltillo/lista.json">Notaria Pública 40 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2041%20Saltillo/lista.json">Notaria Pública 41 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2042%20Saltillo/lista.json">Notaria Pública 42 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2044%20Saltillo/lista.json">Notaria Pública 44 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2045%20Saltillo/lista.json">Notaria Pública 45 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2047%20Saltillo/lista.json">Notaria Pública 47 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2049%20Saltillo/lista.json">Notaria Pública 49 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2050%20Saltillo/lista.json">Notaria Pública 50 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2051%20Saltillo/lista.json">Notaria Pública 51 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2052%20Saltillo/lista.json">Notaria Pública 52 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2053%20Saltillo/lista.json">Notaria Pública 53 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2054%20Saltillo/lista.json">Notaria Pública 54 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2055%20Arteaga/lista.json">Notaria Pública 55 Arteaga</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2056%20Saltillo/lista.json">Notaria Pública 56 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2057%20Saltillo/lista.json">Notaria Pública 57 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2058%20Saltillo/lista.json">Notaria Pública 58 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2059%20Saltillo/lista.json">Notaria Pública 59 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2061%20Saltillo/lista.json">Notaria Pública 61 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2062%20Saltillo/lista.json">Notaria Pública 62 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2063%20Saltillo/lista.json">Notaria Pública 63 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2064%20Saltillo/lista.json">Notaria Pública 64 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2065%20Saltillo/lista.json">Notaria Pública 65 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2066%20Ramos%20Arizpe/lista.json">Notaria Pública 66 Ramos Arizpe</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2067%20Saltillo/lista.json">Notaria Pública 67 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2068%20Saltillo/lista.json">Notaria Pública 68 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2069%20Saltillo/lista.json">Notaria Pública 69 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2070%20Ramos%20Arizpe/lista.json">Notaria Pública 70 Ramos Arizpe</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2072%20Saltillo/lista.json">Notaria Pública 72 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2074%20Saltillo/lista.json">Notaria Pública 74 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2077%20Saltillo/lista.json">Notaria Pública 77 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2078%20Saltillo/lista.json">Notaria Pública 78 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2080%20Saltillo/lista.json">Notaria Pública 80 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2081%20Saltillo/lista.json">Notaria Pública 81 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2082%20Saltillo/lista.json">Notaria Pública 82 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2083%20Saltillo/lista.json">Notaria Pública 83 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2084%20Saltillo/lista.json">Notaria Pública 84 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2085%20Saltillo/lista.json">Notaria Pública 85 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2086%20Saltillo/lista.json">Notaria Pública 86 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2087%20Saltillo/lista.json">Notaria Pública 87 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2088%20Saltillo/lista.json">Notaria Pública 88 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2089%20Saltillo/lista.json">Notaria Pública 89 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2090%20Ramos%20Arizpe/lista.json">Notaria Pública 90 Ramos Arizpe</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2091%20Saltillo/lista.json">Notaria Pública 91 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2092%20Arteaga/lista.json">Notaria Pública 92 Arteaga</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2095%20Saltillo/lista.json">Notaria Pública 95 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2096%20Saltillo/lista.json">Notaria Pública 96 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2097%20Saltillo/lista.json">Notaria Pública 97 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2098%20Saltillo/lista.json">Notaria Pública 98 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%2099%20Saltillo/lista.json">Notaria Pública 99 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20100%20Saltillo/lista.json">Notaria Pública 100 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20102%20Saltillo/lista.json">Notaria Pública 102 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20104%20Saltillo/lista.json">Notaria Pública 104 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20105%20Saltillo/lista.json">Notaria Pública 105 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20106%20Ramos%20Arizpe/lista.json">Notaria Pública 106 Ramos Arizpe</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20109%20Saltillo/lista.json">Notaria Pública 109 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20110%20Saltillo/lista.json">Notaria Pública 110 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20112%20Arteaga/lista.json">Notaria Pública 112 Arteaga</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20113%20Ramos%20Arizpe/lista.json">Notaria Pública 113 Ramos Arizpe</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20115%20Saltillo/lista.json">Notaria Pública 115 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20117%20Saltillo/lista.json">Notaria Pública 117 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20118%20Arteaga/lista.json">Notaria Pública 118 Arteaga</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20119%20Saltillo/lista.json">Notaria Pública 119 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20121%20Saltillo/lista.json">Notaria Pública 121 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20122%20Saltillo/lista.json">Notaria Pública 122 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20123%20Saltillo/lista.json">Notaria Pública 123 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20127%20Saltillo/lista.json">Notaria Pública 127 Saltillo</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Saltillo/Notaria%20P%C3%BAblica%20129%20Saltillo/lista.json">Notaria Pública 129 Saltillo</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20San%20Pedro%20de%20las%20Colonias/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20San%20Pedro/lista.json">Juzgado de Primera Instancia en Materia Civil San Pedro</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20San%20Pedro%20de%20las%20Colonias/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20San%20Pedro/lista.json">Juzgado de Primera Instancia en Materia Familiar Oral San Pedro</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20San%20Pedro%20de%20las%20Colonias/Notaria%20Publica%207%20Francisco%20I%20Madero/lista.json">Notaria Publica 7 Francisco I Madero</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20Letrado%20Civil%20Torre%C3%B3n/lista.json">Juzgado Segundo Letrado Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Cuarto de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Quinto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Torre%C3%B3n/lista.json">Juzgado Quinto de Primera Instancia en Materia Familiar Oral Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20en%20Materia%20de%20Adolescentes%20Torre%C3%B3n/lista.json">Juzgado en Materia de Adolescentes Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%201%20Torreon/lista.json">Notaria Pública 1 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%203%20Torreon/lista.json">Notaria Pública 3 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%204%20Torreon/lista.json">Notaria Pública 4 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%205%20Torreon/lista.json">Notaria Pública 5 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%206%20Torreon/lista.json">Notaria Pública 6 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%207%20Torreon/lista.json">Notaria Pública 7 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%208%20Torreon/lista.json">Notaria Pública 8 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2010%20Torreon/lista.json">Notaria Pública 10 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2012%20Torreon/lista.json">Notaria Pública 12 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2014%20Torreon/lista.json">Notaria Pública 14 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2015%20Torreon/lista.json">Notaria Pública 15 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2016%20Torreon/lista.json">Notaria Pública 16 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2017%20Torreon/lista.json">Notaria Pública 17 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2018%20Torreon/lista.json">Notaria Pública 18 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2019%20Torreon/lista.json">Notaria Pública 19 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2021%20Torreon/lista.json">Notaria Pública 21 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2022%20Torreon/lista.json">Notaria Pública 22 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2023%20Torreon/lista.json">Notaria Pública 23 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2024%20Torreon/lista.json">Notaria Pública 24 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2027%20Torreon/lista.json">Notaria Pública 27 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2028%20Torreon/lista.json">Notaria Pública 28 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2029%20Torreon/lista.json">Notaria Pública 29 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2030%20Torreon/lista.json">Notaria Pública 30 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2031%20Torreon/lista.json">Notaria Pública 31 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2033%20Torreon/lista.json">Notaria Pública 33 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2034%20Torreon/lista.json">Notaria Pública 34 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2039%20Torreon/lista.json">Notaria Pública 39 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2040%20Torreon/lista.json">Notaria Pública 40 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2041%20Torreon/lista.json">Notaria Pública 41 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2044%20Torreon/lista.json">Notaria Pública 44 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2045%20Torreon/lista.json">Notaria Pública 45 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2046%20Torreon/lista.json">Notaria Pública 46 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2047%20Torreon/lista.json">Notaria Pública 47 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2049%20Torreon/lista.json">Notaria Pública 49 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2053%20Torreon/lista.json">Notaria Pública 53 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2058%20Torreon/lista.json">Notaria Pública 58 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2059%20Torreon/lista.json">Notaria Pública 59 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2060%20Torreon/lista.json">Notaria Pública 60 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2061%20Torreon/lista.json">Notaria Pública 61 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2064%20Matamoros/lista.json">Notaria Pública 64 Matamoros</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2065%20Torreon/lista.json">Notaria Pública 65 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2066%20Torreon/lista.json">Notaria Pública 66 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2067%20Torreon/lista.json">Notaria Pública 67 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2068%20Matamoros/lista.json">Notaria Pública 68 Matamoros</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2069%20Torreon/lista.json">Notaria Pública 69 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2070%20Torreon/lista.json">Notaria Pública 70 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2072%20Torreon/lista.json">Notaria Pública 72 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2073%20Torreon/lista.json">Notaria Pública 73 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2074%20Torreon/lista.json">Notaria Pública 74 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2075%20Torreon/lista.json">Notaria Pública 75 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2076%20Torreon/lista.json">Notaria Pública 76 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2077%20Torreon/lista.json">Notaria Pública 77 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2078%20Torreon/lista.json">Notaria Pública 78 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2079%20Torreon/lista.json">Notaria Pública 79 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2080%20Torreon/lista.json">Notaria Pública 80 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2081%20Torreon/lista.json">Notaria Pública 81 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2083%20Torreon/lista.json">Notaria Pública 83 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2084%20Torreon/lista.json">Notaria Pública 84 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2086%20Torreon/lista.json">Notaria Pública 86 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2088%20Torreon/lista.json">Notaria Pública 88 Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2089%20Torreon/lista.json">Notaria Pública 89 Torreón</option>'

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
