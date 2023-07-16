import { Router } from "express";
import mysql from "mysql2/promise";
import proxyDispositivo from "../MIDDLEWARE/proxyDispositivo.js";

const DISPOSITIVO = Router();
let conn = undefined;

DISPOSITIVO.use((req, res, next) => {
  try {
    let CONFIG_CONN = JSON.parse(process.env.MY_CONNECTION);
    conn = mysql.createPool(CONFIG_CONN);
    next();
  } catch (error) {
    res.send(error + "-> CONNECTION ERROR");
  }
});

DISPOSITIVO.get("/", proxyDispositivo, async (req, res) => {
  try {
    const [rows, fields] = await conn.execute(`SELECT * FROM dispositivo`);
    res.send(rows);
  } catch (error) {
    res.status(500).json({ message: "ERROR TO INSERT DATA", error: error });
  }
});

DISPOSITIVO.post("/", proxyDispositivo, async (req, res) => {
  try {
    await conn.query(`INSERT INTO dispositivo SET ?`, req.body);
    res.send("DATA INSERTED");
  } catch (error) {
    res.status(500).json({ message: "ERROR TO INSERT DATA", error: error });
  }
});

export default DISPOSITIVO;
