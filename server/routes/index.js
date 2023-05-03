const express = require("express");

const router = express.Router();

const tasksRoute = require("./tasks");

module.exports = (config) => {
  router.get("/", (req, res) => {
    res.send("Home Page");
  });

  router.use("/task", tasksRoute(config));

  return router;
};
