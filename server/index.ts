import express, { Application } from "express";
import compression from "compression";
import helmet from "helmet";
import { connect } from "mongoose";

import { logDbSuccess, logServerStart } from "./helpers/";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app: Application = express();

const PORT = process.env.PORT ?? "5000";

// connect to db
const DB_URI = process.env.MONGO_URI ?? "localdb";

connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(logDbSuccess)
  .catch((err) => console.error(err)); //TODO: handle connection errors

// Middlewares
app.use(helmet());
app.use(compression());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello"));

// start server
app.listen(PORT, logServerStart(PORT));
