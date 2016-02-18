'use strict';

// Creamos una funcion EsriMap que se asigna propiedades
var EsriMap = function(obj){
  
  if(obj && obj.basemap){
    // Si recibo un objeto y tiene una propiedad basemap
    this.basemap = obj.basemap;
  }else{
    // Si no recibo un objeto o no tiene una propiedad basemap
    this.basemap = 'satellite';
  }

  // Establezco una propiedad setCenter que contiene una funcion
  // y que cambia una propiedad de la funcion
  this.setZoom = function(val){
    this.zoom = val;
  };
};

// Con new creamos una variable de tipo myMap
var myMap = new EsriMap({
  'basemap': 'topo'
});
var myMap2 = new EsriMap();

console.log ('---- Recien creados ----');
console.log('myMap = ', myMap);
console.log('myMap2 = ', myMap2);
 
console.log ('----myMap.setCenter([-80, 38]);----'); 
myMap2.setZoom(12);
console.log('myMap = ', myMap);
console.log('myMap2 = ', myMap2);