const express = require("express");

const router = express.Router();

const tasksRoute = require("./tasks");
const statusRoute = require("./status");

module.exports = (config) => {
  router.get("/", (req, res) => {
    res.send("Home Page");
  });

  router.use("/task", tasksRoute(config));
  router.use("/status", statusRoute(config));

  return router;
};
