'use strict';

// Recupero el elemento con id="myBtn"
var myBtn = document.getElementById('btn');

// Le añado un listener (o disparador), cuando se haga click
myBtn.addEventListener('click', function(){
  
  if(myBtn.classList.contains('active')){
    // Si myBtn contiene la clase active la elimino
    myBtn.classList.remove('active');  
  }else{
    // En caso contrario la añado
    myBtn.classList.add('active');  
  }
});

/*
    Otro ejemplo
*/

// Selecciono la única imagen que hay en el DOM
var ribbon = document.querySelectorAll('img')[0];

// Cuando paso el ratón por encima del elemento
myBtn.addEventListener('mouseover', function(){
  console.log('Estoy encima -> oculto el lazo');
  ribbon.style.visibility = 'hidden';
});

// Cuando dejo de estar encimar del elemento con el ratón
myBtn.addEventListener('mouseout', function(){
  console.log('Ya no estoy encima -> muestro el lazo');
  ribbon.style.visibility = 'visible';
});

/*
  Existen muchos otros eventos.
  Lista completa de eventos https://developer.mozilla.org/en-US/docs/Web/Events
*/