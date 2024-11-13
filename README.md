# TallerExpresDosJuanForero

Este es un proyecto backend desarrollado con Express.js y MongoDB, que implementa autenticación JWT y maneja tres entidades principales: Usuarios, Propiedades y Registros.

## Instalación

1. Clonar el repositorio
git clone [URL del repositorio]
cd tallerexpressdosjuanforero

2. Instalar dependencias
npm install

3. Crear archivo .env en la raíz
PORT = 8080
URI_MONGO = "mongodb+srv://[tu_usuario]:[tu_contraseña]@[tu_cluster].mongodb.net/[tu_base_de_datos]"
SECRET = "tu_clave_secreta"

## Scripts

# Iniciar servidor en desarrollo
npm run dev

# Iniciar servidor
npm start

# Cargar datos de prueba
npm run dataUsers
npm run dataRegisters
npm run dataProperties

## Endpoints

### Usuarios

# Registro
POST /api/users/register
Body: {
    "name": "String",
    "email": "String",
    "address": "String",
    "phone": Number,
    "password": "String",
    "online": Boolean
}

# Login
POST /api/auth/signin
Body: {
    "email": "String",
    "password": "String"
}

# Obtener todos los usuarios
GET /api/users/all

# Obtener usuario por ID
GET /api/users/id/:id

# Actualizar usuario
PUT /api/users/update

# Eliminar usuario
DELETE /api/users/deleteOne

### Propiedades

# Obtener todas las propiedades
GET /api/properties/all

# Crear propiedad
POST /api/properties/create
Body: {
    "name": "String",
    "type": "String",
    "value": Number,
    "user": "User_ID"
}

# Obtener propiedad por ID
GET /api/properties/id/:id

# Actualizar propiedad
PUT /api/properties/update

# Eliminar propiedad
DELETE /api/properties/delete/:id

### Registros

# Obtener todos los registros
GET /api/registers/all

# Crear registro
POST /api/registers/create
Body: {
    "date": "Date",
    "description": "String",
    "value": Number,
    "active": Boolean,
    "user": "User_ID"
}

# Obtener registro por ID
GET /api/registers/id/:id

# Actualizar registro
PUT /api/registers/update

# Eliminar registro
DELETE /api/registers/delete/:id

## Autenticación

Para las rutas protegidas, incluir el token JWT en el header:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB con Mongoose
- JWT para autenticación
- Passport.js
- Joi para validaciones
- Bcrypt para encriptación

## Estructura del Proyecto
project/
├── config/
│   └── database.js
├── controllers/
│   ├── auth/
│   ├── properties/
│   ├── registers/
│   └── users/
├── middlewares/
├── models/
├── router/
├── schemas/
├── .env
└── server.js

## Autores

Juan Forero

## Licencia

ISC