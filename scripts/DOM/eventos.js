// function mostrarDatos() {

// }

const boton = document.querySelector('#mi-boton');
const boton2 = document.querySelector('#mi-boton2');


//* Evento click
boton.addEventListener('click', (evento) => {
    console.log('Click!');
    // evento.target.innerText = 'Nuevo texto';
    console.dir(evento.target.innerText);
});

// boton.addEventListener('click', () => {
//     console.log('Otra tarea...');
// });

// boton.onclick = function () {
//     console.log('Click!');
// }

// boton.onclick = function() {
//     console.log('Otra tarea...');
// }

//* Doble click (dblclick)
boton2.addEventListener('dblclick', () => {
    console.log('Doble click!!!');
});

//* Movimiento del mouse (mousemove)

const contenedorMouse = document.getElementById('mouse-events');

contenedorMouse.addEventListener('mousemove', (evento) => {
    // console.log('El mouse se mueve.');
    // console.log(evento.x);
});

//* Mouse down
contenedorMouse.addEventListener('mousedown', () => {
    contenedorMouse.innerText = 'Click presionado';

    contenedorMouse.classList.remove('bg-blue');
    contenedorMouse.classList.add('bg-red');
});

//* Mouse up
contenedorMouse.addEventListener('mouseup', () => {
    contenedorMouse.innerText = 'Click arriba';

    contenedorMouse.classList.remove('bg-red');
    contenedorMouse.classList.add('bg-blue');
});

//* Key down
const inputNombre = document.getElementById('nombre');

inputNombre.addEventListener('keydown', () => {
    console.log('Tecla presionada.');
});

//* Key up

inputNombre.addEventListener('keyup', () => {
    console.log('Tecla arriba.');
});

//* Evento change

const inputBusqueda = document.getElementById('buscar');

inputBusqueda.addEventListener('change', (evento) => {
    // console.log('Change: ', evento.target.value);
});

//* Evento input

inputBusqueda.addEventListener('input', (evento) => {
    // console.log('Input: ',evento.target.value);
});

//* Evento submit

const formulario = document.getElementById('form');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    console.log(inputBusqueda.value);
});