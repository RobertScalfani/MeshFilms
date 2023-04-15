import { createSlice } from "@reduxjs/toolkit";
import {searchFilmsThunk, getFilmThunk} from "../services/filmsThunk";

const filmsSlice = createSlice({
    name: 'films',
    initialState: {films: [], loading: false},
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
            }
    }
});

export default filmsSlice.reducer;