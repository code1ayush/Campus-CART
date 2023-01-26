import mongoose from "mongoose";

const ThingSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Thing", ThingSchema);
