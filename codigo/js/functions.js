'use strict';

var functionDefine = function(){
  // Función que devuelve un valor
  function suma(a, b){
    return a + b;
  }
  console.log('suma(3, 4) = ', suma(3, 4));  
};


var functionInGlobalScope = function(){
  var map = { 
    "basemap": "topo",
    "center": [-3, 40]
  };

  // Al nos asignar la función en una variable 
  // se establece como una función de ámbito
  // global: window.printObj
  function printObj(obj){
    for(var property in obj) {    
        if (obj.hasOwnProperty(property)) {
            console.log('obj[' + property + '] = ', obj[property]);
        }
    }
    // Termina sin devolver valor (return)
  }

  // Llamamos a la función
  printObj(map);
};


var functionInObj = function(){
  // Definir una función en un objeto 
  // y asignarle el valor "this"
  var map = { 
    "basemap": "topo",
    "center": [-3, 40]
  };

  map.setZoom = function(level){
    this.zoom = level;
    console.log('this = ', this);
  };

  // El código interior equivale a este:
  var map = { 
    "basemap": "topo",
    "center": [-3, 40],
    "setZoom": function(level){
      this.zoom = level;
      // El objeto se imprime a si mismo
      console.log('this = ', this);
    }
  };

  map.setZoom(5);
};


var anonymFunction = function(){
  var map = { 
    "basemap": "topo",
    "center": [-3, 40]
  };

  (function(){
    var map = 'Nuevo valor'; // Local
    console.log(map);
  }());

  console.log(map);
};
  
var nestedFunctions = function(){
  // Definimos c en el ámbito global
  window.c = '10';

  var parentFunction = function(a, b){
    
    // Declaramos C en el ámbito local
    var c = a + b;
    
    console.log('a en parentFunction === ', a);
    console.log('b en parentFunction === ', b);
    console.log('c en parentFunction === ', c);
    
    var childFunction = function(c){  
      // Al declarar en el ámbito de esta función
      // su valor no se verá afectado fuera
      var a = 4;

      console.log('\na en childFunction === ', a);
      console.log('b en childFunction === ', b);
      console.log('c en childFunction === ', c);
      console.log('\nwindow.c en childFunction === ', window.c);

      // Machacamos su valor en parentFunction al no estar 
      // declarada en este ámbito
      b = 5;
    };

    childFunction(c);

    console.log('\na en parentFunction (2ª vez) === ', a);
    console.log('b en parentFunction (2ª vez) === ', b);
    console.log('c en parentFunction (2ª vez) === ', c);
    
  };

  parentFunction(1, 2);
  
};