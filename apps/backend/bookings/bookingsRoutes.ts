import { Router } from "express";
import { getAllBookings } from "./bookingsHandlers";

const BookingsRouter = Router();

BookingsRouter.get("/", getAllBookings);

export default BookingsRouter;
