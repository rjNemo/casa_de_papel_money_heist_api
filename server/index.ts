import express, { Application } from "express";
import moment from "moment";
import compression from "compression";
import helmet from "helmet";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app: Application = express();

const PORT = process.env.PORT ?? "5000";

// Middlewares
app.use(helmet());
app.use(compression());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello"));

// start server
app.listen(PORT, () =>
  console.log(
    ` ${moment().format()}: Server running on http://localhost:${PORT}`
  )
);
