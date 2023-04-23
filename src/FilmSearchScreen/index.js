import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import PageHeader from "../Components/PageHeader";
import {clearFilms} from "../reducers/filmsReducer";
import {Route, Routes, useNavigate, useParams} from "react-router";
import {FilmSearchResults} from "./FilmSearchResults";

export const FilmSearchScreen = () => {

    const params = useParams();
    const navigate = useNavigate();

    // Local state.
    const [searchQuery, setSearchQuery] = React.useState(params.searchQuery);

    const submitSearch = () => {
        navigate(`/search/${searchQuery}`);
    }

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'Film Search'}/>
            <form className='d-flex justify-content-end mb-2'>
                <div className="form-group w-100 me-3">
                    <input type="text" className="form-control" id="film-search" placeholder='Film Search' onChange={(event) => setSearchQuery(event.target.value)}/>
                </div>
                <button className='btn btn-primary' onClick={submitSearch}>
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <Routes>
                <Route path="/:searchQuery" element={<FilmSearchResults/>}/>
            </Routes>
        </div>
    )
}
