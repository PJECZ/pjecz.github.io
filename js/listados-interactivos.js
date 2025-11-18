var borrarContenido = true;

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

      //titulo.addClass("titulo") ;
      titulo.attr("id", "titulo" + N);

      /*   Crear DIV de acordion */

      const div = document.createElement("div");
      div.setAttribute("id", "div" + N);
      div.setAttribute("class", "divAcordion");

      const span = document.createElement("span");
      span.setAttribute("id", "span" + N);
      span.setAttribute("class", "toggle-icon");

      var tituloContenido = document.getElementById("titulo" + N);

      tituloContenido.insertAdjacentElement("beforebegin", div);
      tituloContenido.insertAdjacentElement("beforeend", span);

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

      document.getElementById("lista" + N).setAttribute("id", "lista_old_" + N);
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
    acc[i].addEventListener("click", function () {
      /* agrega la clase active */
      this.classList.toggle("activo");

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
