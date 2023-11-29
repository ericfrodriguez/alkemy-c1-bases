const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');

const mostrarDatos = () => {
    console.log(inputNombre.value);
    console.log(inputEmail.value);
    // console.log('Click!!!');
}

/* 
ID: #mi-id
CLASE: .mi-clase
ETIQUETA: div, h1, p, a, img
COMBINACIONES: div .mi-clase
*/

//* querySelector

const parrafoAzul = document.querySelector('div p.bg-blue');
// console.log(parrafoAzul.innerText);

//* querySelectorAll
const parrafosAzules = document.querySelectorAll('div p.bg-blue');
console.log(parrafosAzules);

parrafosAzules.forEach((parrafo) => {
    parrafo.classList.add('text-xl');
    parrafo.innerText = 'El mismo parrafo';
});