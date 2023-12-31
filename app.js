console.clear();
import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import TRAINER from "./ROUTES/trainer.js";
import DISPOSITIVO from "./ROUTES/dispositivo.js";
import INCIDENCIA from "./ROUTES/incidencia.js";

dotenv.config();
const CONFIG = JSON.parse(process.env.MY_CONFIG);
const APP = express();

APP.use(express.json());

APP.use("/trainer", TRAINER);
APP.use("/dispositivo", DISPOSITIVO);
APP.use("/incidencia", INCIDENCIA);

APP.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});
