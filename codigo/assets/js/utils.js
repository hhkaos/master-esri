'use strict';
(function(){

  var samples = {
    "Variables":{
      "Declarar variables": declareVariables,
      "Tipos de variables": variableTypes,
      "Métodos de algunos tipos": methodsTypes,
    },
    "Operadores":{
      "Operadores matemáticos": mathOperators,
      "Operadores lógicos": logicOperators,
      "Operadores relacionales": relationalsOperators,
      "Operador typeof": typeofOperator,
      "Valores null y undefined": nullAndUndefined
    },
    "Control del flujo":{
      "Estructura if": ifStructure,
      "Valores lógicos de variables != boolean": nonBooleanValues,
      "Estructura for": forStructure,
      "Estructura try{...}catch(e){...}": tryCatchStructure
    },
    "Objetos":{
      "Nuevo objeto vacío": newEmptyObject,
      "Nuevo objeto con propiedades": nonEmptyObject,
      "Añadir una propiedad": addObjProp,
      "Crear un objeto más complejo": complexObject,
      "Recorrer objeto con un bucle for": forInObj,
      "Operador new para construir objetos": newObjContructor
    },
    "Funciones":{
      "Cómo definir una función": functionDefine,
      "Definir una función de ámbito global": functionInGlobalScope,
      "Asignar una función en un objeto y usar this": functionInObj,
      "Declarar una función anónima": anonymFunction,
      'Ámbitos de una variable': nestedFunctions
    },
    "Objeto window":{
      "Acceder a los elementos del DOM": accessDOMElements,
      "Acceder y modificar atributos de elementos del DOM": accessModifyAttrs,
      "Objeto window": windowObj
    },
    "Eventos":{
      "Asociar un comportamiento al hacer clic en un elemento": addEventListenerClick,
      "Asociar un comportamiento al pasar el ratón por encima": addEventListenerMouse
    },
    "jQuery":{
      "Recuperar un elemento y asignar un evento": eventClickWithJquery,
      "Comportamientos: mouseover y mouseout": eventMouseWithJquery,
      "Recuperar elementos por AJAX": jqueryAjax
    }

  };

  var updateURL = function(){
    var l = $('#lesson')[0].selectedIndex + 1;
    var s = $('#snippets')[0].selectedIndex + 1;
    location.search = '?lesson='+ l +'&snippet='+ s;
  };

  // Load selectors with all sample options
  var qs = function(key) {
      key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
      var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
      return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  };
  var qsLesson = qs('lesson') || 1;
  var qsSnippet = qs('snippet')|| 1;

  
  /*
  
  */
  var loadSnippet = function(obj){
    var j = 0;
    for(var snippet in obj) {    
      if (obj.hasOwnProperty(snippet)) {
        j++;
        $('#snippets').append('<option value="'+snippet+'">' + j + '.- '+snippet+'</option>');
      }
    }
  };

  var i = 0;
  for(var lesson in samples) {    
    if (samples.hasOwnProperty(lesson)) {
      var s = samples[lesson];
      var tmp = Object.keys(s).length;
      i++;
      $('#lesson').append('<option value="'+lesson+'">' + i + '.- '+lesson+' ('+tmp+')</option>');
      
      if(i == qsLesson){
        loadSnippet(s);
      }
    }
  }

  var needRefresh = false;
  var maxLesson = $("#lesson option").length;
  if(qsLesson > maxLesson || qsLesson < 0){
    $("#lesson")[0].selectedIndex = 0;
    needRefresh = true;
  }
  var maxSnippet = $("#snippets option").length;
  if(qsSnippet > maxSnippet || qsSnippet < 0){
    $("#snippets")[0].selectedIndex = 0;
    needRefresh = true;
  }
  if(needRefresh){
    updateURL();
  }

  var runCode = function(str, obj){
    var params = [str, obj];
    for(var p in params){
      if(params[p] && params[p].toString){
        var tmp = params[p].toString();
      
        if(params[p] && tmp === '[object Object]'){
          //prettyprint
          document.getElementById('console').innerHTML += JSON.stringify(params[p], null, 2);
        }else if(typeof params[p] === 'string' || typeof params[p] === 'number'){
          document.getElementById('console').innerHTML += params[p];
        }else if (typeof params[p] === 'object' && params[p].length >= 0){
          document.getElementById('console').innerHTML += '['+ params[p]+']';
        }else{
          document.getElementById('console').innerHTML += params[p].toString();
        }
      }
      if(p == 1 || params.length == 1){
        document.getElementById('console').innerHTML += '\n';
      }
    }
    if(obj === null){
      document.getElementById('console').innerHTML += 'null'
    }
    //document.getElementById('console').innerHTML += str;

    
  };

  var oldLog = console.log;
  console.log = function(message,param){
    //log = message;
    runCode(message, param)
    oldLog.apply(console, arguments);
  };

  var cleanFn = function(fn){
    fn = fn.toString(); 
    fn = fn.substr(fn.indexOf('\n')+1); 
    fn = fn.substr(0,(fn.length-3));
    return fn;
  };
  var refreshPreElements = function(){
    var l = $('#lesson').val();
    var s = $('#snippets').val();
    
    //debugger;
    var txt =cleanFn(samples[l][s]);
    $('#code, #console').removeClass('prettyprinted');
    $('#code').text(txt);
    $('#console').empty();
    samples[l][s]();
    PR.prettyPrint();
  };

  if(qsLesson && qsSnippet){
    (document.getElementById('lesson')).selectedIndex = qsLesson-1;
    (document.getElementById('snippets')).selectedIndex = qsSnippet-1;
    refreshPreElements();
  }else{
    var qsLesson = 1
  }

  

  $('#lesson').change(function(){
    /*$('#snippets').empty();
    var lesson = $('#lesson').val();
    loadSnippet(samples[lesson]);
    $('#snippets').change()*/
    $('#snippets')[0].selectedIndex = 0;
    updateURL();
  });

  

  $('#snippets').change(function(){
    //refreshPreElements();
    updateURL();
  });

  

  $('#btnRun').click(function(){
    $('#console').empty();
    var l = $('#lesson').val();
    var s = $('#snippets').val();
    
  });

  //$('#code').text(cleanFn(samples['Objetos']['Nuevo objeto vacío']));
  //$('#snippets').change();  

  $('#prev').click(function(){
    
    var snippets = document.getElementById('snippets');
    if((snippets.selectedIndex -1) >= 0){
      snippets.selectedIndex--;
      //$('#snippets').change();
      updateURL();
    }
  });

  $('#next').click(function(){
    
    var snippets = document.getElementById('snippets');
    if((snippets.selectedIndex + 1) < $("#snippets option").length){
      snippets.selectedIndex++;
      //$('#snippets').change();
      updateURL();

      /*var l = $('#lesson')[0].selectedIndex + 1;
      var s = $('#snippets')[0].selectedIndex + 1;
      location.search = '?lesson='+ l +'&snippet='+ s;*/
    }
  });

//(document.getElementById('snippets')).selectedIndex  
}());
