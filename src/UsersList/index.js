import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {

    const users = props.users;

    if (users.length < 1) {
        return (
            <ul className='list-group'>
                <li className='list-group-item'>
                    No users to show.
                </li>
            </ul>
        );
    }

    return (
        <ul className='list-group'>
            {users.map(user => {
                return (
                    <UserItem
                        key={user._id}
                        user={user}
                        isAdmin={props.isAdmin}
                        deleteCallback={props.deleteCallback}
                        callback={props.callback}
                    />
                );
            })}
        </ul>
    );
}

export default UserList;