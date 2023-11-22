// for (inicio; condicionFinal; incremento) {
// Bloque de codigo
// }

let frutas = [
    'Manzanas', // indice 0
    'Naranjas', // indice 1
    'Peras', // Indice 2
    'Kiwis',
    'Anana',
    'Mango'
];

//* Recorrer con ciclo for
for (let indice = 0; indice < frutas.length; indice++) {
    // console.log(frutas[indice]);
}

//* Recorrer con forEach

function imprimirElemento(elemento) {
    console.log(`Elemento: ${elemento}`)
}

// frutas.forEach(function (elemento, indice) {
//     console.log(`Indice: ${indice}. Elemento: ${elemento}`);
// });

// frutas.forEach(elemento => console.log(`Elemento: ${elemento}`));

frutas.forEach(imprimirElemento);