import axios from 'axios';

// API source:
// https://rapidapi.com/SAdrian/api/moviesdatabase

const API_BASE = 'https://moviesdatabase.p.rapidapi.com'
const API_KEY = '81a524888fmshca67cb3bc3a7a40p1475a9jsnae115d6e699e'
const API_HOST = 'moviesdatabase.p.rapidapi.com'

export const searchFilms = async (searchQuery) => {

    const options = {
        method: 'GET',
        url: API_BASE + '/titles/search/title/' + searchQuery,
        params: {exact: 'false'},
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };

    const data = await axios.request(options).then(function (response) {
        return response.data;
    });
    console.log(data.results);
    return data.results;
};

export const getFilm = async (id) => {

    const options = {
        method: 'GET',
        url: API_BASE + '/titles/x/titles-by-ids',
        params: {idsList: id},
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };

    const data = await axios.request(options).then(function (response) {
        return response.data;
    });
    console.log(data.results);
    return data.results;
};