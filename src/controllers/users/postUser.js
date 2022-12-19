const connection = require("../../../database");

module.exports = (req, res) => {
  const { username } = req.body;
  connection
    .promise()
    .query("INSERT INTO users(username) VALUES (?)", [username])
    .then(([result]) => {
      res.location(`/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};
