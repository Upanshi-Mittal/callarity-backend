import express from "express";
import cors from "cors";
import uploadMiddleware from "./middleware/uploadMiddleware.js";
import sttRouter from "./routes/sttRoutes.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use(uploadMiddleware); // middleware for multer memory storage

app.use("/api/stt", sttRouter); // routes for STT

app.get("/", (req, res) => {
  res.status(200).send("Node backend is alive and working fine!");
});

app.listen(port, () => {
  console.log(`Node server running on http://localhost:${port}`);
});
