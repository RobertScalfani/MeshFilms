import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilmThunk} from "../services/filmsThunk";
import {useParams} from "react-router";

export const DetailsScreen = () => {

    const {film, loading} = useSelector(state => state.films)
    const dispatch = useDispatch();

    const params = useParams();
    console.log(params.filmId);
    console.log(JSON.stringify(film));
    useEffect(() => {
        dispatch(getFilmThunk(params.filmId));
    }, []);

    /**
     * Render.
     */
    return (
        <div>
            <h1>
                Details
            </h1>
            { loading ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    {film.primaryImage ?
                        <img src={film.primaryImage.url} className='rounded m-2' style={{height: '500px'}}/>
                        :
                        <div>
                            No image available.
                        </div>
                    }
                    <div>
                        <h2>
                            {film.titleText.text}
                        </h2>
                        <h4 className='fw-light'>
                            {film.releaseYear.year}
                        </h4>
                    </div>
                </div>
            }
        </div>
    )
}
