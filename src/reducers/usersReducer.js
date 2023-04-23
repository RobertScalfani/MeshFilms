import { createSlice } from "@reduxjs/toolkit";
import {getAllUsersThunk, getUserThunk, deleteUserThunk} from "../services/usersThunks";

const usersSlice = createSlice({
    name: 'users',
    initialState: {users: [], viewUser: null, loading: true},
    reducers: {},
    extraReducers: {
        [getAllUsersThunk.pending]:
            (state) => {
                state.loading = true
                state.users = []
            },
        [getAllUsersThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.users = payload
            },
        [getAllUsersThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.users = []
            },
        [getUserThunk.pending]:
            (state) => {
                state.loading = true
                state.viewUser = null
            },
        [getUserThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.viewUser = payload
            },
        [deleteUserThunk.pending]:
            (state) => {
                state.loading = true
            },
        [deleteUserThunk.fulfilled]:
            (state) => {
                state.loading = false
            },
    }
});

export default usersSlice.reducer;