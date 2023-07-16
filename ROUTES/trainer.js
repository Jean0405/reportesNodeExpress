import mysql from "mysql2/promise";
import { Router } from "express";
import proxyTrainer from "../MIDDLEWARE/proxyTrainer.js";

const TRAINER = Router();
let conn = undefined;

TRAINER.use(async (req, res, next) => {
  try {
    let CONFIG_CONN = JSON.parse(process.env.MY_CONNECTION);
    conn = mysql.createPool(CONFIG_CONN);
    next();
  } catch (error) {
    res.send(error + "-> CONNECTION ERROR");
  }
});

TRAINER.get("/", async (req, res) => {
  const [rows, fields] = await conn.execute(`SELECT * FROM trainer`);
  res.send(rows);
  try {
  } catch (error) {
    res.status(500).json({ message: "ERROR TO GET DATA", error: error });
  }
});

TRAINER.post("/", proxyTrainer, async (req, res) => {
  // {
  //   "id_trainer":1005184201,
  //   "nombre_trainer":"Jeanpierre Angarita",
  //   "email_personal":"jean0405@gmail.com",
  //   "email_corporativo":"jean04@campus.co",
  //   "telefono_movil":"3224097916",
  //   "telefono_residencia":"",
  //   "telefono_corporativo":"336611",
  //   "telefono_movilEmpresarial":"3224097917"
  // }
  await conn.query(`INSERT INTO trainer SET ?`, req.body);
  res.send("DATA INSERTED");
  try {
  } catch (error) {
    res.status(500).json({ message: "ERROR TO INSERT DATA", error: error });
  }
});

export default TRAINER;
