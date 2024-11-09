import "dotenv/config.js";
import "../../config/database.js";
import User from "../User.js";

let users = [
    {
        nombre: "Juan",
        correo: "juan@gmail.com",
        direccion: "Av. Juan",
        telefono: 123456789,
        contraseña: "Juan123",
        online: true
    },
    {
        nombre: "Pedro",
        correo: "pedro@gmail.com",
        direccion: "Av. Pedro",
        telefono: 987654321,
        contraseña: "Pedro123",
        online: true
    },
    {
        nombre: "Carlos",
        correo: "carlos@gmail.com",
        direccion: "Av. Carlos",
        telefono: 654321098,
        contraseña: "Carlos123",
        online: true
    },
    {
        nombre: "Luis",
        correo: "luis@gmail.com",
        direccion: "Av. Luis",
        telefono: 543210987,
        contraseña: "Luis123",
        online: true
    },
    {
        nombre: "Maria",
        correo: "maria@gmail.com",
        direccion: "Av. Maria",
        telefono: 432109876,
        contraseña: "Maria123",
        online: true
    },
    {
        nombre: "Jose",
        correo: "jose@gmail.com",
        direccion: "Av. Jose",
        telefono: 321098765,
        contraseña: "Jose123",
        online: true
    },
    {
        nombre: "Ana",
        correo: "ana@gmail.com",
        direccion: "Av. Ana",
        telefono: 210987654,
        contraseña: "Ana123",
        online: true
    },
    {
        nombre: "Juan",
        correo: "juan@gmail.com",
        direccion: "Av. Juan",
        telefono: 123456789,
        contraseña: "Juan123",
        online: true
    },
    {
        nombre: "Pedro",
        correo: "pedro@gmail.com",
        direccion: "Av. Pedro",
        telefono: 987654321,
        contraseña: "Pedro123",
        online: true
    },
    {
        nombre: "Carlos",
        correo: "carlos@gmail.com",
        direccion: "Av. Carlos",
        telefono: 654321098,
        contraseña: "Carlos123",
        online: true
    }];

User.insertMany(users)