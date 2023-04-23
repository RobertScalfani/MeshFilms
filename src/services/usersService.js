import axios from "axios";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const SERVER_API_URL = 'http://localhost:4000/api'
const USERS_URL = `${SERVER_API_URL}/users`;

axios.defaults.withCredentials = true;
const api = axios.create({ withCredentials: true });

export const getAllUsers = async () => {
    const response = await api.get(`${USERS_URL}/allUsers`);
    return response.data;
};

export const getUser = async (id) => {
    const response = await api.get(`${USERS_URL}/getUser/${id}`);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await api.delete(`${USERS_URL}/deleteUser/${id}`);
    return response.data;
};