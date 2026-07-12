import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import hotelRoutes from "./routes/hotelRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ================= Middleware =================
app.use(cors());
app.use(express.json());

// ================= MongoDB Connection =================
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:", err);
  });

// ================= Routes =================
app.get("/", (req, res) => {
  res.send("🏔 Kumaon Stays Backend API is Running...");
});

// Hotel Routes
app.use("/api/hotels", hotelRoutes);

// Auth Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend Connected Successfully 🚀",
  });
});

// ================= Server =================
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});