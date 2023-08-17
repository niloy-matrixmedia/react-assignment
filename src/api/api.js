import axios from "axios";

const token = localStorage.getItem('token');

const api = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' + token },
});

export default api;
