'use strict';

$('#btnHelp').click(function(){
  $('#help').toggleClass('hidden');
});

/*
  Recorre el array y añade los features al mapa.

  Para añadir una capa se hace así:
  var featureLayer = new FeatureLayer(url_layer);
  map.addLayer(featureLayer);

  Opcional:
  Añade al elemento #features (que es un <ul>) los
  un elemento <li> con el nombre (name) de cada capa
*/
var features = [{
  'name': 'Estaciones de metro',
  'url': 'http://services1.arcgis.com/8MFSmLQvO5AV2Ytj/arcgis/rest/services/Estaciones_de_Metro_Madrid/FeatureServer/0'
},{
  'name': 'Líneas de metro',
  'url': 'http://services3.arcgis.com/qJLpaK6NOU9IJKjD/arcgis/rest/services/L%C3%ADneas_de_Metro_de_Madrid/FeatureServer/0'
}];



/*
 Recupera los datos del spreadsheet y añade al elemento con id="authors"
 una lista con los nombres de los autores concatenada por comas.
 https://spreadsheets.google.com/feeds/list/1wQkCTSzmV81XaPyKyioIKghqQgc_73exPmuDxI5vLAk/1/public/values?alt=json
*/
        
