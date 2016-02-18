'use strict';

/* 
  Declara un objeto mapa que tenga como información:
    - Una propiedad basemap con valor "topo" como string
    - Una propiedad center con un array de dos valores (-3.688510, 40.453010)
    - Una propiedad zoom con valor 16
*/
var mapa = {
  'basemap': 'topo',
  'center': [-3.688510, 40.453010],
  'zoom': 16
};

var mapa = {};
mapa.basemap = 'topo';
mapa.center = [-3.688510, 40.453010];
mapa.zoom = 16;

/*
  Añádele una propiedad 'autoResize' a verdadero (booleano)
*/
mapa.autoResize = true;


/*
  Imprime todos los valores del objeto usando un bucle for
*/
var p;
for(p in mapa){
  if (mapa.hasOwnProperty(p)){
    console.log('Property '+ p +':'+ mapa[p]);
  }
}