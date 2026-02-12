import mongoose from "mongoose";

const ConsignmentSchema = new mongoose.Schema({
  userId: {
    type: String,     // because your userid comes from login (ObjectId/string)
    required: true
  },
  itemName: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  pickupAddress: {
    type: String,
    required: true
  },
  dropAddress: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    default: "Pending"   // Pending | Approved | Picked | Delivered
  },
  statusUpdatedAt: {
  type: Date
},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("consignments_collection", ConsignmentSchema);
