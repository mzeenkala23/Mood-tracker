import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";

import connectDB from "./config/db";

const app = express();
connectDB();

app.use(cors());
// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listing at ${PORT}`);
});
