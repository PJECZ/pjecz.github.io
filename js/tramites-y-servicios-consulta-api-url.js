"use strict";

const _0x78beba=_0x4cc6;function _0x4cc6(_0x3e6e06,_0x316a87){const _0x47b69b=_0x47b6();return _0x4cc6=function(_0x4cc655,_0xe33ae0){_0x4cc655=_0x4cc655-0xaf;let _0x2b79ac=_0x47b69b[_0x4cc655];return _0x2b79ac;},_0x4cc6(_0x3e6e06,_0x316a87);}(function(_0x5c598d,_0x210c63){const _0x4ec5d1=_0x4cc6,_0x44e7a0=_0x5c598d();while(!![]){try{const _0x14983b=parseInt(_0x4ec5d1(0xb0))/0x1+-parseInt(_0x4ec5d1(0xb3))/0x2*(-parseInt(_0x4ec5d1(0xb5))/0x3)+parseInt(_0x4ec5d1(0xb6))/0x4+-parseInt(_0x4ec5d1(0xaf))/0x5+-parseInt(_0x4ec5d1(0xb7))/0x6+-parseInt(_0x4ec5d1(0xb4))/0x7+-parseInt(_0x4ec5d1(0xb2))/0x8*(-parseInt(_0x4ec5d1(0xb1))/0x9);if(_0x14983b===_0x210c63)break;else _0x44e7a0['push'](_0x44e7a0['shift']());}catch(_0xa93e64){_0x44e7a0['push'](_0x44e7a0['shift']());}}}(_0x47b6,0xe5c6e));const apiKey=_0x78beba(0xb8);function _0x47b6(){const _0xce82c6=['gAAAAABlErx69Ks3NE85EZmaGz7k2PnbGgtQ1tO8zJQfBPL1KwH4YCPUOGUrY6ng3yxiHzQi0p12n7SMPDE-JeHPAGS0ExVSiPjAAjGkP3HjEJmO6f4wf7c=','90765fwHSsq','1703235CuRKuo','11732832IpaiIt','8MTnyjw','103708TyuUIa','7919590LUSRYg','9gWsjsh','2784296HMkQoY','10606980ZFionI'];_0x47b6=function(){return _0xce82c6;};return _0x47b6();}

let apiDistrito;
let onlyDistritos;
let apiCemasc;
let apiDefensoria;


switch(window.location.hostname){
  case "localhost":
    apiDistrito = "http://172.30.37.233:8012/v3/distritos";
    onlyDistritos = "http://172.30.37.233:8012/v3/distritos?es_distrito=true";
    apiCemasc = "http://172.30.37.233:8012/v3/autoridades?es_cemasc=true";
    apiDefensoria = "http://172.30.37.233:8012/v3/autoridades?es_defensoria=true";
    break;
  case "127.0.0.1":
    apiDistrito = "http://172.30.37.233:8012/v3/distritos";
    onlyDistritos = "http://172.30.37.233:8012/v3/distritos?es_distrito=true";
    apiCemasc = "http://172.30.37.233:8012/v3/autoridades?es_cemasc=true";
    apiDefensoria = "http://172.30.37.233:8012/v3/autoridades?es_defensoria=true";
    break;
  case "172.30.37.233":
    apiDistrito = "http://172.30.37.233:8012/v3/distritos";
    onlyDistritos = "http://172.30.37.233:8012/v3/distritos?es_distrito=true";
    apiCemasc = "http://172.30.37.233:8012/v3/autoridades?es_cemasc=true";
    apiDefensoria = "http://172.30.37.233:8012/v3/autoridades?es_defensoria=true";
    break;
  default:
    apiDistrito = "https://api.justiciadigital.gob.mx/v3/distritos";
    onlyDistritos = "https://api.justiciadigital.gob.mx/v3/distritos?es_distrito=true";
    apiCemasc = "https://api.justiciadigital.gob.mx/v3/autoridades?es_cemasc=true";
    apiDefensoria = "https://api.justiciadigital.gob.mx/v3/autoridades?es_defensoria=true";

}

function getApiAutoridades(id) {
  switch (window.location.hostname) {
    case "localhost":
    case "127.0.0.1":
    case "172.30.37.233":
      return "http://172.30.37.233:8012/v3/autoridades?distrito_id=" + id;
    default:
      return "https://api.justiciadigital.gob.mx/v3/autoridades?distrito_id=" + id;
  }
}
