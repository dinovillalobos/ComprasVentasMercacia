// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos
    const productoInput = document.getElementById("nombres");
    const precioInput = document.getElementById("apellidos");
    const descripcionInput = document.getElementById("correo");
    const venderButton = document.querySelector(".btnvender");
    const taskList = document.querySelector(".tasks");

    // Manejar el evento de clic en el botón "VENDER!!!"
    venderButton.addEventListener("click", () => {
        const producto = productoInput.value.trim();
        const precio = precioInput.value.trim();
        const descripcion = descripcionInput.value.trim();

        // Validar que los campos no estén vacíos
        if (!producto || !precio || !descripcion) {
            alert("Por favor, completa todos los campos antes de vender.");
            return;
        }

        // Crear un nuevo elemento de lista para el producto
        const newTask = document.createElement("li");

        // Configurar el contenido del nuevo elemento
        newTask.innerHTML = `
            <span>${producto} - $${precio} (${descripcion})</span>
            <i class="bi bi-trash-fill delete"></i>
        `;

        // Agregar el nuevo producto a la lista
        taskList.appendChild(newTask);

        // Limpiar los campos de entrada
        productoInput.value = "";
        precioInput.value = "";
        descripcionInput.value = "";

        // Añadir funcionalidad de eliminar al nuevo elemento
        addDeleteFunctionality(newTask.querySelector(".delete"));
    });

    // Añadir funcionalidad de eliminar a los íconos de eliminación existentes
    const deleteIcons = document.querySelectorAll(".delete");
    deleteIcons.forEach(icon => addDeleteFunctionality(icon));

    // Función para agregar funcionalidad de eliminar a un ícono
    function addDeleteFunctionality(icon) {
        icon.addEventListener("click", () => {
            const taskItem = icon.parentElement; // Obtener el elemento <li> padre
            taskItem.remove(); // Eliminar el producto de la lista
        });
    }
});

document.getElementById('btn-iniciar-sesion').addEventListener('click', () => {
    window.location.href = 'IndexLog.html'; //Ruta de acceso del Archivo
});
document.getElementById('btn-Comprar').addEventListener('click', () =>{
    window.location.href = 'IndexCom.html';
})