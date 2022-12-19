const Router = require("express").Router();

const { getAllUsers, getUserById, postUser } = require("../controllers/users");

// Router.get("/", (req, res) => {
//   res.send("Test users Routes");
// });

Router.get("/", getAllUsers);
Router.get("/:id", getUserById);
Router.post("/", postUser);

module.exports = Router;
