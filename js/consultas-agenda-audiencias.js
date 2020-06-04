var dataSet = [];
var API_KEY = '';  
var CLIENT_ID = '';
var SCOPE = '';
var SHEET_AUTORIDADES_ID = '';
var RANGE_AUTORIDADES = '';

var columnas = [ { title: "Expediente" },                        
                { title: "Audiencia" },
                { title: "Fecha" },
                { title: "Actor(es)" },
                { title: "Demandado(s)" }];

var columnasAcusatorio = [   { title: "Carácter" },                        
                            { title: "Tipo de Audiencia" },
                            { title: "Fecha" },
                            { title: "Sala" },
                            { title: "Causa Penal" },
                            { title: "Delito" }];

$(document).ready(function(){   

    $.getJSON("https://storage.googleapis.com/pjecz-consultas/consultas-agenda-audiencias-llaves.json", function(datos) {    
        $.each(datos, function(clave, dato) {
            API_KEY = dato.API_KEY;
            CLIENT_ID = dato.CLIENT_ID;
            SCOPE = dato.SCOPE;
            SHEET_AUTORIDADES_ID = dato.SHEET_AUTORIDADES_ID;
            RANGE_AUTORIDADES = dato.RANGE_AUTORIDADES;
        })
    });

    CargarApiGoogleSheet();    
    LlenarTablaInicial();

    let añosSelect =  $("#añosSelect");
    añosSelect.append('<option selected="true" disabled>- Elija un año </option>');
    añosSelect.prop("selectedIndex", 0);

    let distritoSelect = $("#distritoSelect");
    distritoSelect.empty();
    distritoSelect.append('<option selected="true" disabled>- Elija la Entidad o el Distrito Judicial </option>');
    distritoSelect.prop("selectedIndex", 0);
    $.getJSON("/json/consultas-agenda-audiencias-distritos.json", function(datos) {
        $.each(datos, function(clave, dato) {
            distritoSelect.append($('<option></option>').attr('value', dato.id).text(dato.nombre))
        })
    });

    let autoridadSelect = $("#autoridadSelect");
    autoridadSelect.empty();
    autoridadSelect.append('<option selected="true" disabled>- Elija la Entidad o el Juzgado -</option>');
    autoridadSelect.prop("selectedIndex", 0);

    $('#distritoSelect').change(function(){
        var val = $(this).val();
        autoridadSelect.empty();
        autoridadSelect.append('<option selected="true" disabled>- Elija la Entidad o el Juzgado -</option>');
        autoridadSelect.prop("selectedIndex", 0);  
        LLenarJuzgados(val);
    });

    $('#autoridadSelect').change(function(){       
        LlenarAño();
    });

    $('#mostrarButton').click(function(){  
        $('#listaAgendaAudiencias').DataTable().clear();
        $('#listaAgendaAudiencias').DataTable().destroy();        
        $('#listaAgendaAudiencias').empty();
        var añosSelect = $("#añosSelect").val();
        if(añosSelect != null){
            var acusatorio = $("#autoridadSelect option:selected" ).text();               
            if(acusatorio.indexOf("Sistema Acusatorio y Oral") > -1){
                ConsultarInformacionAcusatorio();
            }
            else{
                ConsultarInformacion();    
            }
            
        }
    });
});

function ConsultarInformacion() {
    var params = {        
        spreadsheetId: $('#autoridadSelect').val(),  
        range: $('#añosSelect').val()
    };
    
    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response){                            
        dataSet = [];
        var status = response.status;
        if(status == "200"){
            var values = response.result.values;
            var ColeccionDatos = [];
            for (var i = 1; i < values.length; i++){
                var datos = values[i];
                var Expediente = datos[0];
                var Audiencia = datos[1];
                var Fecha = datos[2];
                var Actor = datos[3];
                var Demandado = datos[4];  
                
                if(Fecha == undefined){ 
                    datos.push("   "); 
                }                             
                if(Expediente == undefined){ 
                    datos.push("   "); 
                }                             
                if(Audiencia == undefined){ 
                    datos.push("   "); 
                }                             
                if(Actor == undefined){ 
                     datos.push("   "); 
                }                             
                if(Demandado == undefined){ 
                     datos.push("   "); 
                }                         
                dataSet.push(datos);  
            }                       
            LlenarTabla();                       
        }
    },function(reason) {
        var code = reason.result.error.code;
        if(code == "400"){
            dataSet = [];  
            LlenarTablaInicial();   
        }
    });
}

