import axios from "axios";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const SERVER_API_URL = 'http://localhost:4000/api'
const RATINGS_URL = `${SERVER_API_URL}/ratings`;

axios.defaults.withCredentials = true;
const api = axios.create({ withCredentials: true });

export const addRating = async (rating) => {
    const response = await api.post(`${RATINGS_URL}/addReview`, rating);
    return response.data;
};

export const getRatingsByReviewerId = async (id) => {
    const response = await api.get(`${RATINGS_URL}/user/${id}`);
    return response.data;
};

export const getRatingsByFilmId = async (id) => {
    const response = await api.get(`${RATINGS_URL}/film/${id}`);
    return response.data;
};

export const getAllRatings = async () => {
    const response = await api.get(`${RATINGS_URL}/getAllRatings`);
    return response.data;
};

export const deleteRating = async (ratingId) => {
    const response = await api.delete(`${RATINGS_URL}/${ratingId}`);
    return response.data;
}