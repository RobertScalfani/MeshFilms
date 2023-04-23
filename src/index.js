import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./reducers/filmsReducer";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/usersReducer";
import ratingsReducer from "./reducers/ratingsReducer";
import followersReducer from "./reducers/followersReducer";

const store = configureStore({
    reducer: {films: filmsReducer, auth: authReducer, users: usersReducer, ratings: ratingsReducer, followers: followersReducer}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
      </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
