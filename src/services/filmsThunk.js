import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./filmsService"

export const getFilmThunk = createAsyncThunk('films/getFilm', async (id) => {
   return await service.getFilm(id);
});

export const searchFilmsThunk = createAsyncThunk('films/searchFilms', async (searchQuery) => {
   return await service.searchFilms(searchQuery);
});