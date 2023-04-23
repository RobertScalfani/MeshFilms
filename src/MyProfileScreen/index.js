import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {logoutThunk, profileThunk, updateUserThunk} from "../services/authThunks";
import PageHeader from "../Components/PageHeader";
import RatingsList from "../RatingsList";
import {getRatingsByReviewerIdThunk} from "../services/ratingsThunks";

function MyProfileScreen() {

    // Redux state.
    const {currentUser} = useSelector((state) => state.auth)
    const {ratings, loading} = useSelector(state => state.ratings)

    const [updatedProfile, setUpdatedProfile] = useState(currentUser);
    const [attemptLogout, setAttemptLogout] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (attemptLogout) {
            const logout = async () => {
                await dispatch(logoutThunk());
                navigate("/login");
                setAttemptLogout(false);
            }
            logout();
        }
        else if (currentUser) {
            (async () => await dispatch(getRatingsByReviewerIdThunk(currentUser._id)))();
        }
        dispatch(profileThunk());
    }, [attemptLogout]);

    const save = async () => {
        await dispatch(updateUserThunk({updatedProfile}));
    };

    /**
     * If the user is not logged in.
     */
    if (!updatedProfile) {
        return (
            <div>
                <PageHeader title={'My Profile'}/>
                <div className='d-flex justify-content-center'>
                    <h4>
                        You are not logged in.
                    </h4>
                    <button className='btn btn-primary ms-3' onClick={() => {
                        navigate("/login");
                    }}>
                        Log In
                    </button>
                </div>
            </div>
        );
    }

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'My Profile'}/>
            {updatedProfile &&
                <div>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Username</label>
                        <input type="text" className="form-control w-50" value={updatedProfile.username}
                               onChange={(event) => {setUpdatedProfile({
                                   ...updatedProfile,
                                   username: event.target.value});
                               }}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>First Name</label>
                        <input type="text" className="form-control w-50" value={updatedProfile.firstName}
                           onChange={(event) => {setUpdatedProfile({
                                   ...updatedProfile,
                                   firstName: event.target.value});
                           }}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Last Name</label>
                        <input type="text" className="form-control w-50" value={updatedProfile.lastName}
                               onChange={(event) => {setUpdatedProfile({
                                   ...updatedProfile,
                                   lastName: event.target.value});
                               }}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Email</label>
                        <input type="email" className="form-control w-50" value={updatedProfile.email}
                               onChange={(event) => {setUpdatedProfile({
                                   ...updatedProfile,
                                   email: event.target.value});
                               }}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Birthdate</label>
                        <input type="date" className="form-control w-50" value={new Date(updatedProfile.birthDate).toISOString().substring(0,10)}
                               onChange={(event) => {setUpdatedProfile({
                                   ...updatedProfile,
                                   birthDate: new Date(event.target.value).toDateString()
                               })}}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Role</label>
                        <select className="form-select w-50" defaultValue={updatedProfile.role} onChange={(event) => {setUpdatedProfile({...updatedProfile, role: event.target.value})}}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </form>
                    <div className='d-flex justify-content-center mb-3'>
                        <button className="btn btn-primary mx-2" style={{width: '125px'}} onClick={save}>Save Changes</button>
                        <button className="btn btn-danger mx-2" style={{width: '125px'}}
                                onClick={() => setAttemptLogout(true)}>Logout
                        </button>
                    </div>
                </div>
            }
            <PageHeader title={'My Ratings'}/>
            {ratings &&
                <RatingsList
                    reviews={ratings}
                />
            }
        </div>
    );

}

export default MyProfileScreen;