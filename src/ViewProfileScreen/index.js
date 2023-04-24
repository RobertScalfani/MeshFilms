import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import SectionHeader from "../Components/SectionHeader";
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

    const [reload, setReload] = React.useState(false);

    const params = useParams();
    useEffect(() => {
        (async () => await dispatch(getUserThunk(params.profileId)))();
        (async () => await dispatch(getRatingsByReviewerIdThunk(params.profileId)))();
    }, [reload]);

    /**
     * Render.
     */
    return (
        <div>
            <SectionHeader title={'Viewing Profile'}/>
            {loading || !viewUser ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    <div className='d-flex mb-3 justify-content-between p-3 border rounded'>
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
                            {(currentUser && currentUser.role === 'premium') ?
                                <button className='btn btn-primary' onClick={() => dispatch(addFollowingThunk({followerId: currentUser._id, followingId: viewUser._id}))}>
                                    Follow this user
                                </button>
                                :
                                <div className='p-2 border rounded'>
                                    You must be a premium user to follow users.
                                </div>
                            }
                        </div>
                    </div>
                    <div className='mb-3'>
                        <SectionHeader title={'User\'s Reviews'}/>
                        {ratings &&
                            <RatingsList
                                reviews={ratings}
                            />
                        }
                    </div>
                    {viewUser &&
                        <FollowStatus
                            userId={viewUser._id}
                            callback={() => setReload(!reload)}
                        />
                    }
                </div>

            }
        </div>
    );

}

export default ViewProfileScreen;