import React, {useEffect} from "react";
import SectionHeader from "./SectionHeader";
import UsersList from "../UsersList";
import {useDispatch, useSelector} from "react-redux";
import {getFollowersThunk, getFollowingThunk} from "../services/followersThunks";

const FollowStatus = (props) => {

    const userId = props.userId;
    const {followingList, followerList} = useSelector(state => state.followers)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => await dispatch(getFollowingThunk(userId)))();
        (async () => await dispatch(getFollowersThunk(userId)))();
    }, []);

    return (
        <div>
            <SectionHeader title={'Following'}/>
            <div className='mb-3'>
                <UsersList
                    users={followingList}
                    callback={props.callback}
                />
            </div>
            <SectionHeader title={'Followers'}/>
            <div className='mb-3'>
                <UsersList
                    users={followerList}
                    callback={props.callback}
                />
            </div>
        </div>

    );
}

export default FollowStatus;