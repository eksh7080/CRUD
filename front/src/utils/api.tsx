import axios, { AxiosRequestConfig } from 'axios';

// const BASE_URL = 'http://localhost:8080/';
const BASE_URL = 'http://mooncloud.shop';
const LOGIN_TOKEN = localStorage.getItem('token');

const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${LOGIN_TOKEN}`, 'Content-Type': 'application/json' },
};

export const API = axios.create(axiosConfig);
// API.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
