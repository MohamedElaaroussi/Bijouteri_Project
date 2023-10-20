// axiosInstance.js

import axios from 'axios';

const Instance = axios.create({
  baseURL: process.env.VERCEL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default Instance;
