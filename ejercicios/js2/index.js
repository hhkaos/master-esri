'use strict';

/*
  Crear un bucle for que imprima los mensajes:

  Valor de i: 0
  Valor de i: 1
  ... hasta ...
  Valor de i: 9
*/
var i;
for(i = 0; i < 9; i++){
  console.log('Valor de i: ' + i);
}


/*
  Crear un bucle for que imprima los mensajes: con números pares

  Valor de i: 0
  Valor de i: 2
  Valor de i: 4
  ... hasta ...
  Valor de i: 8
*/
var i;
for(i = 0; i < 9; i += 2){
  console.log('Valor de i: ' + i);
}

for(i = 0; i < 9; i++){
  if(i % 2 === 0){
    console.log('Valor de i: ' + i);
  }
}

for(i = 0; i < 9; i){
  
  console.log('Valor de i: ' + i);
  i += 2;

}

/*
  Crear un bucle dentro de otro (anidados) que imprima

  Valor de i: 0
  Valor de j: 0
  
  Valor de i: 0
  Valor de j: 1
  
  Valor de i: 0
  Valor de j: 2
  
  ... hasta ...
  
  Valor de i: 9
  Valor de j: 9
*/
var i = 0, j;

for(i = 0; i < 10; i++){
  for(j = 0; j < 10; j++){
    console.log('Valor de i: ' + i);
    console.log('Valor de j: ' + j);
  } 
}

for(i; i < 10; i++){
  j = 0;
  for(j; j < 10; j++){
    console.log('Valor de i: ' + i);
    console.log('Valor de j: ' + j);
  } 
}
