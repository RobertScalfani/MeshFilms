import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchFilmsThunk} from "../services/filmsThunk";
import FilmList from "../FilmList";

export const SearchResultsScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [search, setSearch] = React.useState(false);

    const {films, loading} = useSelector(state => state.films)
    const dispatch = useDispatch();
    useEffect(() => {
        if (search) {
            dispatch(searchFilmsThunk(searchQuery));
        }
        setSearch(false);
    }, [search]);

    /**
     * Render.
     */
    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Search for a film</label>
                    <input type="text" className="form-control" id="film-search" placeholder='Search' onChange={(event) => setSearchQuery(event.target.value)}/>
                </div>
            </form>
            <button className='btn btn-primary' onClick={() => setSearch(true)}>
                Search
            </button>
            {loading ?
                <div>
                    Loading...
                </div>
                :
                <FilmList
                    films={films}
                />
            }
        </div>
    )
}
