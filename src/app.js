const express = require("express");
const connection = require("../database");
const { usersRoute, commentsRoute } = require("./routes");

connection
  .promise()
  .query("use mydb;")
  .catch((e) => console.error(e));

const app = express();
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/comments", commentsRoute);

module.exports = app;
