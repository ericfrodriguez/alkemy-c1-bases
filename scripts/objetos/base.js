const auto = {
    color: 'Rojo',
    marca: 'Toyota',
    modelo: 'Prius'
}

const avion = {
    cantidadDeAsientos: 60,
}

// this == carrito
const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}], // Propiedad
    agregarProductos: function() { // Metodo
        console.log('Se agregaron 5 productos');
    },
    eliminarProductos: function() {
        console.log('Se eliminaron 2 productos');
    },
    obtenerCantidad: function() {
        console.log(`Cantidad de productos: ${this.cantidad}`);
    },
}

// this == persona
const persona = {
    nombre: 'Nico',
    edad: 24,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

//* Creacion de objeto con funcion constructora Object()

const usuario = new Object();

// Si no existe la propiedad, la crea
// Si existe, cambia el valor
usuario.nombre = 'Leo';
usuario.edad = 20;

//* Acceder a propiedades. Notacion corchetes objeto["propiedad"]

const propiedad = 'edad';

// console.log(usuario.nombre);
// console.log(usuario[propiedad]);

//! Eliminar propiedades de objetos

delete usuario.nombre; // Elimina la propiedad nombre del objeto usuario.

