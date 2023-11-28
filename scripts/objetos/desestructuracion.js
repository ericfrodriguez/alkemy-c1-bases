const carrito = {
    cantidad: 80,
    productos: [{}, {}, {}],
    agregarProductos: function () {
        console.log('Se agregaron 5 productos');
    },
    eliminarProductos: function () {
        console.log('Se eliminaron 2 productos');
    },
    obtenerCantidad: function () {
        console.log(`Cantidad de productos: ${this.cantidad}`);
    },
}

const {
    cantidad,
    productos,
    agregarProductos,
    obtenerCantidad } = carrito;

// const cantidad = carrito.cantidad;
// const productos = carrito.productos;
// const agregarProductos = carrito.agregarProductos;
// const obtenerCantidad = carrito.obtenerCantidad;

console.log(cantidad);
console.log(productos);
agregarProductos();
obtenerCantidad();