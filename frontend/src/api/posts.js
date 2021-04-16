import client from "./client";

const fetchPosts = () => client.get("/");

const createPost = (newPost) => client.post("/", newPost);

const updatePost = (id, updatedPost) => client.patch(`/${id}`, updatedPost);

const removePost = (id) => client.delete(`/${id}`);

const likePost = (id) => client.patch(`/${id}/likePost`);

export default {
  fetchPosts,
  createPost,
  updatePost,
  removePost,
  likePost,
};
