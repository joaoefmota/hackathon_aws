// PACKAGES
import express from "express";
import database from "./database";
import cors from "cors";
import helmet from "helmet";

import MainRouter from "./routes";

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

app.listen(PORT, (err: boolean) => {
  if (err) {
    console.error("Something bad happened");
  } else if (database.getConnection() == null) {
    console.error("Database connection failed");
    process.exit(1);
  } else {
    console.log(`Database connected.\nServer is listening on port ${PORT}`);
  }
});
