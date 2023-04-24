import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchFilmsThunk} from "../services/filmsThunk";
import FilmList from "../FilmList";
import SectionHeader from "../Components/SectionHeader";
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
            const search = async () => dispatch(searchFilmsThunk(searchQuery));
            search();
        } else {
            dispatch(clearFilms());
        }
    }, []);


    /**
     * Render.
     */
    return (
        <div>
            <SectionHeader title={'Film Results for "' + searchQuery + '"'}/>
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
