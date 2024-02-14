//Mas iteradores.

const ciudades = ['Londres', 'Madrid', 'New York', 'Paris'];
const ordenes = new Set([123,102,504, 486]);
const datos = new Map();
datos.set('nombre', 'Juan');
datos.set('prodesion', 'Desarrollador');

//Entries.
//Agrega una llave si no existe o muestra llave y valor.
for (let entry of ciudades.entries()) {
  console.log(entry);
};

for (let entry of ordenes.entries()) {
  console.log(entry);
}
for (let entry of datos.entries()) {
  console.log(entry);
}

//Values.
//Itera los valores.
for (let value of ciudades.values()) {
  console.log(value);
}
for (let value of ordenes.values()) {
  console.log(value);
}
for (let value of datos.values()) {
  console.log(value);
}

//Keys.
//Imprime las llaves, si no existen solo toma valores y los toma como llaves.
for (let key of ciudades.keys()) {
  console.log(key);
}
for (let key of ordenes.keys()) {
  console.log(key);
}
for (let key of datos.keys()) {
  console.log(key);
}

//Default.
for (const ciudad of ciudades) {
  console.log(ciudad);
}