import { Router } from "express";
import { getAllVehicles } from "./vehiclesHandlers";

const VehiclesRouter = Router();

VehiclesRouter.get("/", getAllVehicles);

export default VehiclesRouter;