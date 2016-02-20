var ifStructure = function(){
  var printMsg = true;
   
  if(printMsg) {
    console.log('Hola Mundo');
  }

  if(printMsg == true) {
    console.log('Hola Mundo');
  }
  
  var printMsg = false;
 
  if(!printMsg) {
    console.log('Me imprimo');
  }

  var isFirstMsg = true;
   
  if(!printMsg && isFirstMsg) {
    console.log('Mi primer mensaje');
  }

  // Error - Se asigna el valor 'false' a la variable
  if(printMsg = false) {
    //...
  }

  var age = 18;
 
  if(age >= 18) {
    console.log('Eres mayor de edad');
  }
  else {
    console.log('Eres menor de edad');
  }

  if(age < 18) {
    console.log('Eres menor de edad');
  }
  else if(age < 30) {
    console.log('Aún eres joven');
  }
  else {
    console.log('La sabiduría la da la experiencia');
  }
};

var nonBooleanValues = function(){
  /*
    ¿Como interpreta los valores no booleanos en un if?
  */
  var values = [-1, 0, 1, null, '', undefined, 'texto', {}, []];
  for(var i in values){
    if(values[i]){
      console.log('El valor: "' + values[i] + '" === true\n');
    }else{
      console.log('El valor: "' + values[i] + '" === false\n');
    }  
  }
};

var forStructure = function(){
  /*
    for(initialization; condition; increment) {
      
    }
  */

  var i;
  var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
   
  for(i = 0; i < days.length; i++) {
    alert(days[i]);
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
    console.log('invented = ', invented);
  }catch(e){
    console.log('e = ', e); 
  }
  console.log('Termino la ejecución');
}