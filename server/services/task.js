const Models = require("../models");

class TaskService {
  constructor(sequelize) {
    Models(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async getAllTasks() {
    try {
      const tasks = await this.models.Task.findAll();
      return tasks;
    } catch (err) {
      return err;
    }
  }

  async createTask(title, description) {
    try {
      const task = await this.models.Task.create({ title, description });
      return task;
    } catch (err) {
      return err;
    }
  }

  async updateTask(id, title, description) {
    try {
      await this.models.Task.update({ title, description }, { where: { id } });
      return "ok";
    } catch (err) {
      return err;
    }
  }

  async deleteTask(id) {
    try {
      await this.models.Task.destroy({ where: { id } });
      return "ok";
    } catch (err) {
      return err;
    }
  }
}

module.exports = TaskService;
