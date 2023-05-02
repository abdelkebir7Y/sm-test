class StatusService {
  #lists = [
    {
      id: 1,
      title: "To do",
    },
    {
      id: 2,
      title: "In progress ",
    },
    {
      id: 3,
      title: "Done",
    },
  ];

  async getStatus() {
    return this.#lists;
  }
}

module.exports = StatusService;
