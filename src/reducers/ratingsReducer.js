import { createSlice } from "@reduxjs/toolkit";
import {addRatingThunk, getRatingsByFilmIdThunk, getRatingsByReviewerIdThunk} from "../services/ratingsThunks";

const ratingsSlice = createSlice({
    name: 'ratings',
    initialState: {ratings: [], loading: true},
    reducers: {},
    extraReducers: {
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
        [addRatingThunk.fulfilled]:
            (state, {payload}) => {
                // state.loading = false
                // state.ratings = payload
            },
    }
});

export default ratingsSlice.reducer;