const express = require("express");

const router = express.Router();

module.exports = (taskService) => {
  router.get("/", async (req, res, next) => {
    try {
      const tasks = await taskService.getTask();
      return res.json(tasks);
    } catch (err) {
      return next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const { title, description } = req.body;
      const task = await taskService.addTask(title, description);
      return res.json(task);
    } catch (err) {
      return next(err);
    }
  });

  router.put("/", async (req, res, next) => {
    try {
      const { id, title, description, listId } = req.body;
      const task = await taskService.updateTask(id, title, description, listId);
      return res.json(task);
    } catch (err) {
      return next(err);
    }
  });

  router.delete("/", async (req, res, next) => {
    try {
      const { id } = req.body;
      const taskId = await taskService.deleteTask(id);
      return res.json(taskId);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