function ConsultarInformacionAcusatorio() {
    var params = {        
        spreadsheetId: $('#autoridadSelect').val(),  
        range: $('#añosSelect').val()
    };
    
    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response){                            
        dataSet = [];
        var status = response.status;
        if(status == "200"){
            var values = response.result.values;
            var ColeccionDatos = [];
            for (var i = 1; i < values.length; i++){
                var datos = values[i];
                var Caracter = datos[0];
                var Audiencia = datos[1];
                var Fecha = datos[2];
                var Sala = datos[3];
                var CausaPenal = datos[4];                            
                var Delito = datos[5];                            
           
                if(Caracter == undefined){ 
                    datos.push("   "); 
                }
                if(Audiencia == undefined){ 
                    datos.push("   "); 
                }        
                if(Fecha == undefined){ 
                    datos.push("   "); 
                }                             
                if(Sala == undefined){ 
                    datos.push("   "); 
                }                    
                if(CausaPenal == undefined){ 
                     datos.push("   "); 
                }                             
                if(Delito == undefined){ 
                     datos.push("   "); 
                }                         
                dataSet.push(datos);  
            }                       
            LlenarTablaAcusatorio();                       
        }
    },function(reason) {
        var code = reason.result.error.code;
        if(code == "400"){
            dataSet = [];  
            LlenarTablaInicial();   
        }
    });
}

function LLenarJuzgados(distrito) {
    var params = {        
        spreadsheetId: SHEET_AUTORIDADES_ID,  
        range: RANGE_AUTORIDADES
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response){                            
        dataSet = [];
        var status = response.status;
        if(status == "200"){
            var values = response.result.values;
            for (var i = 1; i < values.length; i++){
                var Arreglo = values[i];
                var idDistrito = Arreglo[0];
                var Autoridad = Arreglo[1];
                var Id = Arreglo[2];
                if(distrito == idDistrito){
                    $('#autoridadSelect').append( '<option value="' + Id + '">' + Autoridad + '</option');
                }
            }                
        }
    },function(reason) {});
}

function IniciarApi() {   
    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function(){});
}

function CargarApiGoogleSheet() {                
    gapi.load('client:auth2', IniciarApi);
}   

function LlenarAño(){    
    $("#añosSelect").empty();
    $("#añosSelect").append('<option selected="true" disabled>- Elija un año </option>');
    $("#añosSelect").prop("selectedIndex", 0);
    for(var i = 0; i < 1; i++) {
        var d = new Date();
        var n = d.getFullYear();
        var año = parseInt(n - i);
        $('#añosSelect').append('<option value="' + año + '">' + año + '</option');
    }
}        

function LlenarTablaInicial(){    
    $('#listaAgendaAudiencias').DataTable( {
        data: dataSet,
        columns: [                        
            { title: "Expediente/Causa Penal" },                        
            { title: "Tipo de Audiencia" },
            { title: "Fecha" },
            { title: "Sala" },
            { title: "Demandado/Imputado" },
            { title: "Actor/Victima Ofendido" }
        ],
        "pageLength": 10,        
        "order": 3,
        "language": {
            "lengthMenu": "Mostrar _MENU_",
            "search": "Filtrar:",
            "zeroRecords": " ",
            "info": "Página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados desde _MAX_ registros totales)",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            }
        }
    } );
}

function LlenarTabla(){    
    $('#listaAgendaAudiencias').DataTable( {
        data: dataSet,
        columns:  columnas,
        "pageLength": 10,        
        "order": 3,
        "language": {
            "lengthMenu": "Mostrar _MENU_",
            "search": "Filtrar:",
            "zeroRecords": " ",
            "info": "Página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados desde _MAX_ registros totales)",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            }
        }
    } );
}

function LlenarTablaAcusatorio(){    
    $('#listaAgendaAudiencias').DataTable( {
        data: dataSet,
        columns: columnasAcusatorio,
        "pageLength": 10,        
        "order": 3,
        "language": {
            "lengthMenu": "Mostrar _MENU_",
            "search": "Filtrar:",
            "zeroRecords": " ",
            "info": "Página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros",
            "infoFiltered": "(filtrados desde _MAX_ registros totales)",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            }
        }
    } );
}