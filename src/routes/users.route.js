const Router = require("express").Router();

const { getAllUsers, getUserById, postUser } = require("../controllers/users");
const deleteUser = require("../controllers/users/deleteUser");
const getAllUserComments = require("../controllers/users/getAllUserComments");
const getAllUserPosts = require("../controllers/users/getAllUserPosts");
const updateUser = require("../controllers/users/updateUser");

// Router.get("/", (req, res) => {
//   res.send("Test users Routes");
// });

Router.get("/", getAllUsers);
Router.get("/:id", getUserById);
Router.get("/:id/posts", getAllUserPosts);
Router.get("/:id/comments", getAllUserComments);
Router.delete("/id", deleteUser);
Router.put("/:id", updateUser);
Router.post("/", postUser);

module.exports = Router;
