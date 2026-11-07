import express from "express";
import fs from "fs/promises";
import path from "path";

const router = express.Router();
const jsonFile = path.resolve(process.cwd(), "./data/bids.json");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getBidsData() {
  const fileData = await fs.readFile(jsonFile, "utf-8");
  return JSON.parse(fileData).bids;
}

// GET bids filtered by houseId
router.get("/:houseId", async (req, res) => {
  try {
    const houseId = parseInt(req.params.houseId, 10);
    await delay(1000);

    const bids = await getBidsData();
    const filteredBids = bids.filter((rec) => rec.houseId === houseId);

    if (!bids) {
      return res.status(404).send("Error: Request failed with status code 404");
    }

    console.log(`GET /api/bids/${houseId} status: 200`);
    return res.json(filteredBids);
  } catch(e) {
    console.log("/api/bids GET error:", e);
    return res.status(500).json({error: e.message});
  }
});

// POST a new bid for a house
router.post("/:houseId", async (req, res) => {
  try {
    const houseId = parseInt(req.params.houseId, 10);
    const recordFromBody = req.body;

    await delay(1000);
    const bids = await getBidsData();

    const maxId = bids.length > 0 ? Math.max(...bids.map((b) => b.id)) : 0;
    recordFromBody.id = maxId + 1;
    recordFromBody.houseId = houseId; // Ensure houseId aligns with route parameter

    const newBidsArray = [...bids, recordFromBody];

    await fs.writeFile(
      jsonFile,
      JSON.stringify({bids: newBidsArray}, null, 2),
      "utf-8"
    );

    console.log(`POST /api/bids/${houseId} status: 200`);
    return res.status(200).json(recordFromBody);
  } catch(e) {
    console.log("/api/bids POST error:", e);
    return res.status(500).json({error: e.message});
  }
});

export default router;
