import mongoose, { Schema } from "mongoose";
const estateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //to remove white spaces
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("estate", estateSchema);
