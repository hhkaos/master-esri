'use strict';

// Variable necesaria para los ejemplos
var map = { 
  'basemap': 'topo',
  'center': [-3, 40]
};

console.log('--------------------------------------');
console.log('Definir una funcion');
console.log('--------------------------------------');

// Función que devuelve un valor
function suma(a, b){
  return a + b;
}
console.log('suma(3, 4) = ' + suma(3, 4));


// Una forma de definir funciones
function printObj(obj){
  for(var property in obj) {    
      if (obj.hasOwnProperty(property)) {
          console.log('obj[' + property + '] = ' + obj[property]);
      }
  }
}

// Llamamos a la funcion
printObj(map);

// Forma recomendada
var printObjRecomended = function(obj){
  for(var property in obj) {    
      if (obj.hasOwnProperty(property)) {
          console.log('obj[' + property + '] = ' + obj[property]);
      }
  }
};

// Llamamos a la funcion
printObjRecomended(map);

console.log('--------------------------------------');
console.log('Definir una funcion en un objeto (y "this")');
console.log('--------------------------------------');
/*
map.printBasemap = function(){
  console.log('this.basemap = ', this.basemap);
};
*/

  //Equivale a:
  
  var map = { 
    'basemap': 'topo',
    'center': [-3, 40],
    'printBasemap': function(){
      console.log('this.basemap = ', this.basemap);
    }
  };


map.printBasemap();

console.log('--------------------------------------');
console.log('Funciones anonimas');
console.log('--------------------------------------');
(function(){
  var map = 'Nuevo valor'; // Local
  console.log(map);
}());

console.log(map);

console.log('--------------------------------------');
console.log('Funciones anidadas');
console.log('--------------------------------------');

// Funcion para clonar objetos:
// http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object#answer-728694
function clone(obj) {
    if (null === obj || 'object' !== typeof obj){ return obj; }
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)){ copy[attr] = obj[attr]; }
    }
    return copy;
}

// Ejemplo:
var parentFunction = function(obj, str){
  var tmp = clone(obj);
  tmp.basemap = 'streets';

  console.log('str = ', str );
  var childFunction = function(obj){  
    printObjRecomended(obj);
  };

  childFunction(tmp);
};

parentFunction(map, 'Ejecutando parentFunction(map,...)');
printObjRecomended(map);