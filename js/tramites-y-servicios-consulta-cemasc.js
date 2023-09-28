
$(document).ready(function () {
    // Validación 04 CURSO DE MEDIACIÓN
    function validateCM() {
        if ($("#cemascSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Selecciona una Oficina");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#CPMM").bind("click", validateCM);

    // Validación 05 CERTIFICADO DE MEDIADORES
    function validateCDM() {
        if ($("#cemascSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Selecciona una Oficina");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#CM").bind("click", validateCDM);

    // Validación 06 VALIDACIÓN EXTEMPORANEA
    function validateVE() {
        if ($("#cemascSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Elige una Oficina");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#VECMP").bind("click", validateVE);

    // Que no se refresque la página al presionar Enter y se restablezca el formulario después de enviar
    $("#buscarForm").on("submit", function (event) {
        document.getElementById("buscarForm").reset();
        event.preventDefault();
    });

    // Mensaje de error alert
    const errorMessage = (text) => {
        $("#msjError").append(`<div id='errMsj' class="alert alert-danger text-center" rol="alert">${text}</div>`);
    };

    // obtener Autoridad CEMASC
    function getCemascAutoridades() {

        fetch(apiCemasc, { headers: { "X-Api-Key": apiKey } })
        .then((res) => res.json())
        .then((data) => {
            // Primero, remover todas las opciones existentes
            $("#cemascSelect option").remove();
            // Agregar la opción por defecto
            $("#cemascSelect").append(
            $("<option>", {
                value: 0,
                text: "Selecciona:",
            })
            );
            $.each(data.result.items, function (i, autoridades) {
            $("#cemascSelect").append(
                $("<option>", {
                value: autoridades["clave"],
                text: autoridades["descripcion"],
                })
            );
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    getCemascAutoridades();

});