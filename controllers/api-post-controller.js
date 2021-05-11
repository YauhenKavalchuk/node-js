const Post = require('../models/post');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getPosts = (req, res) => {
  Post
    .find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => handleError(res, error));
}

const addPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

const getPost = (req, res) => {
  Post
    .findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

const deletePost = (req, res) => {
  const { id } = req.params;
  Post
  .findByIdAndDelete(id)
  .then((post) => res.status(200).json(id))
  .catch((error) => handleError(res, error));
}

const editPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post
    .findByIdAndUpdate(id, { title, author, text }, { new: true })
    .then((post) => res.json(post))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getPosts,
  addPost,
  getPost, 
  deletePost,
  editPost,
};
