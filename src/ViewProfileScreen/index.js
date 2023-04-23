import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import PageHeader from "../Components/PageHeader";
import {getUserThunk} from "../services/usersThunks";
import {getRatingsByReviewerIdThunk} from "../services/ratingsThunks";
import RatingsList from "../RatingsList";

function ViewProfileScreen() {

    const {viewUser, loading} = useSelector(state => state.users)
    const {ratings, loading: ratingLoading} = useSelector(state => state.ratings)
    const dispatch = useDispatch();

    const params = useParams();
    console.log(params.profileId);
    console.log(JSON.stringify(viewUser));
    useEffect(() => {
        (async () => await dispatch(getUserThunk(params.profileId)))();
        (async () => await dispatch(getRatingsByReviewerIdThunk(params.profileId)))();
    }, []);

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'Viewing Profile'}/>
            {loading || !viewUser ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    <h4>
                        Viewing @{viewUser.username}'s profile.
                    </h4>
                    <div>
                        First Name: {viewUser.firstName}
                    </div>
                    <div>
                        Last Name: {viewUser.lastName}
                    </div>
                    <div>
                        Role: {viewUser.role}
                    </div>
                    <PageHeader title={'User\'s Reviews'}/>
                    {ratings &&
                        <RatingsList
                            reviews={ratings}
                        />
                    }
                    <PageHeader title={'Following:'}/>
                    <div>
                        ...
                    </div>
                </div>

            }
        </div>
    );

}

export default ViewProfileScreen;