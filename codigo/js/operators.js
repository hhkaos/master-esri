var mathOperators = function(){
  // Asignación (=)
  var pi = 3.1416;

  // Incremento (++) y decremento (--)
  var x = 1; y = 4;
  x++;  // x = 2
  y--;  // y = 3

  // Suma (+) y resta (-)
  var x = 2, y = 3, z;
  z = x + y;  // z = 5;
  z = x - y;  // z = -1;

  // División (/) y multiplicación (*)
  var x = 4, y = 2, z;
  z = x / y;  // z = 2;
  z = x * y;  // z = 8;

  // Abreviaciones
  var x = 5;
  x += 3;  // x = x + 3 => 8
  x -= 1;  // x = x - 1 => 4
  x *= 2;  // x = x * 2 => 10
  x /= 5;  // x = x / 5 => 1
  
};

var logicOperators = function(){
  /************************************
    Operador negación
  ************************************/
  var visible = true;
  var hidden = false;
  !visible;  // Devuelve "false" y no "true"
  !hidden;

  /************************************
    Operador AND (&&)
  ************************************/
  var x = true;
  var y = false;
  result = x && y; // result = false
   
  x = true;
  y = true;
  result = x && y; // result = true

  /************************************
    Operador OR (||)
  ************************************/
  var x = true;
  var y = false;
  result = x || y; // result = true
   
  x = false;
  y = false;
  result = x || y; // result = false
};

var relationalsOperators = function(){
  var even = 2;
  var odd = 5;
  result = even > odd; // result = false
  result = even < odd; // result = true
   
  a = 5;
  b = 5;
  result = a >= b; // result = true
  result = a <= b; // result = true
  result = a == b; // result = true
  result = a != b; // result = false

  /* 
   Los operadores relacionales también se pueden
   utilizar con variables de tipo cadena de texto:
  */
  var txt1 = "hola";
  var txt2 = "hola";
  var txt3 = "adios";
   
  result = txt1 == txt3; // result = false
  result = txt1 != txt2; // result = false
  result = txt3 >= txt3; // result = false
};

var typeofOperator = function(){
  var integer = 3,
      float = 3.14,
      array = [1,2,3],
      boolean = true,
      string = 'hello',
      obj = {};

  /*
      Función typeof para consultar el tipo de una variable
  */
  console.log('typeof integer === ', typeof integer);
  console.log('typeof float === ', typeof float);
  console.log('typeof boolean === ', typeof boolean);
  console.log('typeof string === ', typeof string);
  console.log('typeof array === ', typeof array);
  console.log('typeof obj === ', typeof obj);
};

var nullAndUndefined = function(){

  /*
    Valores null y undefined:
    - undefined: significa que a una variable ha sido declarada pero no se le ha asignado ningun valor
    - null: es un valor
  */

  console.log('null === undefined -->', null === undefined); // false
  console.log('null == undefined -->', null == undefined); // true
  console.log('null === null -->', null === null); // true
};