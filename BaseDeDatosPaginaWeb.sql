CREATE DATABASE UsuariosBaseDD;

USE UsuariosBaseDD;

CREATE TABLE Usuarios(

	id INT auto_increment PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    contraseña VARCHAR(200) NOT NULL,
    create_at timestamp default current_timestamp
);