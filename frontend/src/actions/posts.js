import postsApi from "../api/posts";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await postsApi.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await postsApi.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await postsApi.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = (id) => async (dispatch) => {
  try {
    await postsApi.removePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {
    const { data } = await postsApi.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
