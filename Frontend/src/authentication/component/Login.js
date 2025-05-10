import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserSerivce from "../../user/service/UserService";

function Login() {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const service = new UserSerivce();

    useEffect(() => {
        if (sessionStorage.getItem('userId') !== null) {
            navigate("/");
        }
    }, [navigate]);

    const pageStyle = {
        backgroundColor: "#f0f8ff",
        minHeight: "100vh",
        padding: "40px 0"
    };

    const cardStyle = {
        maxWidth: "500px",
        margin: "0 auto",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        backgroundColor: "white"
    };

    const inputStyle = {
        borderRadius: "10px"
    };

    const headingStyle = {
        marginBottom: "25px",
        color: "#007bff"
    };

    return (
        <div style={pageStyle}>
            <div className="jumbotron text-center" style={{ backgroundColor: "#e6f2ff", borderRadius: "10px" }}>
                <h3><i className="fas fa-paper-plane mr-2"></i> Supporting You Through Your Travel Journey</h3>
                <h5>Let the journey begin</h5>
            </div>

            <div style={cardStyle}>
                <h2 className="text-center" style={headingStyle}><i className="fas fa-sign-in-alt"></i> Login</h2>

                <form>
                    <div className="form-group">
                        <label><i className="fas fa-user"></i> User Name</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter User Name"
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label><i className="fas fa-key"></i> Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    <div className="text-center mt-4">
                        <button
                            className="btn btn-primary btn-block mb-2"
                            onClick={(e) => {
                                e.preventDefault();
                                service.loginService(userName, password).then((result) => {
                                    if (result !== 0) {
                                        alert("Login credentials are valid.");
                                        service.getUserType(result.data).then((result1) => {
                                            sessionStorage.setItem('userId', result.data);
                                            sessionStorage.setItem('userType', result1.data);
                                            sessionStorage.setItem('userName', userName);
                                            window.location.reload();
                                        }).catch(() => {
                                            alert('User type error.');
                                        });
                                    }
                                }).catch(() => {
                                    alert('Invalid Username/Password. Please try again!');
                                    window.location.reload();
                                });
                            }}
                        >
                            <i className="fas fa-sign-in-alt"></i> Login
                        </button>

                        <button
                            className="btn btn-success btn-block"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/users/add');
                            }}
                        >
                            <i className="fas fa-user-plus"></i> New Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
