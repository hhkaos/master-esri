'use strict';

console.log('--------------------------------------');
console.log('Definir un objeto');
console.log('--------------------------------------');

var obj = {};
console.log('obj = ', obj);

// Definir un objeto no vacio
var luis = {
  'name': 'Luis'
};

console.log('--------------------------------------');
console.log('Añadir una propiedad a un objeto');
console.log('--------------------------------------');

luis['last-name'] = 'Trueba';

console.log('obj = ', obj);

// Acceder al valor
console.log('luis.name = ' + luis.name);
console.log('luis[\'name\'] = ' + luis['name']);

// ************************************************************************
  
console.log('--------------------------------------');
console.log('Definir un objeto mas complejo');
console.log('--------------------------------------');

var me = {
  'name': 'Raul',
  'age': 31,
  'friends': [luis],
  'address': {
    'street': 'Avenida America',
    'number': 45,
    'city': 'Madrid',
    'postal-code': 28002
  }
};

console.log('me = ', me);
console.log('me.name = ' + me.name);
console.log('me.friends[0] = ' + me.friends[0]);
console.log('(me.friends[0]).name = ' + (me.friends[0]).name);
console.log('me.address.street = ' + me.address.street);
console.log('me.address[\'postal-code\'] = ' + me.address['postal-code']);

// ************************************************************************
  
console.log('--------------------------------------');
console.log('Recorrer un objeto con un bucle');
console.log('--------------------------------------');

for(var property in me) {    
    if (me.hasOwnProperty(property)) {
        console.log('me[' + property + '] = ' + me[property]);
    }
}