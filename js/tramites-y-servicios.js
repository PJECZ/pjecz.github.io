"use strict";

const _0x547c42 = _0x2983;
function _0x5e5f() {
  const _0x2ced38 = [
    "gAAAAABk0PpL-s9M3ahForwt74_q5aqMRphQAfQsnZ4E18CfXRVVBQAJbnt6kMI5RBXbl4YqseojLzeep8fZb3a3laj_InwzXpnjS1_ufAzH3Uj6JKcQ61E=",
    "3152195KuHnvg",
    "1159902fqXzzY",
    "1952752gUNHAC",
    "1529312GHfjfP",
    "1XhQWdB",
    "3019842szaNgp",
    "3352251bADafa",
    "6425874ovizwm",
  ];
  _0x5e5f = function () {
    return _0x2ced38;
  };
  return _0x5e5f();
}
(function (_0x1137d0, _0x55bdcf) {
  const _0x4d5c9a = _0x2983,
    _0x3109e0 = _0x1137d0();
  while (!![]) {
    try {
      const _0x25f1fb =
        (-parseInt(_0x4d5c9a(0xa6)) / 0x1) * (-parseInt(_0x4d5c9a(0xac)) / 0x2) +
        -parseInt(_0x4d5c9a(0xa8)) / 0x3 +
        parseInt(_0x4d5c9a(0xae)) / 0x4 +
        parseInt(_0x4d5c9a(0xab)) / 0x5 +
        -parseInt(_0x4d5c9a(0xa7)) / 0x6 +
        parseInt(_0x4d5c9a(0xa9)) / 0x7 +
        -parseInt(_0x4d5c9a(0xad)) / 0x8;
      if (_0x25f1fb === _0x55bdcf) break;
      else _0x3109e0["push"](_0x3109e0["shift"]());
    } catch (_0x202ff6) {
      _0x3109e0["push"](_0x3109e0["shift"]());
    }
  }
})(_0x5e5f, 0x9dafa);
function _0x2983(_0x783d98, _0xdf1ff7) {
  const _0x5e5f60 = _0x5e5f();
  return (
    (_0x2983 = function (_0x2983a7, _0x223d9c) {
      _0x2983a7 = _0x2983a7 - 0xa6;
      let _0x1e83a0 = _0x5e5f60[_0x2983a7];
      return _0x1e83a0;
    }),
    _0x2983(_0x783d98, _0xdf1ff7)
  );
}
const apiKey = _0x547c42(0xaa);

