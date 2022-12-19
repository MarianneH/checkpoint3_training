const Router = require("express").Router();

const deleteComment = require("../controllers/comments/deleteComment");
const getAllComments = require("../controllers/comments/getAllComments");
const getCommentById = require("../controllers/comments/getCommentById");
const postComment = require("../controllers/comments/postComment");
const updateComment = require("../controllers/comments/updateComment");

Router.get("/", getAllComments);
Router.get("/:id", getCommentById);
Router.post("/", postComment);
Router.put("/:id", updateComment);
Router.delete("/:id", deleteComment);

module.exports = Router;
