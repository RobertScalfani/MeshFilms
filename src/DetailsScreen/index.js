import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilmThunk} from "../services/filmsThunk";
import {useParams} from "react-router";

export const DetailsScreen = () => {

    const {film, loading} = useSelector(state => state.films)
    const dispatch = useDispatch();

    const params = useParams();
    console.log(JSON.stringify(film));
    useEffect(() => {
        dispatch(getFilmThunk(params.filmId));
    }, []);

    /**
     * Render.
     */
    return (
        <div>
            { loading ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    {film.id}
                </div>
            }
        </div>
    )
}
