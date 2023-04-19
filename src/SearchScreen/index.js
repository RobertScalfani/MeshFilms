import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchFilmsThunk} from "../services/filmsThunk";
import FilmList from "../FilmList";
import PageHeader from "../Components/PageHeader";

export const SearchScreen = () => {

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
            <PageHeader title={'Film Search'}/>
            <form className='d-flex justify-content-end mb-2'>
                <div className="form-group w-100 me-3">
                    <input type="text" className="form-control" id="film-search" placeholder='Film Search' onChange={(event) => setSearchQuery(event.target.value)}/>
                </div>
                <button className='btn btn-primary' onClick={() => setSearch(true)}>
                    <i className="bi bi-search"></i>
                </button>
            </form>
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
