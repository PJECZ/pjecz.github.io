// Cambiar tema
document.addEventListener('DOMContentLoaded', () => {

    const temaStylesheet = document.getElementById('tema');
    const temaGuardado = localStorage.getItem('tema');
    if(temaGuardado){
        temaStylesheet.href = temaGuardado;
    }
    const botonCambiarTema = document.getElementById('cambiador-tema');

    botonCambiarTema.addEventListener('click', () => {
        if(temaStylesheet.href.includes('claro')){
            temaStylesheet.href = '/theme/css/pjecz-2020-04-oscuro.css';
        } else {
            temaStylesheet.href = '/theme/css/pjecz-2020-04-claro.css';
        }
        //console.log(temaStylesheet.href);
        localStorage.setItem('tema',temaStylesheet.href)
    })

});
