import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, registerThunk} from "../services/authThunks";
import PageHeader from "../Components/PageHeader";

function LoginScreen() {

    const { currentUser, loading, error } = useSelector((state) => state.auth);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const invalidLogin = error && error.message === "Request failed with status code 404";

    const handleLogin = async () => {
        if (!currentUser) {
            await dispatch(loginThunk({ username, password }));
        }
    };

    if (currentUser && !invalidLogin && !loading) {
        navigate('/profile');
    }

    return (
        <div>
            <PageHeader title={'Login'}/>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div>
                    <label>Username</label>
                    <input className="form-control"
                           type="text" value={username}
                           onChange={(event) => setUsername(event.target.value)}
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
                    <button className='btn btn-primary mx-1' onClick={() => navigate('/register')}>
                        Register
                    </button>
                </div>
                {currentUser &&
                    <div>
                        You are already logged in.
                    </div>
                }
                {invalidLogin &&
                    <div className='text-danger'>
                        That username/password combination does not exist. Try again or register a new account.
                    </div>
                }
            </div>

        </div>
    );
}
export default LoginScreen;