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

const persona = {
    nombre: 'Nico',
    edad: 24,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

for (let clave in persona) {
    console.log(persona[clave]);
}