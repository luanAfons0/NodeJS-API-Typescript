import Controller from "../interfaces/Controller.js";
import { Request, Response } from "express";

class HealthCheckController implements Controller {
  public index(_: Request, res: Response) {
    res.status(200).json({ message: "API is up and runnig!" });
  }
}

export default new HealthCheckController();
