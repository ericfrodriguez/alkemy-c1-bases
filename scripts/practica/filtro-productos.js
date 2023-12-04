// 1. Tener una lista de productos
// 2. Mostrar todos los productos
// 3. Mostrar los productos filtrados por el campo de busqueda

const productos = [
    {
        id: 1,
        nombre: 'Remera S',
        precio: 50,
    },
    {
        id: 2,
        nombre: 'Remera L',
        precio: 75,
    },
    {
        id: 3,
        nombre: 'Remera XL',
        precio: 150,
    },
    {
        id: 4,
        nombre: 'Jean 42',
        precio: 25,
    },
    {
        id: 5,
        nombre: 'Jean 44',
        precio: 45,
    },
    {
        id: 6,
        nombre: 'Gorra',
        precio: 125,
    },
];

const contenedor = document.getElementById('contenedor-productos');
const inputBusqueda = document.getElementById('buscar');

function renderizarProductos(lista) {
    contenedor.innerHTML = '';

    const contenido = [];
    
    lista.forEach((producto) => {
        const parrafo = document.createElement('p');
        parrafo.innerText = producto.nombre;
    
        contenido.push(parrafo);
    });
    
    contenedor.append(...contenido);
}

inputBusqueda.addEventListener('input', (evento) => {
    const productosFiltrados = productos.filter((producto) => {
        return producto.nombre.toLowerCase().includes(evento.target.value.toLowerCase());
    });

    renderizarProductos(productosFiltrados);
});



// Tarea de renderizar

