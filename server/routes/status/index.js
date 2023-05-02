const express = require("express");

const router = express.Router();

const StatusService = require("../../services/status");

module.exports = (config) => {
  const statusService = new StatusService(config);
  router.get("/", async (req, res, next) => {
    try {
      const status = await statusService.getStatus();
      return res.json(status);
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
