import express, { Application } from "express";
import moment from "moment";
import compression from "compression";
import helmet from "helmet";
import { connect } from "mongoose";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app: Application = express();

const PORT = process.env.PORT ?? "5000";

// connect to db
const DB_URI = process.env.MONGO_URI ?? "localdb";

connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(`${moment().format()}: Connection to database success`)
  )
  .catch((err) => console.error(err));

// Middlewares
app.use(helmet());
app.use(compression());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello"));

// start server
app.listen(PORT, () =>
  console.log(
    `${moment().format()}: Server running on http://localhost:${PORT}`
  )
);
