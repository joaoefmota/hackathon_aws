const database = require("../src/database");

const getAllBookings = (req, res) => {
  database.query("SELECT * FROM bookings").then((result) => {
    res.json(result[0]);
  });
};

module.exports = {
  getAllBookings,
};
