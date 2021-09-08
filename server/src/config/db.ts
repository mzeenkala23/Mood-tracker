const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI as String;
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
