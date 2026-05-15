// Agregar productos al carrito
function agregar(nombre, precio) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Buscar si el producto ya existe
    let productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {

        // Aumentar cantidad
        productoExistente.cantidad += 1;

    } else {

        // Crear nuevo producto
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    // Guardar carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));
	
    // Actualizar total
    actualizarContador();

    alert(nombre + " agregado al carrito");
}

// Mostrar total del carrito
function actualizarContador() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    let contador = document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = total;
    }
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", actualizarContador);