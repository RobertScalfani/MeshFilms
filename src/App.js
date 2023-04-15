import './App.css';
import {Provider} from "react-redux";
import filmsReducer from "./reducers/filmsReducer";
import { configureStore } from '@reduxjs/toolkit';
import {Route, Routes} from "react-router";
import {SearchResultsScreen} from "./SearchResultsScreen";
import {BrowserRouter} from "react-router-dom";

const store = configureStore({
  reducer: {films: filmsReducer}
});

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
            <Routes>
              <Route index element={<SearchResultsScreen/>}/>
            </Routes>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
