// Inicial - Noticias y eventos

$(document).ready(function() {

  function fechaEnEspanol(tiempo) {
    var tiempo = new Date(tiempo)
    return(Intl.DateTimeFormat('es-MX', {dateStyle:'long'}).format(tiempo))
  }

  // Contenedor
  var contenedor = document.getElementById('inicial_noticias_eventos')
  // Solo debe de trabajar cuando encuentra el contenedor
  if (contenedor) {
    fetch('json/noticias-eventos.json').then((res) => {
      res.json().then((entrada) => {
        var datos = entrada.data
        for(var i = 0; i < datos.length; i++) {
          var articulo = datos[i];
          // Armar titulo
          let titulo = document.createElement('h3')
          titulo.innerText = articulo.title
          // Armar titulo_vinculo
          let titulo_vinculo = document.createElement('a')
          titulo_vinculo.appendChild(titulo)
          titulo_vinculo.href = articulo.url
          // Armar fecha
          let fecha = document.createElement('small')
          fecha.innerText = fechaEnEspanol(articulo.date)
          let fecha_p = document.createElement('p')
          fecha_p.appendChild(fecha)
          // Armar resumen
          let resumen = document.createElement('p')
          resumen.innerText = articulo.summary
          // Armar div.media-body
          let media_body = document.createElement('div')
          media_body.classList.add('media-body')
          media_body.appendChild(titulo_vinculo)
          media_body.appendChild(fecha_p)
          media_body.appendChild(resumen)
          // Armar imagen previa
          let imagen = document.createElement('img')
          if (articulo.preview != '') {
            imagen.src = articulo.preview
          } else {
            imagen.src = 'theme/images/generic.jpg'
          }
          imagen.width = '120'
          imagen.alt = 'Imagen previa'
          imagen.classList.add('mr-2')
          imagen.classList.add('mb-3')
          // Armar imagen_vinculo
          let imagen_vinculo = document.createElement('a')
          imagen_vinculo.appendChild(imagen)
          imagen_vinculo.href = articulo.url
          // Armar div.media
          let media = document.createElement('div')
          media.appendChild(imagen_vinculo)
          media.appendChild(media_body)
          media.classList.add('media')
          media.classList.add('mb-3')
          // Agregar al contenedor
          contenedor.appendChild(media)
          // Máximo 4 elementos (del 0 al 3)
          if (i >= 3) {
            break;
          }
        }
        // Ocultar spinner
        $('#inicial_noticias_eventos_spinner').hide();
      } )
    } )
  }

} );
