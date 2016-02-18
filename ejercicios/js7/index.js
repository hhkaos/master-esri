'use strict';

/*
  Introduce un disparador cuando hagas clic en el botón 'Acercar a Madrid'
  var featureLayer = new FeatureLayer(URL_DEL_FEATURE);
  map.addLayer(featureLayer);
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
        
