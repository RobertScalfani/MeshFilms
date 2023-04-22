import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./usersService"

export const getAllUsersThunk = createAsyncThunk('users/getAllUsers', async () => {
    return await service.getAllUsers();
});

export const getUserThunk = createAsyncThunk('users/getUser/', async (id) => {
    return await service.getUser(id);
});