$(document).ready(function () {
  getDistritos();
  getDistritosClave();
  getCemascAutoridades();
  getdefensoriautoridades();

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

  // Cambiar el valor del distrito y tomar el id para cargar las autoridades
  $("#distritoSelect").on("change", function () {
    const idDistrito = $(this).val();
    getAutoridades(idDistrito);
  });

  // URL de la API Distrito ID
  function get_api_distritos() {
    var distritos_api_url;
    switch (location.hostname) {
      // Para desarrollo
      case "localhost":
        distritos_api_url = "http://localhost:8001/v3/distritos";
        break;
      case "127.0.0.1":
        distritos_api_url = "http://127.0.0.1:8001/v3/distritos";
        break;
      case "172.30.37.233":
        distritos_api_url = "http://172.30.37.233:8001/v3/distritos";
        break;
      // Para producción
      default:
        distritos_api_url = "https://api.justiciadigital.gob.mx/v3/distritos";
    }
    return distritos_api_url;
  }

  // URL de la API solo Distritos y clave
  function get_api_url_only_distritos() {
    var only_distritos_api_url;
    switch (location.hostname) {
      // para desarrollo
      case "localhost":
        only_distritos_api_url = "http://localhost:8001/v3/distritos?es_distrito=true";
        break;
      case "127.0.0.1":
        only_distritos_api_url = "http://127.0.0.1:8001/v3/distritos?es_distrito=true";
        break;
      case "172.30.37.233":
        only_distritos_api_url = "http://172.30.37.233:8001/v3/distritos?es_distrito=true";
        break;
      default:
        only_distritos_api_url = "https://api.justiciadigital.gob.mx/v3/distritos?es_distrito=true";
    }
    return only_distritos_api_url;
  }

  // URL de la API Autoridades por distrito_id
  function get_api_autoridades(id = 0) {
    var autoridad_api_url;
    switch (location.hostname) {
      // Para desarrollo
      case "localhost":
        autoridad_api_url = "http://localhost:8001/v3/autoridades?distrito_id=" + id;
        break;
      case "127.0.0.1":
        autoridad_api_url = "http://127.0.0.1:8001/v3/autoridades?distrito_id=" + id;
        break;
      case "172.30.37.233":
        autoridad_api_url = "http://172.30.37.233:8001/v3/autoridades?distrito_id=" + id;
        break;
      // Para producción
      default:
        autoridad_api_url = "https://api.justiciadigital.gob.mx/v3/autoridades?distrito_id=" + id;
        break;
    }
    return autoridad_api_url;
  }

  // URL de la API Autoridades CEMASC
  function get_api_autoridades_cemasc() {
    var autoridad_cemasc_api_url;
    switch (location.hostname) {
      // Para desarrollo
      case "localhost":
        autoridad_cemasc_api_url = "http://localhost:8001/v3/autoridades?es_cemasc=true";
        break;
      case "127.0.0.1":
        autoridad_cemasc_api_url = "http://127.0.0.1:8001/v3/autoridades?es_cemasc=true";
        break;
      case "172.30.37.233":
        autoridad_cemasc_api_url = "http://172.30.37.233:8001/v3/autoridades?es_cemasc=true";
        break;
      // Para producción
      default:
        autoridad_cemasc_api_url = "https://api.justiciadigital.gob.mx/v3/autoridades?es_cemasc=true";
        break;
    }
    return autoridad_cemasc_api_url;
  }

  // URL de la API Autoridades Defensoria
  function get_api_autoridades_defensoria() {
    var autoridad_defensoria_api_url;
    switch (location.hostname) {
      // Para desarrollo
      case "localhost":
        autoridad_defensoria_api_url = "http://localhost:8001/v3/autoridades?es_defensoria=true";
        break;
      case "127.0.0.1":
        autoridad_defensoria_api_url = "http://127.0.0.1:8001/v3/autoridades?es_defensoria=true";
        break;
      case "172.30.37.233":
        autoridad_defensoria_api_url = "http://172.30.37.233:8001/v3/autoridades?es_defensoria=true";
        break;
      // Para producción
      default:
        autoridad_defensoria_api_url = "https://api.justiciadigital.gob.mx/v3/autoridades?es_defensoria=true";
        break;
    }
    return autoridad_defensoria_api_url;
  }

  // Obtener Distritos por ID
  function getDistritos() {
    var api_distritos = get_api_distritos();

    fetch(api_distritos, { headers: { "X-Api-Key": apiKey } })
      .then((res) => res.json())
      .then((data) => {
        $("#distritoSelect").append(
          $("<option>", {
            value: 0,
            text: "Selecciona un Distrito",
          })
        );
        $.each(data.result.items, function (i, distrito) {
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

  // Obtener Distritos por CLAVE
  function getDistritosClave() {
    var api_distritos_clave = get_api_url_only_distritos();

    fetch(api_distritos_clave, { headers: { "X-Api-Key": apiKey } })
      .then((res) => res.json())
      .then((data) => {
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

  // obtener Autoridad por distrito_id
  function getAutoridades(id) {
    var api_url = get_api_autoridades(id);

    fetch(api_url, { headers: { "X-Api-Key": apiKey } })
      .then((res) => res.json())
      .then((data) => {
        $("#autoridadSelect").append(
          $("<option>", {
            value: 0,
            text: "Selecciona un Juzgado u Oficina",
          })
        );
        $.each(data.result.items, function (i, autoridades) {
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

  // obtener Autoridad CEMASC
  function getCemascAutoridades() {
    var api_url = get_api_autoridades_cemasc();

    fetch(api_url, { headers: { "X-Api-Key": apiKey } })
      .then((res) => res.json())
      .then((data) => {
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

  // obtener Autoridad Defensorias
  function getdefensoriautoridades() {
    var api_url = get_api_autoridades_defensoria();

    fetch(api_url, { headers: { "X-Api-Key": apiKey } })
      .then((res) => res.json())
      .then((data) => {
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
});
