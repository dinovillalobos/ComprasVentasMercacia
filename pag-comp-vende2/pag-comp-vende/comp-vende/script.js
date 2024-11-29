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
    
})