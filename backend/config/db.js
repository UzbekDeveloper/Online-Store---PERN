const { Sequelize } = require("sequelize");

const db = require("./db-config")

module.exports = new Sequelize(
  db.DB_NAME,
  db.DB_USER,
  db.DB_PASSWORD,
  {
    dialect: "postgres",
    host: db.DB_HOST,
    port: db.DB_PORT,
  }
);
