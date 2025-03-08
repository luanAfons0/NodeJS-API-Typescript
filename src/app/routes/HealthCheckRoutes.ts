import HealthCheckController from "../controllers/HealthCheckController.js";
import IRoutes from "../interfaces/Route.js";
import Router, { IRouter } from "express";

class HealthCheckRoutes implements IRoutes {
  private readonly routes: IRouter;

  constructor() {
    this.routes = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.get("/health-check", HealthCheckController.index);
  }

  public getAllRoutes() {
    return this.routes;
  }
}

export default new HealthCheckRoutes();
