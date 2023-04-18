import { createSlice } from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk, updateUserThunk} from "../services/usersThunk";


const usersSlice = createSlice({
    name: "users",
    initialState: { currentUser: null, loading: true, error: null},
    reducers: {},
    extraReducers: {
        [loginThunk.pending]: (state, { payload }) => {
            state.loading = true;
            state.currentUser = null;
            state.error = null;
        },
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.currentUser = payload;
            state.error = null;
        },
        [loginThunk.rejected]: (state, action) => {
            state.loading = false;
            state.currentUser = null;
            state.error = action.error
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.pending]: (state, { payload }) => {
            state.loading = true;
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload
        },
    },
});
export default usersSlice.reducer;