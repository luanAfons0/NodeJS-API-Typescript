import { RequestHandler } from "express";

interface Controller {
  index?: RequestHandler;
  show?: RequestHandler;
  update?: RequestHandler;
  create?: RequestHandler;
  destroy?: RequestHandler;
}

export default Controller;
