import React from "react";
import {Link} from "react-router-dom";

const UserItem = (props) => {
    const user = props.user;

    return (
        <Link to={'/profile/' + user._id} className='list-group-item'>
            <div className='d-flex'>
                <div className='ms-4'>
                    <h4 className='fw-bold'>
                        {user.username}
                    </h4>
                    <div className='fw-light'>
                        {user.firstName}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default UserItem;
