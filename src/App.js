import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes, useNavigate} from "react-router";
import {SearchScreen} from "./SearchScreen";
import {DetailsScreen} from "./DetailsScreen";
import NavBar from "./NavBar";
import {HomeScreen} from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import {Link} from "react-router-dom";
import {logoutThunk} from "./services/usersThunk";

function App() {

    const { currentUser, loading } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
          <div className='container'>
              <div className=' d-flex justify-content-between py-3 px-5 border rounded-bottom border-2 mb-3 bg-primary bg-opacity-10'>
                  <h5 className='m-0 p-0'>
                      MeshFilms.com - Rate, share, and find films with friends!
                  </h5>
                  <h5 className='m-0 p-0'>
                    {currentUser ?
                        <div>
                            Logged in as {currentUser.username}.
                            <button className='btn btn-primary ms-3' onClick={() => {
                                dispatch(logoutThunk());
                                navigate("/login");
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
                          <Route path='profile' element={<ProfileScreen/>}/>
                          <Route path='search' element={<SearchScreen/>}/>
                          <Route path='details/:filmId' element={<DetailsScreen/>}/>
                      </Routes>
                  </div>
              </div>
          </div>
  );
}

export default App;
