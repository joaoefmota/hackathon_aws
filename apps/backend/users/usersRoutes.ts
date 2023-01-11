import { Router } from "express";
import { getAllBookings } from "./usersHandlers";

const UsersRouter = Router();

UsersRouter.get("/", getAllBookings);

export default UsersRouter;
