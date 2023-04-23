import { createSlice } from "@reduxjs/toolkit";
import {addFollowingThunk, getFollowersThunk, getFollowingThunk} from "../services/followersThunks";

const followersSlice = createSlice({
    name: 'followers',
    initialState: {followingList: [], followerList: [], loading: true},
    extraReducers: {
        [addFollowingThunk.fulfilled]: (state, {payload}) => {},
        [getFollowersThunk.pending]:
            (state) => {
                state.loading = true
                state.followerList = []
            },
        [getFollowersThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.followerList = payload
            },
        [getFollowersThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.followerList = []
            },
        [getFollowingThunk.pending]:
            (state) => {
                state.loading = true
                state.followingList = []
            },
        [getFollowingThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.followingList = payload
            },
        [getFollowingThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.followingList = []
            },
    }
});

export default followersSlice.reducer;