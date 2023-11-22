let frutas = [
    'Manzanas', 
    'Naranjas', 
    'Peras',
    'Kiwis',
    'Anana',
    'Mango'
];

//* Obtener longitud de un array (.length)
const cantidadFrutas = frutas.length;
// console.log(cantidadFrutas);

//* Agregar elementos al final (.push())
// console.log(frutas);

// frutas.push('Kiwis', 'Anana');
// console.log(frutas);

//* Agregar elementos al principio (.unshift())
// console.log(frutas);

// frutas.unshift('Kiwis', 'Anana');
// console.log(frutas);

//! Eliminar el ultimo elemento (.pop())
// console.log(frutas);
// let ultimoElemento = frutas.pop();

// console.log(frutas);
// console.log(ultimoElemento);

//! Eliminar el primer elemento (.shift())
// console.log(frutas);

// const primerElemento = frutas.shift();
// console.log(frutas);
// console.log(primerElemento);

//! Eliminar varios elementos de un array (.splice())

// console.log(frutas);

// frutas.splice(0, 2); // Elimina los 2 primeros elementos
// console.log(frutas);}

//* Realizar busqueda del indice de un elemento (.indexOf())

// console.log(frutas);

// const indice = frutas.indexOf('Zanahorias');

// console.log(indice);

//* Filtrar elementos de un array a partir de una condicion (.filter())

console.log(frutas);

const precios = [50, 150, 750, 1500, 2350, 4000];

// const preciosFiltrados = precios.filter(function (elemento) {
//     return elemento < 800;
// });

const preciosFiltrados = precios.filter(elemento => elemento < 800);

console.log(preciosFiltrados);