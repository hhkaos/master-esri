'use strict';

// Recupero el elemento con id="myBtn"
var $myBtn = $('#btn');

// Le añado un listener (o disparador), cuando se haga click
$myBtn.click(function(){
  
  if($(this).hasClass('active')){
    // Si myBtn contiene la clase active la elimino
    $(this).removeClass('active');  
  }else{
    // En caso contrario la añado
    $(this).addClass('active');  
  }
});

/*
    Otro ejemplo
*/

// Selecciono la única imagen que hay en el DOM
var $ribbon = $('img')[0];

// Cuando paso el ratón por encima del elemento
$myBtn.mouseover(function(){
  console.log('Estoy encima -> oculto el lazo');
  $ribbon.style.visibility = 'hidden';
});

// Cuando dejo de estar encimar del elemento con el ratón
$myBtn.mouseout(function(){
  console.log('Ya no estoy encima -> muestro el lazo');
  $ribbon.style.visibility = 'visible';
});

/*
    Ejemplo completo
*/

// Le asignamos al elemento con id="btnLibraries"
// un disparador al hacer click
$('#btnLibraries').click(function() {
  // Si tiene clase hidden se la quito, sino se la pongo
  $('#libraries').toggleClass( 'hidden' );
});

// Igual con trends
$('#btnTrends').click(function() {
  $('#trends').toggleClass( 'hidden' );
});

// Asignamos a LOS elementos button que sean hijos de
// elementos que incluyan la clase btnClose un disparador
$('.btnClose button').click(function() {
  // Accedemos al elemento abuelo del botón y si tiene
  // la clase hidden se la quito, sino se la pongo
  $(this).parent().parent().toggleClass( 'hidden' );
});

/*
  Equivalencias entre JavaScript nativo y la biblioteca
  https://github.com/oneuijs/You-Dont-Need-jQuery
*/