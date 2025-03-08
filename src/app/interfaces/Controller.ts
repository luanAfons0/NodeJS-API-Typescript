import { RequestHandler } from "express";

interface IController {
  index?: RequestHandler;
  show?: RequestHandler;
  update?: RequestHandler;
  create?: RequestHandler;
  destroy?: RequestHandler;
}

export default IController;
