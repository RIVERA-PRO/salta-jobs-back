import mongoose from "mongoose";


let RoomsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    maxPeople: { type: Number, required: true },
    description: { type: String, required: true },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  } , { 
    timestamps: true 
}

);

const Rooms = mongoose.model("Rooms", RoomsSchema);

export default Rooms
