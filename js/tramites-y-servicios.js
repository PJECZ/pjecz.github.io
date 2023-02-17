'use strict';

$(document).ready(function() {
    getDistritos();

    // Cambiar el valor del distrito y tomar el id para cargar las autoridades
    $("#distritoSelect").on('change', function() {

        const idDistrito = $(this).val();
         getAutoridades(idDistrito);

    });

     // URL de la API
    function get_api_distritos(){
        var distritos_api_url;
        switch (location.hostname) {
            // Para desarrollo
            case "localhost": distritos_api_url = "http://localhost:8001/v2/distritos"; break;
            case "127.0.0.1": distritos_api_url = "http://127.0.0.1:8001/v2/distritos"; break;
            case "172.30.37.233": distritos_api_url = "http://172.30.37.233:8001/v2/distritos"; break;
            // Para producción
            default:  distritos_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/v2/distritos";
        }
        return distritos_api_url;
    }

    // URL de la API
    function get_api_autoridades(id = 0){
        var autoridad_api_url;
        switch(location.hostname){
            // Para desarrollo
            case "localhost": autoridad_api_url = "http://localhost:8001/v2/autoridades?distrito_id="+id; break;
            case "127.0.0.1": autoridad_api_url = 'http://127.0.0.1:8001/v2/autoridades?distrito_id='+id; break;
            case "172.30.37.233": autoridad_api_url ='http://172.30.37.233:8001/v2/autoridades?distrito_id='+id; break;
            // Para producción
            default: autoridad_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/v2/autoridades?distrito_id="+id; break;
        }
        return autoridad_api_url;
    }
   
    // Alimentar distritos 
    function getDistritos(){
        var api_distritos = get_api_distritos();

        fetch(api_distritos)
        .then(res => res.json())
        .then(result => {
            $('#distritoSelect').append($('<option>', {
                value: 0,
                text: 'Todos'
            }))
            $.each(result.items,function (i, distrito) {
                $('#distritoSelect').append($('<option>', {
                    value: distrito["id"],
                    text: distrito["nombre"]
                }));
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }       


// obtener autoridad por distrito_id
    function getAutoridades(id){

        var api_url = get_api_autoridades(id);
    
        fetch(api_url)
        .then(res => res.json())
        .then(data => {
            $('#autoridadSelect').append($('<option>', {
                value: 0,
                text: 'Todos'
            }))
            $.each(data.items, function (i, autoridades) {
                $('#autoridadSelect').append($('<option>', {
                    value: autoridades["clave"],
                    text: autoridades["descripcion"]
                }));
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

});
