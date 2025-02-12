import express from "express";
import cors from "cors";
import "dotenv/config";
import menuRoute from "./routes/menu.js";

const PORT = process.env.PORT || 8000;
const { CORS_ORIGIN } = process.env;
const app = express();

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.use("/api/menu", menuRoute);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
