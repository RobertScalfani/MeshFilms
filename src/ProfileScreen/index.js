import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {logoutThunk, profileThunk, updateUserThunk} from "../services/usersThunk";

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
            <h1>Profile Screen</h1>
            {updatedProfile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input type="text"
                               value={updatedProfile.firstName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...updatedProfile,
                                       firstName: event.target.value,
                                   };
                                   setUpdatedProfile(newProfile);
                               }}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"
                               value={updatedProfile.lastName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...updatedProfile,
                                       lastName: event.target.value,
                                   };
                                   setUpdatedProfile(newProfile);
                               }}
                        />
                    </div>
                </div>
            )}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}>
                Logout</button>
            <button onClick={save}>Save</button>
        </div>
    );

}

export default ProfileScreen;