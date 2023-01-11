import { Router } from "express";
import BookingsRouter from "../bookings/bookingsRoutes";
import VehiclesRouter from "../vehicles/vehiclesRoutes";

// import AuthRouter from "./auth/authRoutes";

const MainRouter = Router();

MainRouter.use("/bookings", BookingsRouter);
// MainRouter.use("/auth", AuthRouter);

MainRouter.use("/vehicles", VehiclesRouter);

export default MainRouter;
