const connection = require("../../../database");

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const sqlQuery = `select * from comments where id_comments = ?`;
  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => res.send(result));
};
