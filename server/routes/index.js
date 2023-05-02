const express = require("express");

const router = express.Router();

const tasksRoute = require("./tasks");
const statusRoute = require("./status");

module.exports = (params) => {
  router.get("/", (req, res) => {
    res.send("Home Page");
  });

  router.use("/task", tasksRoute(params.tasksService));
  router.use("/status", statusRoute(params.statusService));

  return router;
};
