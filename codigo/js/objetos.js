'use strict';

// Definir un objeto vacio
var obj = {};
console.log('obj = ' + obj);

// Definir un objeto no vacio
var luis = {
  'name': 'Luis'
};

// Acceder al valor
console.log('luis.name = ' + luis.name);
console.log('luis[\'name\'] = ' + luis['name']);

// Definir un objeto mas complejo
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

console.log('me.name = ' + me.name);
console.log('me.friends[0] = ' + me.friends[0]);
console.log('(me.friends[0]).name = ' + (me.friends[0]).name);
console.log('me.address.street = ' + me.address.street);
console.log('me.address[\'postal-code\'] = ' + me.address['postal-code']);