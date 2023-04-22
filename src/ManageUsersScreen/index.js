import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PageHeader from "../Components/PageHeader";
import UsersList from "../UsersList";
import {getAllUsersThunk} from "../services/usersThunks";

export const ManageUsersScreen = () => {

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
            <PageHeader title={'Manage Users'}/>
            <div>
                <h4>
                    All users:
                </h4>
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
        </div>
    )
}
