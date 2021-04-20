import client from "./client";

const endPoint = "/user";

const login = (formData) => client.post(endPoint + "/signin", formData);

const register = (formData) => client.post(endPoint + "/signup", formData);

export default {
  login,
  register,
};
