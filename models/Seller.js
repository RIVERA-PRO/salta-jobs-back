import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    last_name: {type: String},
    city: {type: String, required: true},
    country: {type: String, required: true},
    date: {type: Date},
    photo: {type: String, required: true},
    user_id: {type: mongoose.Types.ObjectId, ref: "user", required: true},
    active: {type: Boolean, required: true},
  },
  {
    timestamps: true,
  }
);
const Seller = mongoose.model("sellers", schema);
export default Seller;
