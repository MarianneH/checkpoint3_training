const connection = require("../../../database");

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const sqlQuery = `select * from posts where id_posts = ?`;
  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => res.send(result));
};
