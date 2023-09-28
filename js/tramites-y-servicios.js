$(document).ready(function () {

  // Validación 02 LICITACIÓNES PÚBLICAS
  function validateLP() {
    if ($("#razonSocial").val().trim() === "" || $("#licitacion").val().trim() === "") {
      errorMessage("Llene todos los campos");
      setTimeout(() => {
        $("#msjError").remove();
      }, 5000);
    } else {
      var descripcion = $("#razonSocial").val() + " - " + $("#licitacion").val();
      $("#descripcion").val(descripcion);
      document.getElementById("buscarForm").submit();
      return false;
    }
  }
  $("#BLPNOPS").bind("click", validateLP);

  // Que no se refresque la página al presionar Enter y se restablezca el formulario después de enviar
  $("#buscarForm").on("submit", function (event) {
    document.getElementById("buscarForm").reset();
    event.preventDefault();
  });

  // Mensaje de error alert
  const errorMessage = (text) => {
    $("#msjError").append(`<div id='errMsj' class="alert alert-danger text-center" rol="alert">${text}</div>`);
  };

});
