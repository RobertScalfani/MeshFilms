import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchFilmsThunk} from "../services/filmsThunk";
import FilmList from "../FilmList";
import PageHeader from "../Components/PageHeader";
import {clearFilms} from "../reducers/filmsReducer";
import {useParams} from "react-router";

export const FilmSearchResults = () => {

    const params = useParams();
    const searchQuery = params.searchQuery;

    // Redux State
    const {films, loading} = useSelector(state => state.films)

    const dispatch = useDispatch();
    useEffect(() => {
        if (searchQuery) {
            dispatch(searchFilmsThunk(searchQuery));
        } else {
            dispatch(clearFilms());
        }
    }, []);


    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'Film Results for "' + searchQuery + '"'}/>
            {loading ?
                <div>
                    Loading...
                </div>
                :
                <FilmList
                    films={films}
                />
            }
        </div>
    )
}