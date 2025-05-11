import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserService from "../../user/service/UserService";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const service = new UserService();

    useEffect(() => {
        if (sessionStorage.getItem('userId') !== null) {
            navigate("/");
        }
    }, [navigate]);

    const handleCaptcha = (value) => setRecaptchaValue(value);

    const handleLogin = (e) => {
        e.preventDefault();

        if (!recaptchaValue) {
            alert("Please verify that you are not a robot.");
            return;
        }

        setIsLoading(true);

        service.loginService(userName, password)
            .then((result) => {
                if (result !== 0) {
                    alert("Login successful!");
                    service.getUserType(result.data).then((result1) => {
                        sessionStorage.setItem('userId', result.data);
                        sessionStorage.setItem('userType', result1.data);
                        sessionStorage.setItem('userName', userName);
                        window.location.reload();
                    }).catch(() => alert('Error fetching user type.'));
                }
            })
            .catch(() => {
                alert('Invalid Username/Password. Please try again!');
                window.location.reload();
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div style={{
            background: "linear-gradient(to right, #83a4d4, #b6fbff)",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "500px",
                background: "white",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                transition: "0.3s"
            }}>
                <div className="text-center mb-4">
                    <h2 style={{ color: "#007bff", fontWeight: "600" }}>
                        <i className="fas fa-sign-in-alt"></i> Login
                    </h2>
                    <p style={{ fontSize: "16px", color: "#555" }}>Welcome back! Please login to your account.</p>
                </div>

                <form>
                    <div className="form-group">
                        <label><i className="fas fa-user"></i> User Name</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter User Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            style={{ borderRadius: "12px" }}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label><i className="fas fa-lock"></i> Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ borderRadius: "12px" }}
                        />
                    </div>

                    <div className="text-center mt-4 mb-3">
                        <ReCAPTCHA
                            sitekey="6LfTJDUrAAAAAFFhhI1OcQcuR4OCdODxv3di0Cap"
                            onChange={handleCaptcha}
                        />
                    </div>

                    <div className="d-grid gap-2 mt-4">
                        <button
                            className="btn btn-primary btn-block"
                            onClick={handleLogin}
                            disabled={isLoading}
                            style={{ borderRadius: "10px", fontWeight: "500", padding: "10px" }}
                        >
                            {isLoading ? "Loading..." : <><i className="fas fa-sign-in-alt"></i> Login</>}
                        </button>

                        <button
                            className="btn btn-outline-success btn-block"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/users/add');
                            }}
                            style={{ borderRadius: "10px", fontWeight: "500", padding: "10px" }}
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
