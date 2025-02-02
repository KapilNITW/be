import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
        trim: true, //to remove white spaces
    },
    email: {
      type: String,
      required:true,
      unique: true,
    },
    password: {
      type: String,
      required:true
    },
    phone: {
      type: String,
      required:true
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", userSchema);
