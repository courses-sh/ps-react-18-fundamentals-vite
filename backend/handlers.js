import express from "express";
import fs from "fs/promises";
import path from "path";

const router = express.Router();
const jsonFile = path.resolve(process.cwd(), "./data/houses.json");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getHouses() {
  const fileData = await fs.readFile(jsonFile, "utf-8");
  return JSON.parse(fileData).houses;
}

// GET all houses
router.get("/", async (req, res) => {
  try {
    const houses = await getHouses();
    await delay(1000);

    if (!houses) {
      return res.status(404).send("Error: Request failed with status code 404");
    }

    console.log("GET /api/houses status: 200");
    return res.json(houses);
  } catch(e) {
    console.log("/api/houses GET error:", e);
    return res.status(500).json({error: e.message});
  }
});

// GET single house by ID
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const houses = await getHouses();
    const house = houses.find((rec) => rec.id === id);

    if (!house) {
      return res.status(404).json({error: "house not found"});
    }

    console.log(`GET /api/houses/${id} status: 200`);
    return res.json(house);
  } catch(error) {
    console.log("/api/houses/:id GET error:", error);
    return res.status(500).json({error: "Server Error"});
  }
});

// POST new house
router.post("/", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({error: "Missing or invalid request body"});
    }

    const houses = await getHouses();
    await delay(1000);

    const maxId = houses.length > 0 ? Math.max(...houses.map((h) => h.id)) : 0;
    const newId = maxId + 1;

    // Constructs new object with ID as the first property key
    const data = {
      id: newId,
      ...req.body,
    };

    const newHousesArray = [...houses, data];
    await fs.writeFile(jsonFile, JSON.stringify({houses: newHousesArray}, null, 2));

    console.log(`POST /api/houses status: 201`);
    return res.status(201).json(data);
  } catch(e) {
    console.log("/api/houses POST error:", e);
    return res.status(500).json({error: e.message});
  }
});

export default router;