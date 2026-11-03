import express from "express";
import houseRoutes from "./handlers.js";

const app = express();
const port = process.env.PORT || 3125;

app.use(express.json());

// Routes
app.use("/api/houses", houseRoutes);

console.log(`Express backend running on port ${port}`);

export default app;
