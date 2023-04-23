import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilmThunk} from "../services/filmsThunk";
import {useParams} from "react-router";
import PageHeader from "../Components/PageHeader";
import {addRatingThunk, getRatingsByFilmIdThunk} from "../services/ratingsThunks";
import RatingsList from "../RatingsList";
import {current} from "@reduxjs/toolkit";

export const DetailsScreen = () => {

    // Local state.
    const [rating, setRating] = React.useState();
    const [review, setReview] = React.useState();

    const {film, loading: filmLoading} = useSelector(state => state.films)
    const {currentUser} = useSelector(state => state.users)
    const {ratings, loading: ratingLoading} = useSelector(state => state.ratings)
    const dispatch = useDispatch();

    const params = useParams();
    useEffect(() => {
        (async () => dispatch(getFilmThunk(params.filmId)))();
        (async () => dispatch(getRatingsByFilmIdThunk(params.filmId)))();
    }, []);

    const submitRating = async () => {
        const ratingObject = {
            reviewerId: currentUser ? currentUser._id : "guest",
            filmId: film.id,
            rating: rating,
            review: review
        }
        await dispatch(addRatingThunk(ratingObject));
    }

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'Details'}/>
            { filmLoading || !film.titleText ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    {film.primaryImage ?
                        <img src={film.primaryImage.url} className='rounded m-2' style={{height: '400px'}}/>
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
                            Release Year: {film.releaseYear.year}
                        </h4>
                    </div>
                    <PageHeader title={'Write a Rating'}/>
                    <form className=''>
                        <div className="form-group w-100">
                            <input type="number" className="form-control" id="film-search" placeholder='Enter a rating from 1-5' onChange={(event) => setRating(event.target.value)}/>
                        </div>
                        <div className="form-group w-100">
                            <input type="text" className="form-control" id="film-search" placeholder='Enter Review' onChange={(event) => setReview(event.target.value)}/>
                        </div>
                        <button className='btn btn-primary' onClick={submitRating}>
                            Submit Review
                        </button>
                    </form>
                    <PageHeader title={'Ratings for this Film'}/>
                    <RatingsList
                        reviews={ratings}
                    />
                </div>
            }
        </div>
    )
}
