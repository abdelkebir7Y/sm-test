const bunyan = require("bunyan");
// Load package.json
const pjs = require("../package.json");

// Get some meta info from the package.json
const { name, version } = pjs;

// Set up a logger
const getLogger = (serviceName, serviceVersion, level) =>
  bunyan.createLogger({ name: `${serviceName}:${serviceVersion}`, level });

// Configuration options for different environments
module.exports = {
  development: {
    db: {
      options: {
        host: "localhost",
        port: 5432,
        database: "sm_test",
        dialect: "postgres",
        username: "postgres",
        password: "password",
        logging: (msg) => getLogger(name, version, "debug").info(msg),
      },
      client: null,
    },
    log: () => getLogger(name, version, "debug"),
  },
  production: {
    //options for production
  },
};
