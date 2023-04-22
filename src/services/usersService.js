import axios from "axios";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const SERVER_API_URL = 'http://localhost:4000/api'
const USERS_URL = `${SERVER_API_URL}/users`;

axios.defaults.withCredentials = true;
const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, {
        username,
        password,
    });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response;
};

export const profile = async () => {
    const response = await api.get(`${USERS_URL}/profile`);
    return response.data;
};

export const updateUser = async (user) => {
    console.log("JKJKJKJKJK");
    user = user.updatedProfile;
    console.log(user);
    const response = await api.put(`${USERS_URL}/${user['_id']}`, user);
    console.log(response.data);
    return user;
};

export const register = async ({ username, password }) => {
    const body = {
        username: username,
        password: password
    };
    const response = await api.post(`${USERS_URL}/register`, body);
    return response.data;
};