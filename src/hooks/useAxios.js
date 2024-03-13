import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 120000,
    headers: {
        "Content-Type": 'application/json',
    }
});