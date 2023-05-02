const express = require("express");

const router = express.Router();

module.exports = (statusService) => {
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
