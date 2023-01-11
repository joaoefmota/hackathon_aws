const database = require("../src/database");

const getAllVehicles = (req, res) => {
  database.query("SELECT * FROM vehicles").then((result) => {
    res.json(result[0]);
  });
};

const getVehicleById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("SELECT * FROM vehicles WHERE id=?", [id])
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

module.exports = {
  getAllVehicles,
  getVehicleById,
};
