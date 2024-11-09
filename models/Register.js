import { Schema, model } from 'mongoose';

let collection = 'registers'
let schema = new Schema({
   date: { type: Date, required: true },
   description: { type: String, required: true },
   value: { type: Number, required: true },
   active: { type: Boolean, default: true },
   user: { type: Schema.Types.ObjectId, ref: 'users', required: true }
}, {
   timestamps: true
})

let Register = model(collection, schema)
export default Register