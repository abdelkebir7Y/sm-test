const express = require("express");

const router = express.Router();

module.exports = (taskService) => {
  router.get("/", async (req, res, next) => {
    try {
      const task = await taskService.getTask();
      return res.send(task);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
