const connection = require("../../../database");

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { content, date, user, post } = req.body;
  const sqlQuery = `update comments set content = ?, date = ?, user = ? , post = ? where id_comments = ?`;
  connection
    .promise()
    .query(sqlQuery, [content, date, user, post, id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    });
};
