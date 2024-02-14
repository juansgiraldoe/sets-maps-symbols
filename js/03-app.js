//Maps.
//Listas ordenadas en llave y valor. La llave y el valor pueden ser cualquier tipo de dato.

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

//Metodos para map.
cliente.delete(true)
console.log(cliente.size);
console.log(cliente.has('nombre'));
//Traer un valor.
console.log(cliente.get('nombre'));
cliente.clear();

//Podemos crear maps con valores.

const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'No definido.']]);
paciente.set('Dr', 'Dr Asignado');
paciente.set('nombre', 'usuario');//Reescribir un valor.
console.log(paciente);

//Son iterables.
paciente.forEach( (datos, i) => console.log(i));