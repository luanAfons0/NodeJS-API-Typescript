import HealthCheckRoutes from "./App/Routes/HealthCheckRoutes.js";
import CustomerRoutes from "./App/Routes/CustomerRoutes.js";
import Routes from "./App/Interfaces/Route.js";
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
