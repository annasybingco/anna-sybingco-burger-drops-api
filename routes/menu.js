import express from "express";
import fs from "fs";
const router = express.Router();

const data = fs.readFileSync("./data/menu.json", "utf8");
const menu = JSON.parse(data);

router.get("/", function (req, res) {
  res.send(menu);
});

router.get("/:id", (req, res) => {
  const menuItem = menu.find(
    (menuItem) => menuItem.id === Number(req.params.id)
  );

  if (!menuItem) {
    return res.status(404).json({ error: "Menu item not found" });
  }

  res.json(menuItem);
});

export default router;
