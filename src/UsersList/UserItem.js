import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUserThunk} from "../services/usersThunks";

const UserItem = (props) => {

    const dispatch = useDispatch();

    const user = props.user;

    // if (!user.firstName) {
    //     user.firstName = '[No First name Given]'
    // }
    // if (!user.lastName) {
    //     user.lastName = '[No First name Given]'
    // }

    return (
         <div className='list-group-item'>
              <div className='d-flex justify-content-between align-items-center'>
                <Link to={'/profile/' + user._id} className='ms-4 w-75 list-group-item p-0 m-0 border-0'>
                    <h4 className='fw-bold'>
                        {user.username}
                    </h4>
                    <div className='fw-light'>
                        Name: {user.firstName} {user.lastName}
                    </div>
                 </Link>
                  {props.isAdmin &&
                        <button className='btn btn-danger h-50' onClick={async () => {
                            await dispatch(deleteUserThunk(user._id))
                            props.deleteCallback();
                        }}>
                            Delete User
                        </button>
                  }
            </div>
        </div>
    );
}

export default UserItem;
