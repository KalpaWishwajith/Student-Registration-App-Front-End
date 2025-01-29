import axios from 'axios';

const baseURL = 'http://localhost:5203/v1/'; 

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;