<?php
// Configuración de conexión
$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "usuarios_db";

// Crear conexión
$conn = new mysqli($servidor, $usuario, $password, $bd);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa a la base de datos";

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contraseña = password_hash($_POST['contraseña'], PASSWORD_BCRYPT); // Encriptar contraseña

// Insertar datos en la tabla
$sql = "INSERT INTO registro (nombre, correo, contraseña) VALUES ('$nombre', '$correo', '$contraseña')";
if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>