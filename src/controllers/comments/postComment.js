const connection = require("../../../database");

module.exports = (req, res) => {
  const { content, date, user, post } = req.body;
  connection
    .promise()
    .query(
      "INSERT INTO comments (content, date, user, post) VALUES (?, ?, ?, ?)",
      [content, date, user, post]
    )
    .then(([result]) => {
      res.location(`/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};
