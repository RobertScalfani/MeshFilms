import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../services/authThunks";
import PageHeader from "../Components/PageHeader";

function LoginScreen() {

    // Redux State.
    const { currentUser, loading, error } = useSelector((state) => state.auth);

    // Local state.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [role, setRole] = useState("user");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const invalidLogin = error && error.message === "Request failed with status code 404";
    const invalidRegistration = error && error.message === "Request failed with status code 409";

    const handleRegister = async () => {
        const newUser = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthDate: birthDate,
            role: role
        }
        await dispatch(registerThunk(newUser));
        navigate('/profile');
    }

    if (currentUser && !invalidLogin && !invalidRegistration && !loading) {
        navigate('/profile');
    }

    return (
        <div>
            <PageHeader title={'Register'}/>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <div>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Username</label>
                        <input type="text" className="form-control" style={{width: '250px'}}
                               onChange={(event) => setUsername(event.target.value)}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Password</label>
                        <input type="password" className="form-control" style={{width: '250px'}}
                               onChange={(event) => setPassword(event.target.value)}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>First Name</label>
                        <input type="text" className="form-control" style={{width: '250px'}}
                               onChange={(event) => setFirstName(event.target.value)}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Last Name</label>
                        <input type="text" className="form-control" style={{width: '250px'}}
                               onChange={(event) => setLastName(event.target.value)}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Email</label>
                        <input type="email" className="form-control" style={{width: '250px'}}
                               onChange={(event) => setEmail(event.target.value)}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Birthdate</label>
                        <input type="date" className="form-control" style={{width: '250px'}}
                               onChange={(event) => setBirthDate(event.target.value)}
                        />
                    </form>
                    <form className='d-flex align-items-center pb-2'>
                        <label className='pe-3' style={{width: '100px'}}>Role</label>
                        <select className="form-select" style={{width: '250px'}} onChange={(event) => setRole(event.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </form>
                </div>
                <button className='btn btn-primary' onClick={handleRegister}>
                    Register
                </button>
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