//Sets en JS.
//Crea una lista de valores sin duplicados.

const carrito = new Set();
//Set Methods.

//Agregar elementos.
carrito.add('Camisa');
carrito.add('Guitarra');
carrito.add('CD');
//Los duplicados no son agregados.

//Borrar elementos.
carrito.delete('CD')

console.log(carrito);


//Saber el tamaño.
console.log(carrito.size);
//Saber si incluye un valor
console.log(carrito.has('CD'));

//Eliminar todo el Set.
carrito.clear();


//Son iterables.
carrito.forEach( item =>console.log(item));