import authApi from "../api/auth";
import { AUTH } from "../constants/actionTypes";

const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await authApi.login(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await authApi.register(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export default {
  signin,
  signup,
};
