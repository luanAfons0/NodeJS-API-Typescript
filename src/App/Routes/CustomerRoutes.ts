import CustomersController from "../Controllers/CustomersController.js";
import Routes from "../Interfaces/Route.js";
import Router, { IRouter } from "express";

class CustomerRoutes implements Routes {
  private readonly routes: IRouter;

  constructor() {
    this.routes = Router();
    this.initRoutes();
  }

  public initRoutes() {
    this.routes.get("/customers", CustomersController.index);
    this.routes.get("/customers/:id", CustomersController.show);
    this.routes.post("/customers", CustomersController.create);
    this.routes.put("/customers/:id", CustomersController.update);
    this.routes.delete("/customers/:id", CustomersController.destroy);
  }

  public getAllRoutes() {
    return this.routes;
  }
}

export default new CustomerRoutes();
