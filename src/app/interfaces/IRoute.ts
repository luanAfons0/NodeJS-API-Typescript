import { IRouter } from "express";

interface IRoutes {
  initRoutes: () => void;
  getAllRoutes: () => IRouter;
}

export default IRoutes;
