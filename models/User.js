import { Schema, model } from 'mongoose';

let collection = 'users'
let schema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true },
    contraseña: { type: String, required: true },
    online: { type: Boolean }
}, {
    timestamps: true
})

let User = model(collection, schema)
export default User