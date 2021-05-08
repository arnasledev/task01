import { Request, Response, NextFunction, Router } from "express";

import { roll } from "../Utils/Helpers";
import AnimalModel from "../Models/Animal";
import { AnimalMiddleware } from "../Middlewares";

export default class Animal extends AnimalMiddleware {
  public path: string = "/animals";
  public router = Router();

  constructor() {
    super();

    this.initializeRoutes();
  }

  private async getAnimals(_: Request, res: Response) {
    const animals = [...Array(roll(1, 3))].map(() => AnimalModel.create({}));

    return res.json({ animals });
  }

  private async createAnimal(req: Request, res: Response, next: NextFunction) {
    const { name, age, naming } = req.body;
    const animal = AnimalModel.create({ name, age, naming });

    return res.json({ animal });
  }

  private async getCustomAnimal(req: Request, res: Response) {
    const { name } = req.params;
    const animal = AnimalModel.create({ name });

    return res.json({ animal });
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.getAnimals);
    this.router.post(`${this.path}`, this.createMiddleware, this.createAnimal);

    this.router.get(`${this.path}/:name`, this.getCustomAnimal);
  }
}
