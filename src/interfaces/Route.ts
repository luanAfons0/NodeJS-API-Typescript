import { IRouter } from "express";

interface Routes {
  initRoutes: () => void;
  getAllRoutes: () => IRouter;
}

export default Routes;
