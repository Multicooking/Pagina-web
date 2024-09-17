let carrito = [];
let total = 0;

function agregarAlCarrito(nombreProducto, precioProducto) {
    // Agregar el producto al carrito
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    actualizarCarrito();
}

function actualizarCarrito() {
    const contenidoCarrito = document.getElementById('contenidoCarrito');
    const totalCarrito = document.getElementById('totalCarrito');

    contenidoCarrito.innerHTML = ''; // Limpiar carrito antes de agregar nuevos elementos
    total = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement('p');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        contenidoCarrito.appendChild(item);
        total += producto.precio;
    });

    totalCarrito.textContent = total.toFixed(2);
}
