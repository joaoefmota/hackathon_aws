const express = require("express");

const BookingsRouter = require("../bookings/bookingsRoutes");
const VehiclesRouter = require("../vehicles/vehiclesRoutes");
const { formValidators } = require(".././bookings/validators");

// import AuthRouter from "./auth/authRoutes";

const MainRouter = express.Router();

MainRouter.use("/bookings", formValidators, BookingsRouter);
// MainRouter.use("/auth", AuthRouter);

MainRouter.use("/vehicles", VehiclesRouter);

module.exports = MainRouter;
