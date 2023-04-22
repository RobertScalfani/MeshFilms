import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {logoutThunk, profileThunk, updateUserThunk} from "../services/usersThunk";
import PageHeader from "../Components/PageHeader";

function ProfileScreen() {
    const {currentUser} = useSelector((state) => state.user)
    const [updatedProfile, setUpdatedProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(updatedProfile);
    // console.log(currentUser);

    const save = async () => {
        console.log("POPOP");
        console.log(updatedProfile);
        const {payload} = await dispatch(updateUserThunk({updatedProfile}));
        console.log("LLLL");
        console.log(payload);
    };

    useEffect(() => {
        // dispatch(profileThunk()).then(({payload}) => {
        //     setUpdatedProfile(payload);
        // });
        // setUpdatedProfile(useSelector((state) => state.user));
    }, []);

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'My Profile'}/>
            {updatedProfile ? (
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
                        <input type="date" className="form-control w-50" value={updatedProfile.birthDate}
                               onChange={(event) => {setUpdatedProfile({
                                   ...updatedProfile,
                                   birthDate: event.target.value});
                               }}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Role</label>
                        <select className="form-select w-50">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </form>

                    <button className="btn btn-primary mx-2"
                            onClick={() => {
                                dispatch(logoutThunk());
                                navigate("/login");
                            }}>
                        Logout</button>
                    <button className="btn btn-primary mx-2" onClick={save}>Save</button>
                </div>
            ) :
                <div className='d-flex'>
                    <h4>
                        You are not logged in.
                    </h4>
                    <button className='btn btn-primary ms-3' onClick={() => {
                        navigate("/login");
                    }}>
                        Log In
                    </button>
                </div>
            }
        </div>
    );

}

export default ProfileScreen;