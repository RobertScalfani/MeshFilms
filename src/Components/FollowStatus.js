import React, {useEffect} from "react";
import PageHeader from "./PageHeader";
import UsersList from "../UsersList";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, profileThunk} from "../services/authThunks";
import {getRatingsByReviewerIdThunk} from "../services/ratingsThunks";
import {getFollowersThunk, getFollowingThunk} from "../services/followersThunks";

const FollowStatus = (props) => {

    const userId = props.userId;

    const {followingList, followerList} = useSelector(state => state.followers)

    console.log(followerList);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => await dispatch(getFollowingThunk(userId)))();
        (async () => await dispatch(getFollowersThunk(userId)))();
    }, []);

    return (
        <div>
            <PageHeader title={'Following'}/>
            <div className='mb-3'>
                <UsersList
                    users={followingList}
                />
            </div>
            <PageHeader title={'Followers'}/>
            <div className='mb-3'>
                <UsersList
                    users={followerList}
                />
            </div>
        </div>

    );
}

export default FollowStatus;