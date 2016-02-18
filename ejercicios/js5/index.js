'use strict';

//Accede al elemento h1 y modifica el color #F00
document.getElementsByTagName('h1')[0].setAttribute('style', 'color:#f00');
document.getElementsByTagName('h1')[0].style = 'color: #f00'; // Esto no funciona en todos los atributos, por ejemplo class

//Accede al elemento con id "header" y cambiar el color de fondo a #ccc
document.getElementById('header').setAttribute('style', 'background-color: #ccc');
document.getElementById('header').style = 'background-color: #ccc'; // Esto no funciona en todos los atributos, por ejemplo class

//Accede al primer elemento con clase 'bold' y establece el ancho a color a verde
document.getElementsByClassName('bold')[0].setAttribute('style', 'color:#f00');
document.getElementsByClassName('bold')[0].style = 'color: green';  // Esto no funciona en todos los atributos, por ejemplo class

// Accede a todos los elementos con clase bold y le ponemos el ancho de línea a normal
var elements = document.getElementsByClassName('bold');
console.log(document.getElementsByClassName('bold'));

var i = 0;

for(i; i < elements.length; i++){
  elements[i].style = 'font-weight: normal';
}