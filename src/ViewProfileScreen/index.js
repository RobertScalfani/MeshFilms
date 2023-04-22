import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import {logoutThunk, updateUserThunk} from "../services/authThunks";
import PageHeader from "../Components/PageHeader";
import {getUserThunk} from "../services/usersThunks";

function ViewProfileScreen() {

    const {viewUser, loading} = useSelector(state => state.users)
    const dispatch = useDispatch();

    const params = useParams();
    console.log(params.profileId);
    console.log(JSON.stringify(viewUser));
    useEffect(() => {
        dispatch(getUserThunk(params.profileId));
    }, []);

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'Viewing Profile'}/>
            {loading ?
                <div>
                    Loading...
                </div>
                :
                <div>
                    {viewUser.username}
                </div>
            }
        </div>
    );

}

export default ViewProfileScreen;