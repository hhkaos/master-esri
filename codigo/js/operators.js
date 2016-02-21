'use strict';

var mathOperators = function(){
  // Asignación (=)
  var pi = 3.1416;
  console.log('pi // ', pi);

  // Suma (+) y resta (-)
  console.log('2 + 3 // ', 2 + 3);
  console.log('2 - 3 // ', 2 - 3);

  // División (/) y multiplicación (*)
  console.log('4 / 2 // ', 4 / 2);
  console.log('4 * 2 // ', 4 * 2);

  // Módulo (resto de la división)
  console.log('23 % 5 // ', 23 % 5);

  // Abreviaciones
  var x = 5;
  
  // Incrementamos x en 3
  console.log(x + ' += 1 // ', x += 1);
  
  // Reducimos x en 2
  console.log(x + ' -= 2 // ', x -= 2);
  
  // Multiplicamos x por 5
  console.log(x + ' *= 5 // ', x *= 5);
  
  // Dividimos x entre 3
  console.log(x + ' /= 4 // ', x /= 4);

  /************************************
      Incremento (++) y decremento (--)
  ************************************/
  var x = 1;
  console.log('x // ', x);

  // x++ imprime el valor y luego incrementa
  console.log('x++ // ', x++);
  console.log('x // ', x);
  console.log('x-- // ', x--);
  console.log('x // ', x);
  
  // El prefijo (++ / --) realiza la operación 1º
  console.log('++x // ', ++x); // x += 1
  console.log('--x // ', --x); // x -= 1
};

var logicOperators = function(){
  /************************************
    Operador negación
  ************************************/
  console.log('!true === ', !true); 
  console.log('!false === ', !false); 

  /************************************
    Operador AND (&&)
  ************************************/
  console.log('\ntrue && true === ', true && true); 
  console.log('true && false === ', true && false); 
  console.log('false && true === ', false && true); 
  console.log('false && false === ', false && false); 

  /************************************
    Operador OR (||)
  ************************************/
  console.log('\ntrue || true === ', true || true); 
  console.log('true || false === ', true || false); 
  console.log('false || true === ', false || true); 
  console.log('false || false === ', false || false); 
};

var relationalsOperators = function(){
  console.log('2 > 5 // ', 2 > 5); 
  console.log('2 < 5 // ', 2 < 5); 
   
  console.log('5 >= 5 // ', 5 >= 5); 
  console.log('5 <= 5 // ', 5 <= 5); 
  
  // Los operadores == y != comparan los valores
  console.log('5 == \'5\' // ', 5 == '5'); 
  console.log('5 == 5 // ', 5 == 5); 
  console.log('5 != \'5\' // ', 5 != '5'); 
  console.log('5 != 5 // ', 5 != 5); 


  // Los operadores === y !== comparan los valores y los tipos
  console.log('5 === \'5\' // ', 5 === '5'); 
  console.log('5 === 5 // ', 5 === 5); 
  console.log('5 !== \'5\' // ', 5 !== '5'); 
  console.log('5 !== 5 // ', 5 !== 5); 

  /* 
   Los operadores relacionales también se pueden
   utilizar con variables de tipo cadena de texto:
  */
  console.log('\'hola\' == \'adios\' // ', 'hola' == 'adios'); 
  console.log('\'hola\' != \'hola\' // ', 'hola' != 'hola'); 
  console.log('\'adios\' >= \'adios\' // ', 'adios' >= 'adios'); 
  
  // La comparación entre dos cadenas se hace carácter a carácter
  // de izquierda a derecha, y los más pequeños con los números
  // y a continuación las primeras letas del abecedario
  console.log('\'1dia\' <= \'adios\' // ', '1dia' <= 'adios'); 
  console.log('\'anda ya\' <= \'adios\' // ', 'anda ya' <= 'adios'); 
};

var typeofOperator = function(){
  var integer = 3,
      decimal = 3.14,
      boolean = true,
      string = 'hello',
      array = [1,2,3],
      obj = {};

  /*
      Función typeof para consultar el tipo de una variable
  */
  console.log('typeof ' + integer + ' === ', typeof integer);
  console.log('typeof ' + decimal + ' === ', typeof decimal);
  console.log('typeof ' + boolean + ' === ', typeof boolean);
  console.log('typeof \'' + string + '\' === ', typeof string);
  console.log('typeof [' + array + '] === ', typeof array);
  console.log('typeof ' + obj + ' === ', typeof obj);
};

var nullAndUndefined = function(){

  /*
    Valores null y undefined:
    - undefined: significa que una variable ha sido declarada
      pero no se le ha asignado ningun valor
    - null: es un valor
  */

  console.log('null === undefined // ', null === undefined);
  console.log('null == undefined // ', null == undefined);
  console.log('null === null // ', null === null);
};


var operators = {
  "Operadores matemáticos": mathOperators,
  "Operadores lógicos": logicOperators,
  "Operadores relacionales": relationalsOperators,
  "Operador typeof": typeofOperator,
  "Valores null y undefined": nullAndUndefined
};