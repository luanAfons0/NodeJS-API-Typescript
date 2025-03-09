import express, { Express } from "express";
import AppRoutes from "./routes.js";

class App {
  private readonly server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  public getServer() {
    return this.server;
  }

  private middlewares() {
    this.server.use(express.json());
  }

  private routes() {
    this.server.use(AppRoutes.getAllRoutes());
  }
}

export default new App().getServer();
