'use strict';

var ifStructure = function(){
  var printMsg = true;
   
  if(printMsg) {
    console.log('Me imprimo -> true // ', printMsg);
  }

  if(printMsg == true) {
    console.log('Me imprimo -> true == true // ', printMsg == true);
  }
  
  var printMsg = false;
 
  if(!printMsg) {
    console.log('Me imprimo -> !false // ', !printMsg);
  }

  var isFirstMsg = true;
   
  if(!printMsg && isFirstMsg) {
    console.log('Me imprimo -> !false && true // ', !printMsg && isFirstMsg);
  }

  // Error común al principio:
  // Asignar (=) en lugar de comparar (==)
  var isFirstMsg = false;
  if(printMsg = true) {
    // Devuelve false
    console.log('Error común: false = true // ', printMsg = true)
  }

  var a = 18;
  console.log('a // ', a);
 
  if(a >= 18) {
    console.log('a >= 18 // ', a >= 18);
  }
  else {
    console.log('a < 18 //', a < 18);
  }

  var b = 20;
  console.log('b // ', b);

  if(b < 20) {
    console.log('b < 20 // ', b < 20);
  }
  else if(b < 40) {
    console.log('b < 40 // ', b < 40);
  }
  else {
    console.log('b > >= 40 // ', b >= 40);
  }
};

var nonBooleanValues = function(){
  /*
    ¿Como interpreta los valores no booleanos en un if?
  */
  var values = [-1, 0, 1, null, '', undefined, 'texto', {}, []];
  for(var i in values){
    if(values[i]){
      console.log('El valor: \'' + values[i] + '\' // ', 'true');
    }else{
      console.log('El valor: \'' + values[i] + '\' // ', 'false');
    }  
  }

  /* 
    Valores 'true': 
      - Numbers: cualquiera !== 0
      - String: cualquiera salvo la cadena vacía ('')
      - Objetos: todos, incluído el vacío ({})
    
    Valores 'false': 
      - Otros: undefined, null
  */
};

var forStructure = function(){
  /*
    for(initialization; condition; increment) { ... }
  */
  var i;
  var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
   
  // Establecemos de donde hasta donde y con qué incremento
  for(i = 0; i < days.length; i++) {
    console.log('days[' + i + '] === ', days[i]);
  }

  //Recorremos el objeto al completo
  for(i in days){
    console.log('days[' + i + '] === ', days[i]);
  }

};

var tryCatchStructure = function(){
  /*
    Capturar un error con:

    try{
      ....
    }catch(e){
    
    }

    Evita que se detenga la ejecución
  */
  try{
    console.log('invented // ', invented);
  }catch(e){
    console.log('e // ', e); 
  }
  console.log('Termino la ejecución',null);
}


var flow = {
  "Estructura if": ifStructure,
  "Valores lógicos de variables != boolean": nonBooleanValues,
  "Estructura for": forStructure,
  "Estructura try{...}catch(e){...}": tryCatchStructure
};