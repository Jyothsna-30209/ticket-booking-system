import React from "react";
import { useNavigate } from "react-router-dom";
import User from '../model/user';
import UserService from '../service/UserService';

function AddUsers() {
    const service = new UserService();
    const navigate = useNavigate();
    const [state, changeState] = React.useState({ user: new User() });
    const [error, setError] = React.useState({
        userNameError: '',
        passwordError: '',
        userTypeError: '',
        emailError: '',
        mobileError: ''
    });

    React.useEffect(() => {
        if (sessionStorage.getItem('userType') === 'Customer') {
            alert('Unauthorised Access to Page.');
            navigate('/links');
        }
    }, [navigate]);

    const validateForm = () => {
        let err = {};
        let isError = false;

        if (!state.user.userName) {
            err.userNameError = "User name is required.";
            isError = true;
        }
        if (!state.user.password) {
            err.passwordError = "Password is required.";
            isError = true;
        }
        if (sessionStorage.getItem('userType') === 'Admin' && !state.user.userType) {
            err.userTypeError = "User type is required.";
            isError = true;
        }
        if (!state.user.email) {
            err.emailError = "Email is required.";
            isError = true;
        } else if (!state.user.email.endsWith(".com")) {
            err.emailError = "Email must end with .com.";
            isError = true;
        }
        if (!state.user.mobileNumber) {
            err.mobileError = "Mobile number is required.";
            isError = true;
        } else if (!/^\d{10}$/.test(state.user.mobileNumber)) {
            err.mobileError = "Mobile number must be exactly 10 digits.";
            isError = true;
        }

        setError(err);
        return isError;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (sessionStorage.getItem('userType') !== 'Admin') {
            state.user.userType = 'Customer';
        }

        if (!validateForm()) {
            service.addUser(state.user)
                .then(() => navigate("/login"))
                .catch(() => alert("Problem in adding user."));
        }
    };

    return (
        <div className="outer-container">
            <style>{`
                body {
                    margin: 0;
                    font-family: 'Segoe UI', sans-serif;
                }

                .outer-container {
                    background: linear-gradient(to right, #6dd5ed, #2193b0);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }

                .form-card {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 30px;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
                    width: 100%;
                    max-width: 500px;
                }

                .form-card h2 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 25px;
                }

                .form-group {
                    margin-bottom: 15px;
                }

                .form-group label {
                    font-weight: 600;
                    display: block;
                    margin-bottom: 6px;
                }

                .form-control {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }

                .text-danger {
                    color: red;
                    font-size: 13px;
                    margin-top: 2px;
                }

                .btn {
                    width: 100%;
                    padding: 12px;
                    border: none;
                    border-radius: 8px;
                    font-weight: bold;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .btn-success {
                    background-color: #28a745;
                    color: white;
                    margin-bottom: 10px;
                }

                .btn-success:hover {
                    background-color: #218838;
                }

                .btn-secondary {
                    background-color: #007bff;
                    color: white;
                }

                .btn-secondary:hover {
                    background-color: #0056b3;
                }

                .text-center {
                    text-align: center;
                }
            `}</style>

            <form onSubmit={handleSubmit} className="form-card">
                <h2>Register New User</h2>

                <div className="form-group">
                    <label>User Name</label>
                    <input className="form-control" type="text" placeholder="Enter user name"
                        value={state.user.userName}
                        onChange={(e) => changeState({ user: { ...state.user, userName: e.target.value } })}
                    />
                    <div className="text-danger">{error.userNameError}</div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" placeholder="Enter password"
                        value={state.user.password}
                        onChange={(e) => changeState({ user: { ...state.user, password: e.target.value } })}
                    />
                    <div className="text-danger">{error.passwordError}</div>
                </div>

                {sessionStorage.getItem('userType') === 'Admin' && (
                    <div className="form-group">
                        <label>User Type</label>
                        <input className="form-control" type="text" placeholder="Enter user type"
                            value={state.user.userType}
                            onChange={(e) => changeState({ user: { ...state.user, userType: e.target.value } })}
                        />
                        <div className="text-danger">{error.userTypeError}</div>
                    </div>
                )}

                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="text" placeholder="Enter email"
                        value={state.user.email}
                        onChange={(e) => changeState({ user: { ...state.user, email: e.target.value } })}
                    />
                    <div className="text-danger">{error.emailError}</div>
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input className="form-control" type="text" placeholder="Enter mobile number"
                        value={state.user.mobileNumber}
                        onChange={(e) => changeState({ user: { ...state.user, mobileNumber: e.target.value } })}
                    />
                    <div className="text-danger">{error.mobileError}</div>
                </div>

                <button type="submit" className="btn btn-success">
                    Add User
                </button>

                <button type="button" className="btn btn-secondary"
                    onClick={() => navigate("/login")}>
                    Already Registered? Go to Login
                </button>
            </form>
        </div>
    );
}

export default AddUsers;
