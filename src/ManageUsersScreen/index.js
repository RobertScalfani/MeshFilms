import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SectionHeader from "../Components/SectionHeader";
import UsersList from "../UsersList";
import {getAllUsersThunk} from "../services/usersThunks";

export const ManageUsersScreen = () => {

    const {currentUser} = useSelector(state => state.auth)
    const {users, loading} = useSelector(state => state.users)
    const dispatch = useDispatch();

    const [reload, setReload] = React.useState(false);

    useEffect(() => {
        dispatch(getAllUsersThunk());
    }, [reload]);

    /**
     * Render.
     */
    return (
        <div>
            <SectionHeader title={'Manage Users'}/>
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
                        isAdmin={currentUser.role === 'admin'}
                        deleteCallback={() => setReload(!reload)}
                    />
                }
            </div>
        </div>
    )
}
