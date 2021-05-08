import { Request, Response, Router } from "express";

import { roll } from "../Utils/Helpers";
import AnimalModel from "../Models/Animal";

export default class Animal {
  public path: string = "/animals";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private async getAnimals(_: Request, res: Response) {
    const animals = [...Array(roll(1, 3))].map(() => AnimalModel.create({}));

    return res.json({ animals });
  }
  private async createAnimal(req: Request, res: Response) {
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
    this.router.post(`${this.path}`, this.createAnimal);

    this.router.get(`${this.path}/:name`, this.getCustomAnimal);
  }
}
