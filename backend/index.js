import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import postsRoutes from "./routes/posts.js";

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postsRoutes);

const PORT = process.env.PORT || 5000;
const CONNECT_URL = process.env.ATLAS_URI;

mongoose
  .connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
