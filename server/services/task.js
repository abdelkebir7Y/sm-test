const Models = require("../models");

class TaskService {
  #tasks = [
    {
      id: 1,
      title: "Laborum tempor ",
      description: "Id occaecat Lorem ea exercitation eu est.",
      listId: 1,
      createAt: new Date(),
      updateAt: new Date(),
    },
    {
      id: 2,
      title: "Non aliquip consectetur ",
      description:
        "Sunt eiusmod ex laborum sunt enim excepteur proident fugiat aliqua laboris.",
      listId: 3,
      createAt: new Date(),
      updateAt: new Date(),
    },
    {
      id: 3,
      title: "Quis ad dolor",
      description:
        "Labore id adipisicing reprehenderit ut nisi non esse incididunt tempor magna.",
      listId: 2,
      createAt: new Date(),
      updateAt: new Date(),
    },
  ];

  constructor(sequelize) {
    Models(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async getTask() {
    return this.#tasks;
  }

  async createTask(title, description) {
    try {
      const task = await this.models.Task.create({ title, description });
      return task;
    } catch (err) {
      return err;
    }
  }

  async deleteTask(id) {
    const filteredTasks = this.#tasks.filter((task) => task.id !== id);
    this.#tasks = filteredTasks;
    return id;
  }

  async updateTask(id, title, description, listId) {
    const taskIndex = this.#tasks.findIndex((task) => task.id === id);
    this.#tasks[taskIndex] = { id, title, description, listId };
    return this.#tasks[taskIndex];
  }
}

module.exports = TaskService;
