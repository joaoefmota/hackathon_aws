const express = require("express");
const { getAllVehicles, getVehicleById } = require("./vehiclesHandlers");

const VehiclesRouter = express.Router();

VehiclesRouter.get("/", getAllVehicles);
VehiclesRouter.get("/:id", getVehicleById);

module.exports = VehiclesRouter;
