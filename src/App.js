import './App.css';
import {Provider} from "react-redux";
import filmsReducer from "./reducers/filmsReducer";
import { configureStore } from '@reduxjs/toolkit';
import {Route, Routes} from "react-router";
import {SearchResultsScreen} from "./SearchResultsScreen";
import {BrowserRouter} from "react-router-dom";
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
      <BrowserRouter>
          <Provider store={store}>
              <div>
                  <NavBar />
              </div>
            <Routes>
                <Route index path="home" element={<HomeScreen/>}/>
                <Route path='login' element={<LoginScreen/>}/>
                <Route path='profile' element={<ProfileScreen/>}/>
                <Route path='search' element={<SearchResultsScreen/>}/>
                <Route path='details/:filmId' element={<DetailsScreen/>}/>
            </Routes>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
