import { createSlice } from "@reduxjs/toolkit";
import {searchFilmsThunk, getFilmThunk, getUpcomingFilmsThunk} from "../services/filmsThunk";

const filmsSlice = createSlice({
    name: 'films',
    initialState: {films: [], film: {}, loading: true},
    reducers: {},
    extraReducers: {
        [searchFilmsThunk.pending]:
            (state) => {
                state.loading = true
                state.films = []
            },
        [searchFilmsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.films = payload
            },
        [searchFilmsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getFilmThunk.pending]:
            (state) => {
                state.loading = true
                state.film = {}
            },
        [getFilmThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.film = payload
            },
        [getFilmThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [getUpcomingFilmsThunk.pending]:
            (state) => {
                state.loading = true
                state.films = []
            },
        [getUpcomingFilmsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.films = payload
            },
        [getUpcomingFilmsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
    }
});

export default filmsSlice.reducer;