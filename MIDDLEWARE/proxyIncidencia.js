import { plainToClass } from "class-transformer";
import { Incidencia } from "../controller/incidenciaDTO.js";

const proxyIncidencia = (req, res, next) => {
  try {
    req.body = plainToClass(Incidencia, req.body, {
      excludeExtraneousValues: true,
    });
    next();
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

export default proxyIncidencia;
