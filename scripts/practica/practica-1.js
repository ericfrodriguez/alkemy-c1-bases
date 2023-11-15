
const nombre = prompt('Ingrese su nombre');
let isAccept = false;

if (nombre.length) { // Si es 0 se evalua como false. NO EXISTE
    isAccept = confirm('Acepta los terminos y condiciones de la web');
} else {
    console.log('Ingrese al menos un caracter');
}

const mensaje = isAccept
    ? 'Aceptado con exito'
    : 'Por favor acepta los terminos y condiciones';

console.log(mensaje);

