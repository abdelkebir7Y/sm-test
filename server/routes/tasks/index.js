const express = require("express");

const router = express.Router();

const TaskService = require("../../services/task");

module.exports = (config) => {
  const taskService = new TaskService(config.db.client);

  router.get("/all", async (req, res, next) => {
    try {
      const tasks = await taskService.getAllTasks();
      return res.json(tasks);
    } catch (err) {
      return next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const { title, description } = req.body;
      const task = await taskService.createTask(title, description);
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
