'use strict';

var eventClickWithJquery = function(){
  // Recupero el elemento con id="myBtn"
  var $myBtn = $('#header');

  // Le añado un listener (o disparador), cuando se haga click
  $myBtn.click(function(){
    
    if($myBtn.hasClass('active')){
      // Si myBtn contiene la clase active la elimino
      $(this).removeClass('active');  
    }else{
      // En caso contrario la añado
      $(this).addClass('active');  
    }
  });
};


var eventMouseWithJquery = function(){

  var $header = $('#header');
  var $btns = $('.btn');

  // Cuando paso el ratón por encima del elemento
  $header.mouseover(function(){
    console.log('Estoy encima -> oculto el lazo\n');
    $btns.css('visibility', 'hidden')
  });

  // Cuando dejo de estar encimar del elemento con el ratón
  $header.mouseout(function(){
    console.log('Ya no estoy encima -> muestro el lazo\n');
    $btns.css('visibility', 'visible');
  });
};


var jqueryAjax = function(){
  var spreadsheetID = '1wQkCTSzmV81XaPyKyioIKghqQgc_73exPmuDxI5vLAk',
      spreadsheetTAB = 1,
      spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/' + spreadsheetTAB + '/public/values';

  // Pedimos un recurso por AJAX usando JSON
  $.getJSON( spreadsheetURL + '?alt=json', function( data ) {
    var rows = data.feed.entry;

    for(var r in rows){
      console.log('row['+ r +'].gsx$nombre.$t = ', data.feed.entry[r].gsx$nombre.$t);
    }
    
    console.log('\ndata === ', data);
  });

  // Pedimos un recurso por AJAX usando JSONP (alternativa 2)
  $.ajax({
    jsonp: 'callback',
    dataType: 'jsonp',
    url: spreadsheetURL + '?alt=json-in-script',

    success: function( response ) {
      // ...
    }
  });

  // Enlace para ver y editar la hoja
  // http://bit.ly/1R9RKHz
};

