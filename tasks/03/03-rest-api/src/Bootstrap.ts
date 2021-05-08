import express from "express";

import type { IApp } from "./Types/App";

export default class App implements IApp {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeControllers();
  }

  public async listen() {
    this.app.listen(process.env.API_PORT || 3009, () => {
      console.log(`App listening on the port ${process.env.API_PORT || 3009}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeControllers() {
    this.app.get("/", (_, res) => res.send("Hello, the router is working"));
  }
}
