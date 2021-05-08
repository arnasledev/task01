import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

import { AnimalNaming } from "../Types/Animal";

const schemas = {
  createAnimal: yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    naming: yup.mixed().oneOf(Object.values(AnimalNaming)).required(),
  }),
};

export default class AnimalMiddleware {
  protected async createMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await schemas.createAnimal.validate(req.body);
    } catch (error) {
      return res.status(422).send(error.message);
    }

    return next();
  }
}
