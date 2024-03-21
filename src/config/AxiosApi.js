import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 120000,
    headers: {
        "Content-Type": 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
});
