'use strict';

$(document).ready(function() {
    getDistritos();
    getCemascAutoridades();
    getdefensoriautoridades();

    // Validar que los select no esten vacíos
    $('#buscarForm').on('submit', function(event){
        // Validar que el distrito no este vacío
        //Validar Distritos
        if($("#distritoSelect option:selected").val() !== '0'){
            //Validar Juzgados
            if($("#autoridadSelect option:selected").val() !== '0'){
                // Validar CEMASC
                if(  $("#cemascautoridadSelect").length ){
                    if($("#cemascautoridadSelect option:selected").val() !== '0'){
                        this.submit();
                    }else{
                        $("#msjError").append(`<div id='errAut' class="alert alert-danger text-center" rol="alert">Selecciona una Oficina CEMASC</div>`);
                    }
                    
                }else{

                    this.submit();
                }

            }else{
                $("#msjError").append(`<div id='errAut' class="alert alert-danger text-center" rol="alert">Selecciona un Juzgado </div>`);
            }
        }else {
            // Mostrar error
            $("#msjError").append(`<div id='errDist' class="alert alert-danger text-center" rol="alert">Selecciona un Distrito</div>`);
            console.log("error")
        }
        // Que no se refresque la página al presionar Enter
        event.preventDefault();
    });

    
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

    // URL de la API Autoridades CEMASC
    function get_api_autoridades_cemasc(){
        var autoridad_cemasc_api_url;
        switch(location.hostname){
            // Para desarrollo
            case "localhost": autoridad_cemasc_api_url = 'http://localhost:8001/v2/autoridades/cemascs'; break;
            case "127.0.0.1": autoridad_cemasc_api_url = 'http://127.0.0.1:8001/v2/autoridades/cemascs'; break;
            case "172.30.37.233": autoridad_cemasc_api_url ='http://172.30.37.233:8001/v2/autoridades/cemascs'; break;
            // Para producción
            default: autoridad_cemasc_api_url = 'https://plataforma-web-api.justiciadigital.gob.mx/v2/autoridades/cemascs'; break;
        }
        return autoridad_cemasc_api_url;
    }

    // URL de la API Autoridades Defensoria
    function get_api_autoridades_defensoria(){
        var autoridad_defensoria_api_url;
        switch(location.hostname){
            // Para desarrollo
            case "localhost": autoridad_defensoria_api_url = 'http://localhost:8001/v2/autoridades/defensorias'; break;
            case "127.0.0.1": autoridad_defensoria_api_url = 'http://127.0.0.1:8001/v2/autoridades/defensorias'; break;
            case "172.30.37.233": autoridad_defensoria_api_url ='http://172.30.37.233:8001/v2/autoridades/defensorias'; break;
            // Para producción
            default: autoridad_defensoria_api_url = 'https://plataforma-web-api.justiciadigital.gob.mx/v2/autoridades/defensorias'; break;
        }
        console.log(autoridad_defensoria_api_url)
        return autoridad_defensoria_api_url;
    }
    
   
    // Obtener Distritos 
    function getDistritos(){
        var api_distritos = get_api_distritos();

        fetch(api_distritos)
        .then(res => res.json())
        .then(result => {
            $('#distritoSelect').append($('<option>', {
                value: 0,
                text: 'Selecciona un Distrito'
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


    // obtener Autoridad por distrito_id
    function getAutoridades(id){

        var api_url = get_api_autoridades(id);
    
        fetch(api_url)
        .then(res => res.json())
        .then(data => {
            $('#autoridadSelect').append($('<option>', {
                value: 0,
                text: 'Selecciona un Juzgado u Oficina'
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


    // obtener Autoridad CEMASC
    function getCemascAutoridades(){

        var api_url = get_api_autoridades_cemasc();
        
        fetch(api_url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            $('#cemascautoridadSelect').append($('<option>', {
                value: 0,
                text: 'Selecciona una Oficina CEMASC'
            }))
            $.each(data.items, function (i, autoridades) {
                $('#cemascautoridadSelect').append($('<option>', {
                    value: autoridades["clave"],
                    text: autoridades["descripcion"]
                }));
            })
        })
        .catch((error) => {
            console.log(error)
        })
        
    }

     // obtener Autoridad Defensorias
    function getdefensoriautoridades(){

        var api_url = get_api_autoridades_defensoria()
        
        fetch(api_url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            $('#defensoriautoridadSelect').append($('<option>', {
                value: 0,
                text: 'Selecciona una Oficina de Defensoría'
            }))
            $.each(data.items, function (i, autoridades) {
                $('#defensoriautoridadSelect').append($('<option>', {
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
