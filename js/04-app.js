//WeakMaps.

const producto = {
  idProd: 10,
}

const prueba = new WeakMap();

prueba.set(producto, 'Monitor');
console.log(prueba);

console.log(prueba.has(producto));
console.log(prueba.get(producto));

//No son iterables, no se conoce el tamaño.