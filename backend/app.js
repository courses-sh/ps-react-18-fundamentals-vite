import express from "express";
import bidsHandlers from "./handlers/bidsHandlers.js";
import houseRoutes from "./handlers/housesHandlers.js";

const app = express();
const port = process.env.PORT || 3125;

app.use(express.json());

// Routes
app.use("/api/bids", bidsHandlers);
app.use("/api/houses", houseRoutes);

console.log(`Express backend running on port ${port}`);

export default app;
