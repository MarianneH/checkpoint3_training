const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery = "select * from comments;";
  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => res.send(result));
};
