import { plainToClass } from "class-transformer";
import { Trainer } from "../controller/trainerDTO.js";

const proxyTrainer = (req, res, next) => {
  try {
    req.body = plainToClass(Trainer, req.body, {
      excludeExtraneousValues: true,
    });
    next();
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

export default proxyTrainer;
