import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/usersThunk";

function LoginScreen() {

    const { currentUser, loading, error } = useSelector((state) => state.user);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ userName, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };

    const handleRegister = async () => {

    }

    const invalidLogin = error && error.message == "Request failed with status code 404";
    const invalidRegistration = error && error.message == "Request failed with status code 409";

    return (
        <div>
            <h1>Login Screen</h1>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div>
                    <label>Username</label>
                    <input className="form-control"
                           type="text" value={userName}
                           onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control"
                           type="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className='p-2'>
                    <button className='btn btn-primary mx-1' onClick={handleLogin}>
                        Login
                    </button>
                    <button className='btn btn-primary mx-1' onClick={handleRegister}>
                        Register
                    </button>
                </div>
                {invalidLogin ?
                    <div className='text-danger'>
                        That username/password combination does not exist. Try again or register a new account.
                    </div>
                    :
                    <></>
                }
                {invalidRegistration ?
                    <div className='text-danger'>
                        That username is already taken.
                    </div>
                    :
                    <></>
                }
            </div>

        </div>
    );
}
export default LoginScreen;