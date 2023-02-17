import axios from "axios";

const baseURL = "http://13.125.72.138:8080";

const client = axios.create({
  baseURL,
  // withCredentials: true,
});

export default client;
