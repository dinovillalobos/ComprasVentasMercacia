let signUp = document.getElementById("signUp");
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

// Evento para registro
boton.addEventListener('click', async (e) => {
    e.preventDefault();

    const datos = {
        nombre: nombre.value,
        correo: correo.value,
        contraseña: contraseña.value,
        rol: signUp.classList.contains("disable") ? "comprador" : "vendedor"
    };

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
    }
});

// Evento para login
document.getElementById('botonR').addEventListener('click', async (e) => {
    e.preventDefault();

    if (signIn.classList.contains("disable")) return;

    const datos = {
        correo: correo.value,
        contraseña: contraseña.value,
    };

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
            console.log('Token:', result.token); // Guarda el token si es necesario
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
