import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUpcomingFilmsThunk} from "../services/filmsThunk";
import FilmList from "../FilmList";

export const HomeScreen = () => {

    const {films, loading} = useSelector(state => state.films)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingFilmsThunk());
    }, []);

    console.log(films);

    /**
     * Render.
     */
    return (
        <div>
            <h2>
                Home
            </h2>
            <h4>
                Recent Reviews
            </h4>
            <div>
                ...
            </div>
            <div>
                <h4>
                    Upcoming Films
                </h4>
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
        </div>
    )
}
