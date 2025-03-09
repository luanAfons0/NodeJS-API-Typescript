import UserController from "../controllers/UserController.js";
import IRoutes from "../interfaces/IRoute.js";
import Router, { IRouter } from "express";

class UserRoutes implements IRoutes {
  private readonly routes: IRouter;

  constructor() {
    this.routes = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.get("/users", UserController.index);
    this.routes.get("/users/:id", UserController.show);
    this.routes.post("/users", UserController.create);
    this.routes.put("/users/:id", UserController.update);
    this.routes.delete("/users/:id", UserController.destroy);
  }

  public getAllRoutes() {
    return this.routes;
  }
}

export default new UserRoutes();
