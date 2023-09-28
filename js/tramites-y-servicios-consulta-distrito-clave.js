$(document).ready(function () {
    // Validación 08 CURSO CAPACITACIÓN PARA EXTERNOS
    function validateCCI() {
        if ($("#distritoClaveSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Elige una Distrito");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#CCIEJ").bind("click", validateCCI);

    // Validación 11 CONSTANCIA DE NO REGISTRO REDAM
    function validateREDAM() {
        if ($("#distritoClaveSelect option:selected").val() !== "0" || $("#nombreREDAM").val().trim() === "") {
        var descripcion = $("#nombreREDAM").val();
        $("#descripcion").val(descripcion);
        document.getElementById("buscarForm").submit();
        return false;
        } else {
        errorMessage("Llene todos los campos");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#REDAM").bind("click", validateREDAM);

    // Validación 16 RENTA DE INSTALACIONES
    function validateRI() {
        if ($("#distritoClaveSelect option:selected").val() !== "0" && $("#descripcionInput").val().trim() !== "") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Elige una Distrito y escribe una descripción");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#RI").bind("click", validateRI);

    // Que no se refresque la página al presionar Enter y se restablezca el formulario después de enviar
    $("#buscarForm").on("submit", function (event) {
        document.getElementById("buscarForm").reset();
        event.preventDefault();
    });

    // Mensaje de error alert
    const errorMessage = (text) => {
        $("#msjError").append(`<div id='errMsj' class="alert alert-danger text-center" rol="alert">${text}</div>`);
    };

    // Obtener Distritos por CLAVE
    function getDistritosClave() {
        
        fetch(onlyDistritos, { headers: { "X-Api-Key": apiKey } })
        .then((res) => res.json())
        .then((data) => {
            // Primero, remover todas las opciones existentes
            $("#distritoClaveSelect option").remove();
            // Agregar la opción por defecto
            $("#distritoClaveSelect").append(
            $("<option>", {
                value: 0,
                text: "Selecciona un Distrito",
            })
            );
            $.each(data.result.items, function (i, distrito) {
            $("#distritoClaveSelect").append(
                $("<option>", {
                value: distrito["clave"],
                text: distrito["nombre"],
                })
            );
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    getDistritosClave();
});