'use strict';

console.log('--------------------------------------');
console.log('Acceder a elementos del DOM');
console.log('--------------------------------------');

// Acceder a un elemento del DOM usando su ID
var header = document.getElementById('header');
console.log('header = ', header);

// Acceder a un elemento usando la clase del elemento
var backClassElement = document.getElementsByClassName('back');
console.log('backClassElement = ', backClassElement);

// Acceder a un elemento usando el nombre del elemento
var pElements = document.getElementsByTagName('p');
console.log('pElements = ', pElements);

// Accedo a los h1 que sean hijos de header
var h1Children = document.querySelectorAll('#header h1');
console.log('h1Children = ', h1Children);

console.log('--------------------------------------');
console.log('Acceder y modificar atributos de elementos del DOM');
console.log('--------------------------------------');

// Acceder a un atributo
var getAttr = backClassElement[0].getAttribute('class');
console.log('backClassElement[0].getAttribute(\'class\') = ', getAttr);

// Modificar un atributo de un elemento
document.getElementById('header').style = 'background-color: #ccc';
console.log('header = ', header);

// Modificar el contenido de un elemento
backClassElement[0].innerHTML = 'No hay vuelta atrás';
console.log('backClassElement[0] = ', backClassElement[0]);

console.log('--------------------------------------');
console.log('Crear y eliminar elementos DOM');
console.log('--------------------------------------');

var paragraph = document.createElement('p');
console.log('paragraph = ', paragraph);

header = document.getElementById('header');
header.parentNode.removeChild(header);


/*
  El objeto window en JavaScript es donde se almacena todo:
  'document', las variables globales (con ámbito global), etc.

  Se pueden acceder a las propiedades de windows sin necesidad
  de poner el nombre delante, por ejemplo:
  window.document === document
*/
console.log('--------------------------------------');
console.log('Objeto window');
console.log('--------------------------------------');

console.log('window = ', window);

console.log('Ejecuto window.setInterval(function(){ console.log("Esto es setInterval"); }, 3000);');
setInterval(function(){ console.log('Esto es setInterval'); }, 3000);

console.log('Ejecuto window.setTimeout(function(){ console.log("Esto es setTimeout"); }, 5000);');
setTimeout(function(){ console.log('Esto es setTimeout'); }, 5000);


