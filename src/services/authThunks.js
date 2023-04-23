import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "./authService";

export const loginThunk = createAsyncThunk("user/login", async (credentials) => {
    return await userService.login(credentials);
});

export const profileThunk = createAsyncThunk("user/profile", async () => {
    return await userService.profile();
});

export const logoutThunk = createAsyncThunk("user/logout", async () => {
    return await userService.logout();
});

export const updateUserThunk = createAsyncThunk("user/updateUser", async (user) => {
    return await userService.updateUser(user);
});

export const registerThunk = createAsyncThunk("user/registerUser", async ({username, password}) => {
    return await userService.register({username, password});
});