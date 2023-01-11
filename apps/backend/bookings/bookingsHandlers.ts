import { Request, Response } from "express";
import database from "../src/database";

export const getAllBookings = (req: Request, res: Response) => {
  database.query("SELECT * FROM bookings").then((result) => {
    res.json(result[0]);
  });
};