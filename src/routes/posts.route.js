const Router = require("express").Router();

const deletePost = require("../controllers/posts/deletePost");
const getAllCommentsByPostId = require("../controllers/posts/getAllCommentsByPostId");
const getAllPosts = require("../controllers/posts/getAllPosts");
const getPostById = require("../controllers/posts/getPostById");
const postPost = require("../controllers/posts/postPost");
const updatePost = require("../controllers/posts/updatePost");

Router.get("/", getAllPosts);
Router.get("/:id", getPostById);
Router.get("/:id/comments", getAllCommentsByPostId);
Router.post("/", postPost);
Router.put("/:id", updatePost);
Router.delete("/:id", deletePost);

module.exports = Router;
