import { plainToClass } from "class-transformer";
import { Dispositivo } from "../controller/dispositivoDTO.js";

const proxyDispositivo = (req, res, next) => {
  try {
    req.body = plainToClass(Dispositivo, req.body, {
      excludeExtraneousValues: true,
    });
    next();
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

export default proxyDispositivo;
