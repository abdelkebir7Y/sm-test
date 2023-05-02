const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes");

module.exports = (config) => {
  const log = config.log();

  // Add a request logging middleware in development mode
  if (app.get("env") === "development") {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`);
      return next();
    });
  }

  app.use(cors());
  app.use(express.json());
  app.use("/", routes(config));

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    // Log out the error to the console
    log.error(error);
    return res.json({
      error: {
        message: error.message,
      },
    });
  });
  return app;
};
