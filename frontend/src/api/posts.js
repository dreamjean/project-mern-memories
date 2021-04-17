import client from "./client";

const endPoint = "/posts";

const fetchPosts = () => client.get(endPoint);

const createPost = (newPost) => client.post(endPoint, newPost);

const updatePost = (id, updatedPost) =>
  client.patch(endPoint + `/${id}`, updatedPost);

const removePost = (id) => client.delete(endPoint + `/${id}`);

const likePost = (id) => client.patch(endPoint + `/${id}/likePost`);

export default {
  fetchPosts,
  createPost,
  updatePost,
  removePost,
  likePost,
};
