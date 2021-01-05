// Inicial - Transmisiones de las Sesiones

$(document).ready(function() {

  function fechaEnEspanol(tiempo) {
    var tiempo = new Date(tiempo)
    return(Intl.DateTimeFormat('es-MX', {dateStyle:'long'}).format(tiempo))
  }

  // Pleno del TSJ
  var celda_tsj = document.getElementById('transmisiones_sesiones_tsj')
  // Solo debe de trabajar cuando encuentra el elemento
  if (celda_tsj) {
    fetch('feeds/pleno-del-tribunal-superior-de-justicia.rss.xml').then((res) => {
      res.text().then((xmlTxt) => {
        // Cargar feed
        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/xml')
        // Obtener el primer elemento del feed
        let feedFirst = doc.querySelector('item')
        // Armar imagen
        let imagen = document.createElement('img')
        imagen.src = 'theme/images/transmisiones-sesiones-pleno.png'
        imagen.alt = 'Pleno del TSJ'
        // Armar encabezado
        let encabezado = document.createElement('h3')
        encabezado.innerText = 'Pleno del TSJ'
        // Armar vinculo con imagen y encabezado
        let vinculo = document.createElement('a')
        vinculo.appendChild(imagen)
        vinculo.appendChild(encabezado)
        vinculo.href = feedFirst.querySelector('link').textContent
        // Armar descripcion
        let pequeno = document.createElement('small')
        pequeno.innerText = fechaEnEspanol(feedFirst.querySelector('pubDate').textContent)
        let descripcion = document.createElement('p')
        descripcion.appendChild(pequeno)
        // Agregar a la celda
        celda_tsj.appendChild(vinculo)
        celda_tsj.appendChild(descripcion)
        // Ocultar spinner
        $('#transmisiones_sesiones_tsj_spinner').hide();
      })
    })
  }

  // Sala Civil y Familiar
  var celda_scf = document.getElementById('transmisiones_sesiones_scf')
  // Solo debe de trabajar cuando encuentra el elemento
  if (celda_scf) {
    fetch('feeds/sala-civil-y-familiar.rss.xml').then((res) => {
      res.text().then((xmlTxt) => {
        // Cargar feed
        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/xml')
        // Obtener el primer elemento del feed
        let feedFirst = doc.querySelector('item')
        // Armar imagen
        let imagen = document.createElement('img')
        imagen.src = 'theme/images/transmisiones-sesiones-civil-familiar.png'
        imagen.alt = 'Sala Civil y Familiar'
        // Armar encabezado
        let encabezado = document.createElement('h3')
        encabezado.innerText = 'Sala Civil y Familiar'
        // Armar vinculo con imagen y encabezado
        let vinculo = document.createElement('a')
        vinculo.appendChild(imagen)
        vinculo.appendChild(encabezado)
        vinculo.href = feedFirst.querySelector('link').textContent
        // Armar descripcion
        let pequeno = document.createElement('small')
        pequeno.innerText = fechaEnEspanol(feedFirst.querySelector('pubDate').textContent)
        let descripcion = document.createElement('p')
        descripcion.appendChild(pequeno)
        // Agregar a la celda
        celda_scf.appendChild(vinculo)
        celda_scf.appendChild(descripcion)
        // Ocultar spinner
        $('#transmisiones_sesiones_scf_spinner').hide();
      })
    })
  }

  // Sala Penal
  var celda_sp = document.getElementById('transmisiones_sesiones_sp')
  // Solo debe de trabajar cuando encuentra el elemento
  if (celda_sp) {
    fetch('feeds/sala-penal.rss.xml').then((res) => {
      res.text().then((xmlTxt) => {
        // Cargar feed
        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/xml')
        // Obtener el primer elemento del feed
        let feedFirst = doc.querySelector('item')
        // Armar imagen
        let imagen = document.createElement('img')
        imagen.src = 'theme/images/transmisiones-sesiones-penal.png'
        imagen.alt = 'Sala Penal'
        // Armar encabezado
        let encabezado = document.createElement('h3')
        encabezado.innerText = 'Sala Penal'
        // Armar vinculo con imagen y encabezado
        let vinculo = document.createElement('a')
        vinculo.appendChild(imagen)
        vinculo.appendChild(encabezado)
        vinculo.href = feedFirst.querySelector('link').textContent
        // Armar descripcion
        let pequeno = document.createElement('small')
        pequeno.innerText = fechaEnEspanol(feedFirst.querySelector('pubDate').textContent)
        let descripcion = document.createElement('p')
        descripcion.appendChild(pequeno)
        // Agregar a la celda
        celda_sp.appendChild(vinculo)
        celda_sp.appendChild(descripcion)
        // Ocultar spinner
        $('#transmisiones_sesiones_sp_spinner').hide();
      })
    })
  }

  // Sala Regional
  var celda_sr = document.getElementById('transmisiones_sesiones_sr')
  // Solo debe de trabajar cuando encuentra el elemento
  if (celda_sr) {
    fetch('feeds/sala-regional.rss.xml').then((res) => {
      res.text().then((xmlTxt) => {
        // Cargar feed
        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/xml')
        // Obtener el primer elemento del feed
        let feedFirst = doc.querySelector('item')
        // Armar imagen
        let imagen = document.createElement('img')
        imagen.src = 'theme/images/transmisiones-sesiones-regional.png'
        imagen.alt = 'Sala Regional'
        // Armar encabezado
        let encabezado = document.createElement('h3')
        encabezado.innerText = 'Sala Regional'
        // Armar vinculo con imagen y encabezado
        let vinculo = document.createElement('a')
        vinculo.appendChild(imagen)
        vinculo.appendChild(encabezado)
        vinculo.href = feedFirst.querySelector('link').textContent
        // Armar descripcion
        let pequeno = document.createElement('small')
        pequeno.innerText = fechaEnEspanol(feedFirst.querySelector('pubDate').textContent)
        let descripcion = document.createElement('p')
        descripcion.appendChild(pequeno)
        // Agregar a la celda
        celda_sr.appendChild(vinculo)
        celda_sr.appendChild(descripcion)
        // Ocultar spinner
        $('#transmisiones_sesiones_sr_spinner').hide();
      })
    })
  }

})
