import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.MONGODB_URI;
console.log("Connecting to - ", dbURI);

try {
  await mongoose.connect(dbURI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:" + error.message);
}
