const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  userId: { type: String, required: true },
  category: { type: String },
  name: { type: String },
  amount: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
