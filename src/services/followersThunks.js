import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./followersService"

export const addFollowingThunk = createAsyncThunk('followers/addFollowing', async ({followerId, followingId}) => {
    console.log(followerId)
    console.log(followingId)
    return await service.addFollowing(followerId, followingId);
});

export const getFollowingThunk = createAsyncThunk('followers/getFollowing', async (userId) => {
    return await service.getFollowing(userId);
});

export const getFollowersThunk = createAsyncThunk('followers/getFollowers', async (userId) => {
    return await service.getFollowers(userId);
});