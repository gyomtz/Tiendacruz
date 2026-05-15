// Mostrar carrito
function mostrarCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let caja = document.querySelector(".carrito-box");

    // Si está vacío
    if (carrito.length === 0) {
        caja.innerHTML = "<h2>🛒 Carrito vacío</h2>";
        return;
    }

    let html = "<h2>🛒 Tu carrito</h2>";

    let total = 0;

    carrito.forEach(function(producto, index) {

        let subtotal = producto.precio * producto.cantidad;

        total += subtotal;

        html += `
            <div class="card">

                <h3>${producto.nombre}</h3>

                <p>Precio: $${producto.precio}</p>

                <p>Cantidad: ${producto.cantidad}</p>

                <p>Subtotal: $${subtotal}</p>

                <div class="botones-carrito">

                    <button onclick="sumarProducto(${index})">
                        ➕
                    </button>

                    <button onclick="restarProducto(${index})">
                        ➖
                    </button>

                    <button onclick="eliminarProducto(${index})">
                        🗑
                    </button>

                </div>

            </div>
        `;
    });

    html += `<h2>Total: $${total}</h2>`;

    html += `
        <button onclick="vaciarCarrito()" class="btn-vaciar">
            Vaciar carrito
        </button>
    `;

    caja.innerHTML = html;
}

// SUMAR
function sumarProducto(index) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito[index].cantidad += 1;

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();
}

// RESTAR
function restarProducto(index) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito[index].cantidad > 1) {

        carrito[index].cantidad -= 1;

    } else {

        carrito.splice(index, 1);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();
}

// ELIMINAR PRODUCTO
function eliminarProducto(index) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();
}

// VACIAR CARRITO
function vaciarCarrito() {

    localStorage.removeItem("carrito");

    actualizarContador();

    mostrarCarrito();
}

// Ejecutar
mostrarCarrito();