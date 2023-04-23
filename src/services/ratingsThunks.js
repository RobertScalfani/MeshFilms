import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./ratingsService"

export const addRatingThunk = createAsyncThunk('ratings/addRating', async (rating) => {
    return await service.addRating(rating);
});

export const getRatingsByReviewerIdThunk = createAsyncThunk('ratings/getByUser', async (userId) => {
    return await service.getRatingsByReviewerId(userId);
});

export const getRatingsByFilmIdThunk = createAsyncThunk('ratings/getByFilm', async (filmId) => {
    return await service.getRatingsByFilmId(filmId);
});

export const getAllRatingsThunk = createAsyncThunk('users/getAllRatings', async () => {
    return await service.getAllRatings();
});