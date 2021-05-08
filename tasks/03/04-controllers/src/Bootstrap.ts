import express from "express";

import type { IApp } from "./Types/App";
import type Controller from "./Types/Controller";

export default class App implements IApp {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public async listen() {
    this.app.listen(process.env.API_PORT, () => {
      console.log(`App listening on the port ${process.env.API_PORT}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeControllers(controllers: Controller[]) {
    this.app.get("/", (_, res) => res.send("Hello, the router is working"));

    controllers.forEach((controller) => {
      this.app.use(controller.router);
    });
  }
}
