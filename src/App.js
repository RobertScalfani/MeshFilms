import './App.css';
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes, useNavigate} from "react-router";
import {FilmSearchScreen} from "./FilmSearchScreen";
import {DetailsScreen} from "./DetailsScreen";
import NavBar from "./NavBar";
import {HomeScreen} from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import MyProfileScreen from "./MyProfileScreen";
import {logoutThunk} from "./services/authThunks";
import {ManageUsersScreen} from "./ManageUsersScreen";
import ViewProfileScreen from "./ViewProfileScreen";
import {PeopleSearchScreen} from "./PeopleSearchScreen";
import RegisterScreen from "./RegisterScreen";

function App() {

    const { currentUser, loading } = useSelector((state) => state.auth);

    const [timeToLogout, setTimeToLogout] = React.useState(false);

    React.useEffect(() => {
        if (timeToLogout) {
            const logout = async () => {
                await dispatch(logoutThunk());
                navigate("/login");
                setTimeToLogout(false);
            }
            logout();
        }
    }, [timeToLogout]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
          <div className='container'>
              <div className=' d-flex justify-content-between py-3 px-5 border rounded-bottom border-2 mb-3 bg-primary bg-opacity-10'>
                  <h5 className='m-0 p-0'>
                      MeshFilms.com - Rate films and see your friend's ratings!
                  </h5>
                  <h5 className='m-0 p-0'>
                    {currentUser ?
                        <div>
                            Logged in as @{currentUser.username}.
                            <button className='btn btn-danger ms-3' onClick={() => {
                                dispatch(logoutThunk());
                                setTimeToLogout(true);
                            }}>
                                Log out
                            </button>
                        </div>
                        :
                        <div>
                            You are not logged in.
                            <button className='btn btn-primary ms-3' onClick={() => {
                                navigate("/login");
                            }}>
                                Log In
                            </button>
                        </div>
                    }
                  </h5>
              </div>
              <div className='row'>
                  <div className='col-2'>
                      <NavBar />
                  </div>
                  <div className='col-10'>
                      <Routes>
                          <Route index path="home" element={<HomeScreen/>}/>
                          <Route path='login' element={<LoginScreen/>}/>
                          <Route path='register' element={<RegisterScreen/>}/>
                          <Route path='profile' element={<MyProfileScreen/>}/>
                          <Route path='profile/:profileId' element={<ViewProfileScreen/>}/>
                          <Route path='peopleSearch' element={<PeopleSearchScreen/>}/>
                          <Route path='search/*' element={<FilmSearchScreen/>}/>
                          <Route path='details/:filmId' element={<DetailsScreen/>}/>
                          <Route path='manage' element={<ManageUsersScreen/>}/>
                      </Routes>
                  </div>
              </div>
          </div>
  );
}

export default App;
