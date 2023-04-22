import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {

    const users = props.users;

    return (
        <ul className='list-group'>
            {users.map(user => {
                return (
                    <UserItem
                        user={user}
                    />
                );
            })}
        </ul>
    );
}

export default UserList;