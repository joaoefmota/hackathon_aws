const express = require("express");
const { getAllBookings } = require("./bookingsHandlers");

const BookingsRouter = express.Router();

BookingsRouter.get("/", getAllBookings);

module.exports = BookingsRouter;
