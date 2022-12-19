const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery = "select * from posts;";
  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => res.send(result));
};
