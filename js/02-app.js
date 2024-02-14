//WeakSets.
//Solo reciben objetos.
//No son iterables.
//No podemos conocer su tamaño.
const weakset = new WeakSet();

const cliente = {
  name: 'Juan',
  saldo: 100,
};

weakset.add(cliente);

console.log(weakset);