const mongoose = require("mongoose");
const Present = require("../models/transaction");
const MONGODB_URI = "mongodb://localhost:27017/moneyapp";
mongoose.set('strictQuery', true);

const transactionsSeed = [{
  userId: "testUser",
  category: "rent",
  name: "",
  amount: 500,
  startDate: "2023-01-30",
  endDate: "2023-02-30"},
  {
    userId: "testUser",
    category: "transportation",
    name: "taxi",
    amount: 20,
    startDate: "2023-03-31",
}];

const connectBD = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Seed DB connected");
    await Present.deleteMany({});
    await Present.insertMany(transactionsSeed);
    console.log("Seed created");
    await mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

connectBD();
