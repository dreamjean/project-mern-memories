import userApi from "../api/user";
import { AUTH } from "../constants/actionTypes";

const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await userApi.login(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await userApi.register(formData);

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
