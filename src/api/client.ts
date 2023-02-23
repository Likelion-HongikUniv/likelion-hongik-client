import axios from "axios";

const baseURL = "https://www.hongiklikelion.click";

const client = axios.create({
  baseURL,
  // withCredentials: true,
});

export default client;
