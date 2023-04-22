import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter} from "react-router-dom";
import userReducer from "./reducers/usersReducer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./reducers/filmsReducer";

const store = configureStore({
    reducer: {films: filmsReducer, user: userReducer}
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
