//* createElement, appendChild

// Creacion de mi elemento
const nuevoParrafo = document.createElement('p');

// Agregar contenido
nuevoParrafo.innerText = 'Este es un nuevo parrafo';

// Modificar elemento
nuevoParrafo.className = 'bg-red text-xl';

const contenedor = document.getElementById('mi-id');

contenedor.appendChild(nuevoParrafo);

//* removeChild
const lorem = document.getElementById('p-lorem');

contenedor.removeChild(lorem);

//* remove
const primerParrafo = document.getElementById('text-7');

primerParrafo.remove();
