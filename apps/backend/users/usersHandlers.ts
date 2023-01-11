import { Request, Response } from "express";
import database from "../src/database";

export const getAllUsers = (req: Request, res: Response) => {
  database.query("SELECT * FROM users").then((result) => {
    res.json(result[0]);
  });
};
