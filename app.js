import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import HelloController from "./src/controllers/hello-controller.js";
import UserController from "./src/controllers/users/user-controller.js";
import TuitsController from "./src/controllers/tuits/tuits-controller.js";

mongoose.connect(process.env.DB_CONN || "mongodb://127.0.0.1:27017/tuiter");

const app = express();
app.use(express.json());
app.use(cors());

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000);
