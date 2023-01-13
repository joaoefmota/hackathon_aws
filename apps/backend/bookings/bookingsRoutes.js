const express = require("express");
const {
  getAllBookings,
  getBookingById,
  postSubmitForm,
} = require("./bookingsHandlers");
const BookingsRouter = express.Router();

BookingsRouter.get("/", getAllBookings);
BookingsRouter.get("/:id", getBookingById);
BookingsRouter.post("/", postSubmitForm);

module.exports = BookingsRouter;
