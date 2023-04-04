import axios from "axios";

const baseURL = "https://api.likelionhongik.com";

const client = axios.create({
  baseURL,
  // withCredentials: true,
});

export default client;
