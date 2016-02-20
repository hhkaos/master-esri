'use strict';

var declareVariables = function(){
  // Declaramos una variable
  var counter;

  // Declaramos dos variables: map y widget
  var map, widget;

  // El primer carácter no puede ser un número.
  // Sólo puede estar formado por letras, números y los símbolos: 
  // dólar ($) y guión bajo (_).
  var $num1;
  var _$name;
  var $$$otherNumber;
  var $_a__$4;

  /*
    Palabras reservadas:
    abstract, boolean, break, byte, case, catch, char, class, 
    const, continue, debugger, default, delete, do, double, else, 
    enum, export, extends, false, final, finally, float, for, 
    function, goto, if, implements, import, in, instanceof, int, 
    interface, long, native, new, null, package, private, 
    protected, public, return, short, static, super, switch, 
    synchronized, this, throw, throws, transient, true, try, 
    typeof, var, volatile, void, while, with
  */
};

var variableTypes = function(){
  // Númericas (integer & floats)
  // -----------------------------
  var counter = 16;   // variable tipo entero
  var price = 19.99;  // variable tipo decimal

  // Cadenas de texto (strings)
  // -----------------------------
  var msg = 'Bienvenido a nuestro sitio web';
  var txt = 'Una frase con "comillas dobles" dentro';
  var txt = 'Una frase con \'comillas simples\' dentro';

  // Colecciones (arrays)
  // -----------------------------
  // Definiendo los días de la semana en cadenas de texto
  var day1 = 'Lunes', day2 = 'Martes', /*..., */ day7 = 'Domingo';

  // Definición equivalente en un Array
  var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  console.log('days[0] === ', days[0]);
  console.log('days[1] === ', days[1]);
  console.log('days[6] === ', days[6]);

  // Booleanos (boolean)
  // -----------------------------
  var valid = false;
  var prime = true;
  console.log('valid === ', valid);
  console.log('prime === ', prime);
};

var methodsTypes = function(){
  /************************************
    Para trabajar con Number(s)
  ************************************/
  var n = 231.8273;
  n.toFixed(2); // 231.82

  /************************************
    Para trabajar con Strings
  ************************************/
  var hello = 'Hola ';
  var world = 'Mundo!';

  // Para contar el número de caracteres
  console.log('hello.length === ',hello.length); // 5

  // Para concatenar cadenas
  console.log(hello + ' ' + world); // Hola Mundo!
  console.log(hello.concat(' ' + world));  // Hola Mundo!

  // Para busacar subcadenas en una cadena
  var pos = hello.indexOf('a'); // pos = 3
  var pos = hello.indexOf('b'); // pos = -1

  /************************************
    Para trabajar con Array(s)
  ************************************/
  //Y otros métodos: lastIndexOf, substring, split, etc.
  var fruits = ['banana', 'melon', 'orange'];

  // Para contar
  var n = fruits.length; // n = 3

  // Para añadir elementos
  fruits.push('apple', 'peach'); // fruits = ['banana', 'melon, 'orange', 'apple', 'peach']

  // contact, join, pop, shift, Y otras como: unshift, reverse.
};