import axios from 'axios';

console.log('pre', process.env);

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000,
});

export default axiosInstance;