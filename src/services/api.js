import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backendmolina.herokuapp.com',
});

export default api;
