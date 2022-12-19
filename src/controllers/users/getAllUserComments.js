const connection = require("../../../database");

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const sqlQuery = `SELECT * FROM comments WHERE user = ?`;
  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => res.send(result));
};
