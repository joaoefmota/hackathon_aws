// PACKAGES
const express = require("express");
const database = require("./database");
const cors = require("cors");
const helmet = require("helmet");

const MainRouter = require("./routes");

const PORT = process.env.EXPRESS_APP_PORT || "5000";
const FRONT = process.env.FRONTEND_PORT || "http://localhost:3000";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: FRONT,
  })
);

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.use("/api", MainRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else if (database.getConnection() == null) {
    console.error("Database connection failed");
    process.exit(1);
  } else {
    console.log(`Database connected.\nServer is listening on port ${PORT}`);
  }
});
