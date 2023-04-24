import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilmThunk} from "../services/filmsThunk";
import {useParams} from "react-router";
import SectionHeader from "../Components/SectionHeader";
import {addRatingThunk, getRatingsByFilmIdThunk} from "../services/ratingsThunks";
import RatingsList from "../RatingsList";

export const DetailsScreen = () => {

    // Local state.
    const [rating, setRating] = React.useState();
    const [review, setReview] = React.useState();

    const {film, loading: filmLoading} = useSelector(state => state.films);
    const {currentUser} = useSelector(state => state.auth);
    const {ratings, loading: ratingLoading} = useSelector(state => state.ratings);
    const [reloadRatings, setReloadRatings] = React.useState(false);
    const dispatch = useDispatch();

    const params = useParams();
    const filmId = params.filmId;
    useEffect(() => {
        (async () => dispatch(getFilmThunk(filmId)))();
        (async () => dispatch(getRatingsByFilmIdThunk(filmId)))();
    }, [reloadRatings]);

    const submitRating = async () => {
        const ratingObject = {
            reviewerId: currentUser ? currentUser._id : "guest",
            filmId: filmId,
            reviewerUsername: currentUser ? currentUser.username : "guest",
            filmName: film.titleText.text,
            rating: rating,
            review: review
        };
        console.log("Submitting Review: " + JSON.stringify(ratingObject));
        await dispatch(addRatingThunk(ratingObject));
        setReloadRatings(!reloadRatings);
    }

    /**
     * Render.
     */
    return (
        <div>
            <SectionHeader title={'Details'}/>
            { filmLoading || !film.titleText ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    <div className='p-2 border rounded mb-3'>
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
                    </div>
                    <SectionHeader title={'Write a Review'}/>
                    <div className='mb-3 rounded border p-2'>
                        {currentUser ?
                            <div>
                                <form className='d-flex pb-2 form-group'>
                                    <label style={{width: '125px'}}>My Rating:</label>
                                    <select className="form-select" onChange={(event) => setRating(event.target.value)}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </form>
                                <form className='d-flex pb-2 form-group'>
                                    <label style={{width: '125px'}}>My Review:</label>
                                    <textarea type="text" className="form-control" id="film-search" placeholder='Enter Review' onChange={(event) => setReview(event.target.value)}/>
                                </form>
                                <div className='d-flex justify-content-center'>
                                    <button className='btn btn-primary' onClick={submitRating}>
                                        Submit Review
                                    </button>
                                </div>
                            </div>
                            :
                            <div className='border border-1 rounded'>
                                <h5 className='p-3 m-0'>
                                    You must be logged in to submit a review.
                                </h5>
                            </div>
                        }
                    </div>
                    <SectionHeader title={'Reviews for this Film'}/>
                    <div className='mb-5'>
                        <RatingsList
                            reviews={ratings}
                        />
                    </div>
                </div>
            }
        </div>
    )
}
