const connection = require("../../../database");

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { content, date, user } = req.body;
  const sqlQuery = `update posts set content = ?, date = ?, user = ?  where id_posts = ?`;
  connection
    .promise()
    .query(sqlQuery, [content, date, user, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    });
};
