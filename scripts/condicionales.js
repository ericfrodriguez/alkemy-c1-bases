
const edad = 19;

// if(edad >= 18) {
//     console.log('Eres mayor de edad');
// } else if(edad >= 16) {
//     console.log('Te falta poco para los 18 años :)');
// } else {
//     console.log('Espera a tener 18 años o mas :(');
// }

// const mensaje = edad >= 18
//     ? 'Eres mayor de edad'
//     : 'Espera a tener 18 años o mas :('

// console.log(mensaje);

switch (edad) {
    case 18:
        console.log('Tienes 18 años');
        break;
    case 19:
        console.log('Tienes 19 años');
        break;
    case 20:
        console.log('Tienes 20 años');
        break;

    default:
        console.log('No tienes una edad permitida')
        break;
}

// console.log('Otra accion...');
// console.log('Otra accion...');
// console.log('Otra accion...');
// console.log('Otra accion...');
// console.log('Otra accion...');


