'use strict';

var spreadsheetID = '1wQkCTSzmV81XaPyKyioIKghqQgc_73exPmuDxI5vLAk',
    spreadsheetTAB = 1,
    spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/' + spreadsheetTAB + '/public/values';

// Pedimos un recurso por AJAX usando JSON
$.getJSON( spreadsheetURL + '?alt=json', function( data ) {
  //var items = [];
  console.log('Recuperamos usando JSON');
  console.log(data);
});

// Pedimos un recurso por AJAX usando JSONP (alternativa 2)
$.ajax({
  jsonp: 'callback',
  dataType: 'jsonp',
  url: spreadsheetURL + '?alt=json-in-script',

  success: function( response ) {
    console.log('Recuperamos usando JSONP');
    console.log(response);
  }
});

// Enlace para ver y editar la hoja
// http://bit.ly/1R9RKHz