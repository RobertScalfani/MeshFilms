import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import PageHeader from "../Components/PageHeader";
import {getUserThunk} from "../services/usersThunks";
import {getRatingsByReviewerIdThunk} from "../services/ratingsThunks";
import RatingsList from "../RatingsList";
import {addFollowingThunk} from "../services/followersThunks";
import FollowStatus from "../Components/FollowStatus";

function ViewProfileScreen() {

    const {viewUser, loading} = useSelector(state => state.users)
    const {currentUser} = useSelector(state => state.auth)
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
                    <div className=' d-flex mb-3 justify-content-between'>
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
                        </div>
                        <div>
                            <button className='btn btn-primary' onClick={() => dispatch(addFollowingThunk({followerId: currentUser._id, followingId: viewUser._id}))}>
                                Follow this user
                            </button>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <PageHeader title={'User\'s Reviews'}/>
                        {ratings &&
                            <RatingsList
                                reviews={ratings}
                            />
                        }
                    </div>
                    {viewUser &&
                        <FollowStatus
                            userId={viewUser._id}
                        />
                    }
                </div>

            }
        </div>
    );

}

export default ViewProfileScreen;