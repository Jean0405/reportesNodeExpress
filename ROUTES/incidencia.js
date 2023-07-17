import { Router } from "express";
import mysql from "mysql2/promise";
import proxyIncidencia from "../MIDDLEWARE/proxyIncidencia.js";

const INCIDENCIA = Router();
let conn = undefined;

INCIDENCIA.use((req, res, next) => {
  try {
    let CONFIG_CONN = JSON.parse(process.env.MY_CONNECTION);
    conn = mysql.createPool(CONFIG_CONN);
    next();
  } catch (error) {
    res.send(error + "-> CONNECTION ERROR");
  }
});

INCIDENCIA.get("/", async (req, res) => {
  try {
    const [rows, fields] = await conn.query(`SELECT
    incidencia.descripcion,
    incidencia.fecha_reporte,
    categoria.nombre_categoria AS categoria,
    tipo_incidencia.nombre_tipoIncidencia AS tipo_incidencia,
    lugar.nombre_lugar AS lugar,
    areas.nombre_area AS area,
    trainer.id_trainer,
    trainer.nombre_trainer AS trainer
    FROM incidencia
    INNER JOIN categoria ON incidencia.categoria_id = categoria.id_categoria
    INNER JOIN tipo_incidencia ON incidencia.tipoIncidencia_id = tipo_incidencia.id_tipoIncidencia
    INNER JOIN lugar ON incidencia.lugar_id = lugar.id_lugar
    INNER JOIN areas ON lugar.area_id = areas.id_area
    INNER JOIN trainer ON incidencia.trainer_id = trainer.id_trainer`);
    res.send(rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "ERROR TO INSERTED DATA", error: error.message });
  }
});

INCIDENCIA.post("/", proxyIncidencia, async (req, res) => {
  try {
    conn.query(`INSERT INTO incidencia SET ?`, req.body);
    res.send("DATA INSERTED");
  } catch (error) {
    res
      .status(500)
      .json({ message: "ERROR TO INSERTED DATA", error: error.message });
  }
});

export default INCIDENCIA;
