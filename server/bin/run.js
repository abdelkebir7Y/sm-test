const http = require("http");
const Sequelize = require("sequelize");

const config = require("../config")[process.env.NODE_ENV || "development"];

const log = config.log();

const connectToDatabase = function () {
  const sequelize = new Sequelize(config.db.options);
  sequelize
    .authenticate()
    .then(() => log.info("Connection has been established successfully."))
    .catch((error) => {
      log.error("Unable to connect to the database:", error);
      process.exit();
    });
  return sequelize;
};

const dbClient = connectToDatabase();

config.db.client = dbClient;

const app = require("../app")(config);

const server = http.createServer(app);

server.listen(process.env.PORT || 4000);

server.on("listening", () => {
  log.info(
    `Hi there! I'm listening on port ${server.address().port} in ${app.get(
      "env"
    )} mode.`
  );
});
