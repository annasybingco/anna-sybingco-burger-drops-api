import express from "express";
import fs from "fs";
const router = express.Router();

const data = fs.readFileSync("./data/menu.json", "utf8");
const photos = JSON.parse(data);

router.get("/", function (req, res) {
  res.send(photos);
});

export default router;
