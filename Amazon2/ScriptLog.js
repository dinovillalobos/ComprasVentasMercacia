let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function () {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    document.getElementById("botonR").innerText = 'Entrar';
};

signUp.onclick = function () {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    document.getElementById("botonR").innerText = 'Registrar';
};

// Manejo del botón para registrar o iniciar sesión
const boton = document.getElementById("botonR");
boton.addEventListener('click', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;

    if (document.getElementById("botonR").innerText === 'Registrar') {
        // Registro: enviar datos al servidor
        const datos = new FormData();
        datos.append('nombre', nombre);
        datos.append('correo', correo);
        datos.append('contraseña', contraseña);

        try {
            const respuesta = await fetch("Registro.php", {
                method: "POST",
                body: datos
            });

            const resultado = await respuesta.text();
            alert(resultado); // Mostrar respuesta del servidor
        } catch (error) {
            console.error("Error:", error);
        }
    } else {
        // Lógica de login (puedes añadirla después según sea necesario)
        alert('Funcionalidad de Login pendiente');
    }

    // Limpiar campos del formulario
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
});

/*let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    document.getElementById("botonR").innerText = 'Entrar';
}
signUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    document.getElementById("botonR").innerText = 'Registrar';
}

const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const contraseña = document.getElementById("password");
const boton = document.getElementById("botonR");


boton.addEventListener ('click', (e) =>{
    e.preventDefault()
    const datos = {
        Nombre: nombre.value,
        Correo: correo.value,
        contraseña: contraseña.value
    }
    console.log(datos)
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    
})*/