const database = require("../src/database");

const getAllBookings = (req, res) => {
  database.query("SELECT * FROM bookings").then((result) => {
    res.json(result[0]);
  });
};

const getBookingById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("SELECT * FROM bookings WHERE id=?", [id])
    .then((result) => {
      if (result[0] != null) {
        res.json(result[0]);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postSubmitForm = (req, res) => {
  const { lastname, name, email, phone_number } = req.body;
  database
    .query(
      "INSERT INTO bookings (lastname, name, email, phone_number) VALUES (?, ?, ?, ?)",
      [lastname, name, email, phone_number]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(400).send("Message was not submitted.");
      } else {
        const newMessage = result.insertId;
        res.status(201).json(newMessage.toString());
      }
    })
    .catch((err) => {
      console.log(err);
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  getAllBookings,
  getBookingById,
  postSubmitForm,
};
