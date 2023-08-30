import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_HEADER_AUTH
    }
});

export const get = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_HEADER_AUTH
    }
});

const auth = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
        Authorization: import.meta.env.VITE_HEADER_AUTH
    },
})
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_HEADER_AUTH;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export { api, auth };