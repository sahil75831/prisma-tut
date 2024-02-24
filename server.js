import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "gotit.." });
});

app.use(routes);

app.listen(PORT, () => {
  console.log("server is listening to port ", PORT);
});
