import HealthCheckRoutes from "./app/routes/HealthCheckRoutes.js";
import CustomerRoutes from "./app/routes/CustomerRoutes.js";
import Routes from "./app/interfaces/Route.js";
import { IRouter, Router } from "express";

class AppRoutes implements Routes {
  private readonly routes: IRouter;

  constructor() {
    this.routes = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.use(HealthCheckRoutes.getAllRoutes());
    this.routes.use(CustomerRoutes.getAllRoutes());
  }

  public getAllRoutes() {
    return this.routes;
  }
}

export default new AppRoutes();
