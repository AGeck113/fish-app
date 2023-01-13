import mongoose from "mongoose";
import "./Review";
const { Schema } = mongoose;

const toolSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Tool = mongoose.models.Tool || mongoose.model("Tool", toolSchema);

export default Tool;
