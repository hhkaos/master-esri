'use strict';

var accessDOMElements = function(){
  // Acceder a un elemento del DOM usando su ID
  var header = document.getElementById('header');
  console.log('header = ', header);

  // Acceder a un elemento usando la clase del elemento
  var backClassElement = document.getElementsByClassName('btn');
  console.log('backClassElement = ', backClassElement);

  // Acceder a un elemento usando el nombre del elemento
  var pElements = document.getElementsByTagName('p');
  console.log('pElements = ', pElements);

  // Accedo a los h1 que sean hijos de header
  var h1Children = document.querySelectorAll('#header h1');
  console.log('h1Children = ', h1Children);
};

var accessModifyAttrs = function(){
  // Acceder a un atributo
  var codeElement = document.getElementsByClassName('prettyprint');
  var getAttr = codeElement[0].getAttribute('class');
  console.log('codeElement[0].getAttribute(\'class\') = ', getAttr);

  // Modificar un atributo de un elemento
  var header = document.getElementById('header');
  header.style = 'color: red';
  console.log('header = ', header.getAttribute('style'));

  // Modificar el contenido de un elemento
  header.innerHTML = 'SNIPPETS';
  console.log('header.innerHTML = ', header.innerHTML);

  // Creamos un elemento del DOM
  var paragraph = document.createElement('p');
  console.log('new paragraph = ', paragraph);

  // Eliminamos la cabecera de la página (id="header")
  var header = document.getElementById('header');
  console.log('before removeChild = ', header);
  header.parentNode.removeChild(header);
  var header = document.getElementById('header');
  console.log('after removeChild = ', header);
};

var windowObj = function(){
  /*
    El objeto window en JavaScript es donde se almacena todo:
    'document', las variables globales (con ámbito global), etc.

    Se pueden acceder a las propiedades de windows sin necesidad
    de poner el nombre delante, por ejemplo:
    window.document === document
  */
  console.log('window = ', window);
  
  // Incluye funciones para imprimir en mensaje en la consola
  console.log('window.console = ', window.console);
  
  // Incluye funciones para gestionar el DOM, URL, 
  console.log('window.document = ', window.document);
  
  // Nos permite construir objetos para hacer peticiones AJAX
  console.log('window.XMLHttpRequest = ', window.XMLHttpRequest);

  // Ejecutamos setInterval cada 3 segundos
  setInterval(function(){ console.log('','setInterval'); }, 3000);

  // Ejecutamos setInterval cada 5 segundos
  setTimeout(function(){ console.log('','setTimeout'); }, 5000);
}