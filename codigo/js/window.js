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