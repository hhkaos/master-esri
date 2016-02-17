'use strict';

// Almacenar en una variable el resultado de sumar 1 y 2
var a = 1 + 2;
console.log(a);
// alert(a); // Esto muestra una ventana emergente

// Almacenar en una variable el resultado de dividir 6 entre 2
var b = 12;
console.log(b);

// Almacenar en una variable el precio de un artículo de 20€ aplicándole el 21% de IVA .
var price = 20 * 1.21;
console.log(price);

price = 20;
price *= 1.21;
console.log(price);

// Definir una variable con el valor 4 y utilizar el operador (```++```) para incrementar en uno su valor.
var a = 4;

console.log(a++);
console.log(a);

// Definir una variable que almacene la concatenación de dos cadenas de texto.
var txt = 'Raul'+ ' '+ 'Jimenez';
console.log(txt);


// Definir una variable ```price``` con el valor ```19.99```y aplicar la abreviación ```/=``` para dividirlo entre ```1.21``` para obtener el precio sin IVA.
var price = 19.99;
price /= 1.21;
console.log(price);


// Asignar a dos variables valores booleanos y hacer al menos una operación combinando un operador lógico: **AND** (```&&```) o **OR** (```||```)
var a = true;
var b = false;
var c = a && b;
console.log(c);


// Realizar 4 expresiones que utilicen operadores relacionales (```<```, ```==```, ```!=``` y ```===```) y almacenen los valores en tres variables distintas.

var i;
var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
 
for(i = 0; i < 6; i++) {
  if(days[i] == 'Viernes'){
    break;
  }
  console.log(days[i]);
}