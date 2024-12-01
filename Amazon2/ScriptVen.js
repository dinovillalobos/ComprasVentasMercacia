// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar elementos
    const productoInput = document.getElementById("nombres");
    const precioInput = document.getElementById("apellidos");
    const descripcionInput = document.getElementById("correo");
    const venderButton = document.querySelector(".btnvender");
    const taskList = document.querySelector(".tasks");

    // Función para cargar productos desde localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        storedTasks.forEach(task => addTaskToList(task));
    }

    // Función para guardar productos en localStorage
    function saveTask(producto, precio, descripcion) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ producto, precio, descripcion });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Función para eliminar un producto de localStorage
    function removeTaskFromStorage(taskText) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(task => `${task.producto} - $${task.precio} (${task.descripcion})` !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Función para agregar un producto a la lista
    function addTaskToList({ producto, precio, descripcion }) {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${producto} - $${precio} (${descripcion})</span>
            <i class="bi bi-trash-fill delete"></i>
        `;
        taskList.appendChild(newTask);
        addDeleteFunctionality(newTask.querySelector(".delete"));
    }

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

        // Agregar el producto a la lista y guardarlo en localStorage
        const task = { producto, precio, descripcion };
        addTaskToList(task);
        saveTask(producto, precio, descripcion);

        // Limpiar los campos de entrada
        productoInput.value = "";
        precioInput.value = "";
        descripcionInput.value = "";
    });

    // Añadir funcionalidad de eliminar a un ícono
    function addDeleteFunctionality(icon) {
        icon.addEventListener("click", () => {
            const taskItem = icon.parentElement; // Obtener el elemento <li> padre
            const taskText = taskItem.querySelector("span").textContent;
            taskItem.remove(); // Eliminar el producto de la lista
            removeTaskFromStorage(taskText); // Eliminar el producto de localStorage
        });
    }

    // Cargar productos al cargar la página
    loadTasks();
});

// Redirección de botones
document.getElementById('btn-iniciar-sesion').addEventListener('click', () => {
    window.location.href = 'IndexLog.html'; //Ruta de acceso del Archivo
});
document.getElementById('btn-Comprar').addEventListener('click', () => {
    window.location.href = 'IndexCom.html';
});
