import mongoose from "mongoose";


let HotelSchema = new mongoose.Schema(
  {
    // seller_id: { type: mongoose.Types.ObjectId, ref: 'seller', required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    continent: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    distance: { type: String, required: true },
    cover_photo: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    rooms:  { type: [String] },
    cheapestPrice: { type: Number, required: true },
    featured: { type: Boolean, default: false },
  }, {
    timestamps: true
    }

);

const Hotels = mongoose.model("Hotels", HotelSchema)

export default Hotels