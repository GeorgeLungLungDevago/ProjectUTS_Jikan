const express = require("express");
const cors = require("cors");
const pino = require("pino-http");
const routes = require("../api/routes");
const { errorResponder, errorTypes } = require("./errors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(pino());

// Base route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Jikan API" });
});

// API routes
app.use("/api", routes());

// Error handling
app.use((req, res, next) => {
  next(errorTypes.ROUTE_NOT_FOUND_ERROR());
});

app.use(errorResponder);

module.exports = app;
