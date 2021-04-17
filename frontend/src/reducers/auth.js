import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, acthData: action?.data };

    case LOGOUT:
      localStorage.removeItem("profile");

      return { ...state, acthData: null };

    default:
      return state;
  }
};

export default authReducer;
