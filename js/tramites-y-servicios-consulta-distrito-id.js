$(document).ready(function () {

    // Validación 09 COPIA SIMPLE
    function validateCS() {
        if ($("#distritoSelect option:selected").val() !== "0" && $("#autoridadSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Llene los campos");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#CS").bind("click", validateCS);

    // Validación 10 COPIA CERTIFICADA
    function validateCC() {
        if ($("#distritoSelect option:selected").val() !== "0" && $("#autoridadSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Llene los campos");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#CC").bind("click", validateCC);

    // Validación 12 GRABACIÓN DE LA AUDIENCIA
    function validateCDDVD() {
        if ($("#distritoSelect option:selected").val() !== "0" && $("#autoridadSelect option:selected").val() !== "0") {
        document.getElementById("buscarForm").submit();
        } else {
        errorMessage("Llene los campos");
        setTimeout(() => {
            $("#msjError").remove();
        }, 5000);
        }
    }
    $("#CDDVD").bind("click", validateCDDVD);

    // Que no se refresque la página al presionar Enter y se restablezca el formulario después de enviar
    $("#buscarForm").on("submit", function (event) {
        document.getElementById("buscarForm").reset();
        event.preventDefault();
    });

    // Mensaje de error alert
    const errorMessage = (text) => {
        $("#msjError").append(`<div id='errMsj' class="alert alert-danger text-center" rol="alert">${text}</div>`);
    };

    // Cambiar el valor del distrito y tomar el id para cargar las autoridades
    $("#distritoSelect").on("change", function () {
        const idDistrito = $(this).val();
        getAutoridades(idDistrito);
    });

    // Obtener Distritos por ID
    function getDistritos() {

        fetch(apiDistrito, { headers: { "X-Api-Key": apiKey } })
        .then((res) => res.json())
        .then((data) => {
            // Primero, remover todas las opciones existentes
            $("#distritoSelect option").remove();
            // Agregar la opción por defecto
            $("#distritoSelect").append(
            $("<option>", {
                value: 0,
                text: "Selecciona un Distrito",
            })
            );
            $.each(data.items, function (i, distrito) {
            $("#distritoSelect").append(
                $("<option>", {
                value: distrito["id"],
                text: distrito["nombre"],
                })
            );
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // obtener Autoridad por distrito_id
    function getAutoridades(id) {
        var api_url = getApiAutoridades(id);

        fetch(api_url, { headers: { "X-Api-Key": apiKey } })
        .then((res) => res.json())
        .then((data) => {
            // Primero, remover todas las opciones existentes
            $("#autoridadSelect option").remove();
            // Agregar la opción por defecto
            $("#autoridadSelect").append(
            $("<option>", {
                value: 0,
                text: "Selecciona un Juzgado u Oficina",
            })
            );
            $.each(data.items, function (i, autoridades) {
            $("#autoridadSelect").append(
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

    getDistritos();

});
