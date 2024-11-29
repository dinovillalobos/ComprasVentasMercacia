// Variables
const carrito = document.getElementById("carrito"),
      listaProductos = document.getElementById("lista-productos"),
      contenedorCarrito = document.querySelector('.buy-card .lista_de_productos'),
      vaciarCarritoBtn = document.querySelector('#vaciar_carrito');

let articulosCarrito = [];

// Registrar los Event Listeners
registrarEventsListeners();

function registrarEventsListeners() {
    // Cargar productos del localStorage al iniciar
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML(); // Mostrar los productos almacenados
    });

    // Cuando le damos click a "Agregar al carrito"
    listaProductos.addEventListener('click', agregarProducto);

    // Eliminar curso del carrito
    carrito.addEventListener('click', eliminarProducto);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', e => {
        articulosCarrito = [];
        limpiarHTML(); // Limpiar el HTML
        sincronizarStorage(); // Actualizar localStorage
    });
}




function agregarProducto(e) {
    if (e.target.classList.contains("agregar-carrito")) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerInfo(productoSeleccionado);
        mostrarAlerta(); // Llama a la función para mostrar la alerta
    }
}








// Elimina un producto del carrito
function eliminarProducto(e) {
    if (e.target.classList.contains("borrar-producto")) {
        const productoId = e.target.getAttribute('data-id');
        
        // Eliminar del arreglo del carrito por el data-id
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

        carritoHTML(); // Actualizar el HTML
    }
}

// Leer el contenido de nuestro HTML y extrae la información del producto
function leerInfo(producto) {
    const infoProducto = {
        //imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    };

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);

    if (existe) {
        // Actualizar la cantidad
        articulosCarrito = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
            }
            return producto;
        });
    } else {
        // Agregar el producto al carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
    }

    carritoHTML(); // Actualizar el HTML
}

// Muestra el carrito en el HTML
function carritoHTML() {
    limpiarHTML();

    // Recorrer el carrito de compras y generar el HTML
    articulosCarrito.forEach(producto => {
        const fila = document.createElement('div');
        fila.innerHTML = `
            
            <p>${producto.titulo}</p>
            <p>${producto.precio}</p>
            <p>${producto.cantidad}</p>
            <p><span class="borrar-producto" data-id="${producto.id}">X</span></p>
        `;
//<img src="${producto.imagen}"></img>
        contenedorCarrito.appendChild(fila);
    });

    sincronizarStorage(); // Actualizar localStorage con los datos del carrito
}

// Sincronizar el carrito con localStorage
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los productos de la lista_de_productos
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

// Seleccionar el botón de pagar
const btnPagar = document.getElementById('pagar');

// Agregar evento de clic para redirigir a la página de pago
btnPagar.addEventListener('click', () => {
    // Cambia 'pagina_de_pago.html' por la URL de tu página de pago
    window.location.href = 'IndexPago.html';
});



