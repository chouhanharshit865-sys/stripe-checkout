import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    totalAmount: { type: Number, required: true },

    transactionId: { type: String, required: false },

    status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },
    orderItems: {
      type: [mongoose.Schema.Types.Mixed],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);