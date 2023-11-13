

//* Funciones nativas

console.log('Log normal');
console.info('Log de tipo info');

console.error('Esto es un error');
console.warn('Esto es una advertencia');


// alert('Esta es una alerta');

// const isConfirm = confirm('¿Acepta los terminos y condiciones?');

// console.log(isConfirm);

const nombre = prompt('Ingrese su nombre');

// console.log( parseInt(edad) );

const saludo = "Hola " + nombre + ", como estás?";

const saludoTemplateLiterals = `
Hola 

${nombre}, 


como 


estás?`;

console.log(saludoTemplateLiterals);