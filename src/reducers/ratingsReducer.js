import { createSlice } from "@reduxjs/toolkit";
import {
    addRatingThunk,
    getAllRatingsThunk,
    getRatingsByFilmIdThunk,
    getRatingsByReviewerIdThunk
} from "../services/ratingsThunks";

const ratingsSlice = createSlice({
    name: 'ratings',
    initialState: {ratings: [], loading: true},
    extraReducers: {
        [addRatingThunk.fulfilled]: (state, {payload}) => {},
        [getRatingsByReviewerIdThunk.pending]:
            (state) => {
                state.loading = true
                state.ratings = []
            },
        [getRatingsByReviewerIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.ratings = payload
            },
        [getRatingsByReviewerIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.ratings = []
            },
        [getRatingsByFilmIdThunk.pending]:
            (state) => {
                state.loading = true
                state.ratings = []
            },
        [getRatingsByFilmIdThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.ratings = payload
            },
        [getRatingsByFilmIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.ratings = []
            },
        [getAllRatingsThunk.pending]:
            (state) => {
                state.loading = true
                state.ratings = []
            },
        [getAllRatingsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.ratings = payload
            },
        [getAllRatingsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.ratings = []
            },
    }
});

export default ratingsSlice.reducer;