import { Request, Response } from "express";
import database from "../src/database";

export const getAllVehicles = (req: Request, res: Response) => {
  database.query("SELECT * FROM vehicles").then((result) => {
    res.json(result[0]);
  });
};



