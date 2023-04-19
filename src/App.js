import './App.css';
import {Provider} from "react-redux";
import filmsReducer from "./reducers/filmsReducer";
import { configureStore } from '@reduxjs/toolkit';
import {Route, Routes} from "react-router";
import {SearchScreen} from "./SearchScreen";
import {DetailsScreen} from "./DetailsScreen";
import NavBar from "./NavBar";
import {HomeScreen} from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./ProfileScreen";
import usersReducer from "./reducers/usersReducer";

const store = configureStore({
  reducer: {films: filmsReducer, user: usersReducer}
});

function App() {
  return (
      <Provider store={store}>
          <div className='container'>
              <div className=' d-flex justify-content-between py-3 px-5 border rounded-bottom border-2 mb-3 bg-primary bg-opacity-10'>
                  <h5 className='m-0 p-0'>
                      MeshFilms.com - Rate, share, and find films with friends!
                  </h5>
                  <h5 className='m-0 p-0 border rounded'>
                    Logged in as...
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
      </Provider>
  );
}

export default App;
