const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery = "SELECT * FROM users;";
  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => res.send(result));
};
