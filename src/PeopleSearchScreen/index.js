import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PageHeader from "../Components/PageHeader";
import UsersList from "../UsersList";
import {getAllUsersThunk} from "../services/usersThunks";
import {searchFilmsThunk} from "../services/filmsThunk";

export const PeopleSearchScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const [search, setSearch] = React.useState(false);

    const {users, loading} = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersThunk());
    }, []);

    console.log(users);

    /**
     * Render.
     */
    return (
        <div>
            <PageHeader title={'User Search'}/>
            <form className='d-flex justify-content-end mb-2'>
                <div className="form-group w-100 me-3">
                    <input type="text" className="form-control" id="user-search" placeholder='Search for Users' onChange={(event) => setSearchQuery(event.target.value)}/>
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
                <UsersList
                    users={users}
                />
            }
        </div>
    )
}
