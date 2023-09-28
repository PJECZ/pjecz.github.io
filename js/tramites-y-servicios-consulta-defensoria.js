
$(document).ready(function () {
    // Validación 01 TALLER DE ORIENTACIÓN
    function validateT() {
        if ($("#defensoriaSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Selecciona una Oficina");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#TOPM").bind("click", validateT);

    // Que no se refresque la página al presionar Enter y se restablezca el formulario después de enviar
    $("#buscarForm").on("submit", function (event) {
        document.getElementById("buscarForm").reset();
        event.preventDefault();
    });

    // Mensaje de error alert
    const errorMessage = (text) => {
        $("#msjError").append(`<div id='errMsj' class="alert alert-danger text-center" rol="alert">${text}</div>`);
    };

    // obtener Autoridad Defensorias
    function getdefensoriautoridades() {
        // var api_url = get_api_autoridades_defensoria();

        fetch(apiDefensoria, { headers: { "X-Api-Key": apiKey } })
        .then((res) => res.json())
        .then((data) => {
            // Primero, remover todas las opciones existentes
            $("#defensoriaSelect option").remove();
            // Agregar la opción por defecto
            $("#defensoriaSelect").append(
            $("<option>", {
                value: 0,
                text: "Selecciona:",
            })
            );
            $.each(data.result.items, function (i, autoridades) {
            $("#defensoriaSelect").append(
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

    getdefensoriautoridades();
});