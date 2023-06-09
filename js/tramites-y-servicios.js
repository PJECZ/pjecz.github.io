'use strict';

$(document).ready(function() {
    getDistritos();
    getDistritosClave();
    getCemascAutoridades();
    getdefensoriautoridades();

    // Validación 01 TALLER DE ORIENTACIÓN
    function validateT(){
        if($("#defensoriaSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else {
            errorMessage('Selecciona una Oficina');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#TOPM").bind("click", validateT);

    // Validación 02 LICITACIÓNES PÚBLICAS
    function validateLP(){
        if($("#razonSocial").val().trim() === '' || $("#licitacion").val().trim() === ''){
            errorMessage('Llene todos los campos');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        } else {
            var descripcion = $("#razonSocial").val() + " - " + $("#licitacion").val();
            $("#descripcion").val(descripcion)
            document.getElementById("buscarForm").submit(); 
            return false;
        }
    }
    $("#BLPNOPS").bind("click", validateLP);

    // Validación 04 CURSO DE MEDIACIÓN
    function validateCM(){
        if($("#cemascSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else {
            errorMessage('Selecciona una Oficina');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#CPMM").bind("click", validateCM);

    // Validación 05 CERTIFICADO DE MEDIADORES
    function validateCDM(){
        if($("#cemascSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else {
            errorMessage('Selecciona una Oficina');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#CM").bind("click", validateCDM);

    // Validación 06 VALIDACIÓN EXTEMPORANEA
    function validateVE(){
        if($("#cemascSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else{
            errorMessage('Elige una Oficina');  
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        } 
    }
    $("#VECMP").bind("click", validateVE);

    // Validación 08 CURSO CAPACITACIÓN PARA EXTERNOS
    function validateCCI(){
        if($("#distritoClaveSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else{
            errorMessage('Elige una Distrito');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);  
        } 
    }
    $("#CCIEJ").bind("click", validateCCI);

    // Validación 09 COPIA SIMPLE
    function validateCS(){
        if($("#distritoSelect option:selected").val() !== "0" && $("#autoridadSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else{
            errorMessage('Llene los campos');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#CS").bind("click", validateCS);

    // Validación 10 COPIA CERTIFICADA
    function validateCC(){
        if($("#distritoSelect option:selected").val() !== "0" && $("#autoridadSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else{
            errorMessage('Llene los campos');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#CC").bind("click", validateCC);

    // Validación 11 CONSTANCIA DE NO REGISTRO REDAM
    function validateREDAM(){
        if($("#distritoClaveSelect option:selected").val() !== "0" || $("#nombreREDAM").val().trim() === ''){
            var descripcion = $("#nombreREDAM").val();
            $("#descripcion").val(descripcion)
            document.getElementById("buscarForm").submit(); 
            return false;
        }
        else{
            errorMessage('Llene todos los campos');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#REDAM").bind("click", validateREDAM);

    // Validación 12 GRABACIÓN DE LA AUDIENCIA
    function validateCDDVD(){
        if($("#distritoSelect option:selected").val() !== "0" && $("#autoridadSelect option:selected").val() !== "0"){
            document.getElementById("buscarForm").submit(); 
        }
        else{ 
            errorMessage('Llene los campos');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#CDDVD").bind("click", validateCDDVD);

    // Validación 16 RENTA DE INSTALACIONES
    function validateRI(){
        if($("#distritoClaveSelect option:selected").val() !== "0" && $("#descripcionInput").val().trim() !== ''){
            document.getElementById("buscarForm").submit(); 
        }
        else{
            errorMessage('Elige una Distrito y escribe una descripción');
            setTimeout(() => {
                $("#msjError").remove();
            },5000);
        }
    }
    $("#RI").bind("click", validateRI);

   
    // Que no se refresque la página al presionar Enter y se restablezca el formulario después de enviar
    $('#buscarForm').on('submit', function(event){
        document.getElementById("buscarForm").reset(); 
        event.preventDefault();

    });

    // Mensaje de error alert
    const errorMessage = (text) => {
        $("#msjError").append(`<div id='errMsj' class="alert alert-danger text-center" rol="alert">${text}</div>`);
    }


    // Cambiar el valor del distrito y tomar el id para cargar las autoridades
    $("#distritoSelect").on('change', function() {

        const idDistrito = $(this).val();
         getAutoridades(idDistrito);

    });

    // URL de la API Distrito ID
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

    // URL de la API solo Distritos y clave
    function get_api_url_only_distritos(){
        var only_distritos_api_url;
        switch (location.hostname){
            // para desarrollo
            case "172.30.37.233": only_distritos_api_url = "http://172.30.37.233:8001/v2/distritos?solo_distritos=true"; break;
            default:  only_distritos_api_url = "https://plataforma-web-api.justiciadigital.gob.mx/v2/distritos?solo_distritos=true";
        }
        return only_distritos_api_url;
    }

    // URL de la API Autoridades por distrito_id
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
        return autoridad_defensoria_api_url;
    }
    
   
    // Obtener Distritos por ID
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


    // Obtener Distritos por CLAVE
    function getDistritosClave(){
        var api_distritos_clave = get_api_url_only_distritos();

        fetch(api_distritos_clave)
        .then(res => res.json())
        .then(result => {
            $('#distritoClaveSelect').append($('<option>', {
                value: 0,
                text: 'Selecciona un Distrito'
            }))
            $.each(result.items,function (i, distrito) {
                $('#distritoClaveSelect').append($('<option>', {
                    value: distrito["clave"],
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
            $('#cemascSelect').append($('<option>', {
                value: 0,
                text: 'Selecciona:'
            }))
            $.each(data.items, function (i, autoridades) {
                $('#cemascSelect').append($('<option>', {
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
            $('#defensoriaSelect').append($('<option>', {
                value: 0,
                text: 'Selecciona:'
            }))
            $.each(data.items, function (i, autoridades) {
                $('#defensoriaSelect').append($('<option>', {
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
