import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {logoutThunk, profileThunk, updateUserThunk} from "../services/usersThunk";
import PageHeader from "../Components/PageHeader";

function ProfileScreen() {
    const {currentUser} = useSelector((state) => state.user);
    const [updatedProfile, setUpdatedProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(updatedProfile);
    console.log(currentUser);

    const save = () => {
        dispatch(updateUserThunk(updatedProfile));
    };

    useEffect( () => {
        dispatch(profileThunk()).then((payload) => {
                setUpdatedProfile(payload)
        });
    }, []);

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'My Profile'}/>
            {updatedProfile && (
                <div>
                    <form className='d-flex align-items-center'>
                        <label className='pe-3'>First Name</label>
                        <input type="text"
                           className="form-control w-50"
                           value={updatedProfile.firstName}
                           onChange={(event) => {
                               const newProfile = {
                                   ...updatedProfile,
                                   firstName: event.target.value,
                               };
                               setUpdatedProfile(newProfile);
                           }}
                        />
                    </form>
                    <form className='d-flex align-items-center'>
                        <label className='pe-3'>Last Name</label>
                        <input type="text"
                           className="form-control w-50"
                           value={updatedProfile.lastName}
                           onChange={(event) => {
                               const newProfile = {
                                   ...updatedProfile,
                                   lastName: event.target.value,
                               };
                               setUpdatedProfile(newProfile);
                           }}
                        />
                    </form>
                </div>
            )}
            <button
                className="btn btn-primary mx-2"
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}>
                Logout</button>
            <button className="btn btn-primary mx-2" onClick={save}>Save</button>
        </div>
    );

}

export default ProfileScreen;