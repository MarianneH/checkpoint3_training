const connection = require("../../../database");

module.exports = (req, res) => {
  const { content, date, user } = req.body;
  connection
    .promise()
    .query("INSERT INTO posts (content, date, user) VALUES (?, ?, ?)", [
      content,
      date,
      user,
    ])
    .then(([result]) => {
      res.location(`/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};
