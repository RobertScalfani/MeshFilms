import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUpcomingFilmsThunk} from "../services/filmsThunk";
import FilmList from "../FilmList";
import SectionHeader from "../Components/SectionHeader";
import {getAllRatingsThunk, getRatingsByReviewerIdThunk} from "../services/ratingsThunks";
import RatingsList from "../RatingsList";

export const HomeScreen = () => {

    const {currentUser} = useSelector(state => state.auth)
    const {films, loading} = useSelector(state => state.films)
    const {ratings} = useSelector(state => state.ratings)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUpcomingFilmsThunk());
        if (currentUser) {
            (async () => dispatch(getRatingsByReviewerIdThunk(currentUser._id)))();
        } else {
            (async () => dispatch(getAllRatingsThunk()))();
        }
    }, []);

    /**
     * Render.
     */
    return (
        <div>
            <SectionHeader title={'Home'}/>
            <div className='mb-3 p-2 border rounded ps-3'>
                On the home page, you can see recent reviews and check out upcoming films!
            </div>
            <div className='mb-3'>
                {currentUser ?
                    <SectionHeader title={'Your Recent Reviews'}/>
                    :
                    <SectionHeader title={'All Recent Reviews'}/>
                }
                <RatingsList
                    reviews={ratings}
                />
            </div>
            <div className='mb-3'>
                <SectionHeader title={'Upcoming Films'}/>
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
