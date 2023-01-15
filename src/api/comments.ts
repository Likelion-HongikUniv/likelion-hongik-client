import axios from 'axios';

const baseURL = '우리 api 주소';

const client = axios.create({
  baseURL,
  // withCredentials: true, -- 필요하면
});

export default client;
