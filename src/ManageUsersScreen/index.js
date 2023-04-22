import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUpcomingFilmsThunk} from "../services/filmsThunk";
import FilmList from "../FilmList";
import PageHeader from "../Components/PageHeader";

export const ManageUsersScreen = () => {

    const {users, loading} = useSelector(state => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingFilmsThunk());
    }, []);

    console.log(films);

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'Home'}/>
            <h4>
                Recent Reviews
            </h4>
            <div>
                ...
            </div>
            <div>
                <h4>
                    Upcoming Films
                </h4>
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
        </div>
    )
}
