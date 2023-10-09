import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.82.218.46:5000', 
});

export default api;