const connection = require("../../../database");

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { username } = req.body;
  const sqlQuery = `update users set username = ? where id_users = ?`;
  connection
    .promise()
    .query(sqlQuery, [username, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    });
};
