import mongoose from 'mongoose'
import Seller from './Seller.js';

let schema = new mongoose.Schema(
  {
    seller_id: { type: mongoose.Types.ObjectId, ref: 'seller', required: true },
    user_id: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: false, ref: "user" },
    mail: { type: String, required: false, ref: "user" },
    photo: { type: String, required: false, ref: "user" },
    title: { type: String, required: true },
    lugar: { type: String, required: true },
    ubicacion: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    fecha: { type: Array, required: true },
    categoria: { type: String, required: true },
    category_id: { type: mongoose.Types.ObjectId, ref: 'categories', required: true },
    salario: { type: Number, required: true },
    vacantes: { type: Number, required: true },
    telefono: { type: Number, required: true },
    web: { type: String, required: false },
    facebook: { type: String, required: false },
    instagram: { type: String, required: false },
  }, {
  timestamps: true
}

);
let Destino = mongoose.model("destinos", schema);
export default Destino;
