//Symbols.

const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
  console.log('Son iguales.');
}else{
  console.log('No son iguales.');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido como llaves dl objeto.
persona[nombre] = 'Juan';
persona[apellido] = 'Giraldo';
persona.tipo = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

//Las propiedades que usan symbol no son iterables.

//Definir una descripcion del Symbol.
const nombreCliente = Symbol('Nombre del cliente.');

const cliente = {};
cliente[nombreCliente] = 'Perdo';
console.log(cliente);
console.log(cliente[nombreCliente]);//Acceder al valor.
console.log(nombreCliente);//Mostrar la descripcion del Symbol.