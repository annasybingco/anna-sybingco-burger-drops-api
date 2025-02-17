import express from "express";
import fs from "fs";
const router = express.Router();

const data = fs.readFileSync("./data/add-ons.json", "utf8");
const ingredient = JSON.parse(data);

router.get("/", function (req, res) {
  if (!ingredient) {
    return res.status(404).json({ error: "ingredient not found" });
  }
  res.send(ingredient);
});

export default router;
