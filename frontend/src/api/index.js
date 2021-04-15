import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000/posts",
});

const fetchPosts = () => client.get("/");

const createPost = (newPost) => client.post("/", newPost);

const updatePost = (id, updatedPost) => client.patch(`/${id}`, updatedPost);

export default {
  fetchPosts,
  createPost,
  updatePost,
};
