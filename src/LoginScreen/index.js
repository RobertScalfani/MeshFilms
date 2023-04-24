import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/authThunks";
import SectionHeader from "../Components/SectionHeader";

function LoginScreen() {

    const { currentUser, loading, error } = useSelector((state) => state.auth);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [attemptLogin, setAttemptLogin] = useState(false);
    const [timeToNavigate, setTimeToNavigate] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const invalidLogin = error && error.message === "Request failed with status code 404";

    React.useEffect(() => {
        if (attemptLogin) {
            dispatch(loginThunk({ username, password }));
            setAttemptLogin(false);
        }
        if (timeToNavigate) {
            navigate('/profile');
            setTimeToNavigate(false);
        }
    }, [attemptLogin, timeToNavigate]);

    if (currentUser && !invalidLogin && !loading && !timeToNavigate) {
        setTimeToNavigate(true);
    }

    return (
        <div>
            <SectionHeader title={'Login'}/>
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
                    <button className='btn btn-primary mx-1' onClick={() => setAttemptLogin(true)}>
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