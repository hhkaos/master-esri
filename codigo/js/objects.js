// Create a new empty object
var newEmptyObject = function(){
  var obj = {};
  console.log('obj === ', obj);
};

var nonEmptyObject = function(){
  // Definimos un objeto con una propiedad 'name'
  // establecida con el valor 'Luis'
  var luis = {
    "name": "Luis"
  };
  
  console.log('luis === ', luis);

  // Hay dos formas de acceder a una propiedad
  console.log('luis.name === ', luis.name);  
  console.log('luis[\'name\'] === ', luis['name']);
};

var addObjProp = function(){
  var luis = {};
  
  // Hay dos formas
  luis['last-name'] = 'Trueba';
  luis.city = 'Granada';
  
  console.log('luis === ', luis);
};

var complexObject = function(){
  var luis = { "name": "Luis González" },
      carlos = { "name": "Carlos Mota" };
      
  var me = {
    "name": "Raúl",
    "age": 31,
    "friends": [luis, carlos],
    "address": {
      "street": "Avenida América",
      "number": 45,
      "city": "Madrid",
      "postal-code": 28002
    }
  };

  console.log('me === ', me);
  console.log('me.name === ', me.name);
  console.log('me.friends[0] === ', me.friends[0]);
  console.log('(me.friends[0]).name === ', (me.friends[0]).name);
  console.log('me.address.street === ', me.address.street);
  console.log('me.address[\'postal-code\'] === ', me.address['postal-code']);
};

var forInObj = function(){
  var luis = { "name": "Luis González" },
      carlos = { "name": "Carlos Mota" };
      
  var me = {
    "name": "Raúl",
    "age": 31,
    "friends": [luis, carlos],
    "address": {
      "street": "Avenida América",
      "number": 45,
      "city": "Madrid",
      "postal-code": 28002
    }
  };

  for(var property in me) {    
    // Este if evita que el bucle acceda a variables del navegador
    if (me.hasOwnProperty(property)) {
        console.log('me[' + property + '] = ', me[property]);
        // me.property se puede usar ya que en lugar de
        // tomar el valor de la variable, JavaScript
        // buscaría una propiedad llamada 'property'
    }else{
      console.log('Esta propiedad no es mia, me[' + property + '] = ', me[property]);
    }
  }
}

var newObjContructor = function(){
  // Creamos una funcion EsriMap que se asigna propiedades
  var EsriMap = function(obj){
    
    if(obj && obj.basemap){
      // Si recibo un objeto y tiene una propiedad basemap
      this.basemap = obj.basemap;
    }else{
      // Si no recibo un objeto o no tiene una propiedad basemap
      this.basemap = 'satellite';
    }

    // Establezco una propiedad setCenter que contiene una funcion
    // y que cambia una propiedad de la funcion
    this.setZoom = function(val){
      this.zoom = val;
    };
  };

  // Con new creamos una variable de tipo myMap
  var myMap = new EsriMap({
    'basemap': 'topo'
  });
  var myMap2 = new EsriMap();

  console.log('myMap = ', myMap);
  console.log('myMap2 = ', myMap2);
   
  console.log ('\n----myMap2.setZoom(12);----','\n'); 
  myMap2.setZoom(12);
  console.log('myMap = ', myMap);
  console.log('myMap2 = ', myMap2);
};