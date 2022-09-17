const dotenv = require("dotenv");
const express = require("express");
const sequelize = require("./config/db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/");
const errorHandler = require("./middleware/ErrorHandlingMiddleware")

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// error processing, middlewares
app.use(errorHandler);

// Setting configuration files
dotenv.config({ path: "config/config.env" });

const db = require("./config/db-config");

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(process.env.PORT, () => {
      console.log("====================================");
      console.log(`Server started on port: ${process.env.PORT}`);
      console.log("====================================");
    });
  } catch (e) {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  }
};

start();
