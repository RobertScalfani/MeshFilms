import axios from "axios";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const SERVER_API_URL = 'http://localhost:4000/api'
const FOLLOWERS_URL = `${SERVER_API_URL}/followers`;

axios.defaults.withCredentials = true;
const api = axios.create({ withCredentials: true });

export const addFollowing = async (followerId, followingId) => {
    const following = {
        followerId: followerId,
        followingId: followingId
    }
    const response = await api.post(`${FOLLOWERS_URL}/addFollowing`, following);
    return response.data;
};

export const getFollowers = async (userId) => {
    const response = await api.get(`${FOLLOWERS_URL}/followers/${userId}`);
    return response.data;
};

export const getFollowing = async (userId) => {
    const response = await api.get(`${FOLLOWERS_URL}/following/${userId}`);
    return response.data;
};