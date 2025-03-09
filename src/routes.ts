import HealthCheckRoutes from "./app/routes/HealthCheckRoutes.js";
import UserRoutes from "./app/routes/UserRoutes.js";
import Routes from "./app/interfaces/IRoute.js";
import { IRouter, Router } from "express";

class AppRoutes implements Routes {
  private readonly routes: IRouter;

  constructor() {
    this.routes = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.use(HealthCheckRoutes.getAllRoutes());
    this.routes.use(UserRoutes.getAllRoutes());
  }

  public getAllRoutes() {
    return this.routes;
  }
}

export default new AppRoutes();
