import IController from "../interfaces/IController.js";
import { usersTable } from "../../db/schema.js";
import { Request, Response } from "express";
import database from "../../db/index.js";
import { eq } from "drizzle-orm";

class UserController implements IController {
  public async index(_: Request, res: Response) {
    const { db } = database;
    const users = await db.select().from(usersTable);

    res.status(200).json({ data: users });
  }

  public async show(req: Request, res: Response) {
    const { db, validateResult } = database;
    const { id } = req.params as UserController.GetUserById;

    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, Number(id)))
      .limit(1);

    if (!validateResult(user)) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.status(200).json({ data: user });
  }

  public async create(req: Request, res: Response) {
    const { name, age, email } = req.body as UserController.CreateUser;

    if (!name || !age || !email) {
      res.status(400).json({ message: "Missing property in user create!" });
    }

    const { db } = database;

    const newUser = await db
      .insert(usersTable)
      .values({ name: name, age: Number(age), email: email })
      .$returningId();

    const createdUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, newUser[0].id));

    res.status(201).json({ data: createdUser });
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params as UserController.GetUserById;
    const { name, age, email } = req.body as UserController.UpdateUser;

    if (!name || !age || !email) {
      res.status(400).json({ message: "Missing property in user create!" });
    }

    const { db, validateResult } = database;

    const itemToUpdate = await db
      .select({ id: usersTable.id })
      .from(usersTable)
      .where(eq(usersTable.id, Number(id)));

    if (!validateResult(itemToUpdate)) {
      res.status(404).json({ message: "User not found!" });
      return;
    }

    await db
      .update(usersTable)
      .set({ age: age, email: email, name: name })
      .where(eq(usersTable.id, Number(id)));

    const responseItem = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, Number(id)));

    res.status(200).json({ data: responseItem });
  }

  public async destroy(req: Request, res: Response) {
    const { id } = req.params as UserController.GetUserById;

    if (!id) {
      res.status(400).json({ message: "User not found!" });
      return;
    }

    const { db, validateResult } = database;

    const removedItem = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, Number(id)));

    if (!validateResult(removedItem)) {
      res.status(404).json({ message: "Customer not found!" });
      return;
    }

    await db.delete(usersTable).where(eq(usersTable.id, Number(id)));

    res.status(200).json({ message: "User deleted!" });
  }
}

namespace UserController {
  export type GetUserById = {
    id: string;
  };
  export type CreateUser = {
    name: string;
    age: number;
    email: string;
  };
  export type UpdateUser = {
    name: string;
    age: number;
    email: string;
  };
}

export default new UserController();
