const express = require("express");
const { getAllBookings, getBookingById } = require("./bookingsHandlers");

const BookingsRouter = express.Router();

BookingsRouter.get("/", getAllBookings);
BookingsRouter.get("/:id", getBookingById);

module.exports = BookingsRouter;
