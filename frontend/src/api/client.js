import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000/api",
});

client.interceptors.request.use((req) => {
  if (localStorage.getItem("profile"))
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;

  return req;
});

export default client;
