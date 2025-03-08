import Controller from "../interfaces/Controller.js";
import { Request, Response } from "express";

namespace CustomersController {
  export type GetCustomerById = {
    id: string;
  };
  export type CreateCustomer = {
    name: string;
  };
  export type UpdateCustomer = {
    name: string;
  };
}

type Customer = {
  id: number;
  name: string;
};

var customers: Customer[] = [
  { id: 1, name: "Luan" },
  { id: 2, name: "Igor" },
  { id: 3, name: "Patrick" },
];

class CustomersController implements Controller {
  public index(_: Request, res: Response) {
    res.status(200).json({ data: customers });
  }

  public show(req: Request, res: Response) {
    const { id } = req.params as CustomersController.GetCustomerById;
    const customer = customers.find((customer) => customer.id == Number(id));
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }
    res.status(200).json({ data: customer });
  }

  public create(req: Request, res: Response) {
    const { name } = req.body as CustomersController.CreateCustomer;
    const lastId = customers[customers.length - 1].id;

    const newCustomer = { id: lastId + 1, name: name };
    customers.push(newCustomer);
    res.status(201).json({ data: newCustomer });
  }

  public update(req: Request, res: Response) {
    const { id } = req.params as CustomersController.GetCustomerById;
    const { name } = req.body as CustomersController.UpdateCustomer;
    const updatedItem = customers.find((customer) => customer.id == Number(id));
    if (!updatedItem) {
      res.status(404).json({ message: "Customer not found!" });
      return;
    }
    updatedItem.name = name;
    res.status(200).json({ data: updatedItem });
  }

  public destroy(req: Request, res: Response) {
    const { id } = req.params as CustomersController.GetCustomerById;

    const removedItem = customers.find((customer) => customer.id == Number(id));
    if (!removedItem) {
      res.status(404).json({ message: "Customer not found!" });
      return;
    }

    customers = customers.filter((customer) => customer.id != removedItem.id);
    res.status(200).json({ message: "Customer deleted!" });
  }
}

export default new CustomersController();
