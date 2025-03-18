import mongoose, { Schema, model } from "mongoose";

export interface IFranchise extends Document {
  name: string;
  logo: string;
  industry: string;
  description: string;
  investment_min: number;
  investment_max: number;
  franchise_fee: number;
  royalty_fee: number;
  locations: string[];
  support_details: string;
  contact_email: string;
  contact_phone: string;
  category: mongoose.Types.ObjectId; // Reference to Category
  isActive: boolean
}

const franchiseSchema = new Schema<IFranchise>({
  name: { type: String, required: true },
  logo: { type: String },
  industry: { type: String },
  description: { type: String },
  investment_min: { type: Number },
  investment_max: { type: Number },
  franchise_fee: { type: Number },
  royalty_fee: { type: Number },
  locations: [{ type: String }],
  support_details: { type: String },
  contact_email: { type: String },
  contact_phone: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "category", required: true }, // Foreign Key
  isActive: { type: Boolean, required: true, default: true }
}, {
  timestamps: true
});

const FranchiseModel = model("franchise", franchiseSchema);

export default FranchiseModel