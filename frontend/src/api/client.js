import axios from "axios";

const client = axios.create({
  baseURL: "https://desolate-bastion-63343.herokuapp.com/api",
});

client.interceptors.request.use((req) => {
  if (localStorage.getItem("profile"))
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;

  return req;
});

export default client;
