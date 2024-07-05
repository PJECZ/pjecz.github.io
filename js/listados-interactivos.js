//
// Listados interactivos
//

var borrarContenido = true;

funcion2();

function funcion2() {
  window.addEventListener("load", function (event) {
    /*   Selecciona todas las etiquetas UL */
    var listas = document.getElementsByTagName("ul");
    var N = 0;
    for (var x = 0; x < listas.length; x++) {
      var clases = listas[x].classList;

      /* Si la lista no tiene ninguna clases, se le asigna la clases 'lista' */
      if (clases.value === "") {
        listas[x].setAttribute("id", "lista" + N);
        listas[x].setAttribute("class", "lista");

        var titulo = $("#lista" + N).prev();
        var tituloText = titulo.text();

        //titulo.addClass("titulo") ;
        titulo.attr("id", "titulo" + N);

        /*   Crear DIV de acordion */

        const div = document.createElement("div");
        div.setAttribute("id", "div" + N);
        div.setAttribute("class", "divAcordion");

        var tituloContenido = document.getElementById("titulo" + N);

        tituloContenido.insertAdjacentElement("beforebegin", div);

        const boton = document.createElement("button");
        boton.setAttribute("id", "boton" + N);
        boton.setAttribute("class", "accordion");

        const panel = document.createElement("div");
        panel.setAttribute("id", "panel" + N);
        panel.setAttribute("class", "panel");

        document
          .getElementById("div" + N)
          .insertAdjacentElement("afterbegin", boton);
        document
          .getElementById("div" + N)
          .insertAdjacentElement("beforeend", panel);

        const nodoLista = document.getElementById("lista" + N);
        const contenidoLista = nodoLista.cloneNode(true);

        const nodoTitulo = document.getElementById("titulo" + N);
        const contenidoTitulo = nodoTitulo.cloneNode(true);

        document
          .getElementById("lista" + N)
          .setAttribute("id", "lista_old_" + N);
        document
          .getElementById("titulo" + N)
          .setAttribute("id", "titulo_old_" + N);

        document
          .getElementById("boton" + N)
          .insertAdjacentElement("afterbegin", contenidoTitulo);
        document
          .getElementById("panel" + N)
          .insertAdjacentElement("beforeend", contenidoLista);

        if (borrarContenido) {
          $("#titulo_old_" + N).remove();
          $("#lista_old_" + N).remove();
        }

        N++;
      } else {
        //console.log(clases) ;
      }
    }

    /* asignar evento click a cada boton para desplegar el panel */

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      console.log(i);
      acc[i].addEventListener("click", function () {
        /* agrega la clase active */
        this.classList.toggle("active");

        /* oculta o muestra el panel  */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  });
}

function funcion1() {
  window.addEventListener("load", function (event) {
    /*  Selecciona todas las etiquetas H3 */
    var contador = new Array();
    var coleccion = document.getElementsByTagName("h3");
    for (var x = 0; x < coleccion.length; x++) {
      coleccion[x].setAttribute("id", "titulo" + x);
      coleccion[x].setAttribute("class", "titulo");
      contador[x] = x;
    }

    /*   Selecciona todas las etiquetas UL */
    var listas = document.getElementsByTagName("ul");
    for (var x = 0; x < listas.length; x++) {
      listas[x].setAttribute("id", "lista" + x);
      listas[x].setAttribute("class", "lista");
    }

    /*   Crear DIV de acordion */
    for (x = 0; x < contador.length; x++) {
      const div = document.createElement("div");
      div.setAttribute("id", "div" + x);
      div.setAttribute("class", "divAcordion");

      titulo = coleccion[x];

      titulo.insertAdjacentElement("beforebegin", div);
    }

    for (x = 0; x < contador.length; x++) {
      const boton = document.createElement("button");
      boton.setAttribute("id", "boton" + x);
      boton.setAttribute("class", "accordion");

      const panel = document.createElement("div");
      panel.setAttribute("id", "panel" + x);
      panel.setAttribute("class", "panel");

      document
        .getElementById("div" + x)
        .insertAdjacentElement("afterbegin", boton);
      document
        .getElementById("div" + x)
        .insertAdjacentElement("beforeend", panel);

      const nodoLista = document.getElementById("lista" + x);
      const contenidoLista = nodoLista.cloneNode(true);

      const nodoTitulo = document.getElementById("titulo" + x);
      const contenidoTitulo = nodoTitulo.cloneNode(true);

      document.getElementById("lista" + x).setAttribute("id", "lista_old_" + x);
      document
        .getElementById("titulo" + x)
        .setAttribute("id", "titulo_old_" + x);

      document
        .getElementById("boton" + x)
        .insertAdjacentElement("afterbegin", contenidoTitulo);
      document
        .getElementById("panel" + x)
        .insertAdjacentElement("beforeend", contenidoLista);

      if (borrarContenido) {
        $("#titulo_old_" + x).remove();
        $("#lista_old_" + x).remove();
      }
    }

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      console.log(i);
      acc[i].addEventListener("click", function () {
        /* agrega la clase active */
        this.classList.toggle("active");

        /* oculta o muestra el panel  */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  });
}
