import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = loginData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3002/login",
                { email, password },
                { withCredentials: true }
            );

            if (data.success) {
                console.log("Logged in!");
                window.location.href = "http://localhost:3001";
            }
        } catch (err) {
            console.error("Login attempt failed:", err);
            
            if (err.response && err.response.data && err.response.data.message) {
                alert(err.response.data.message);
            } else {
                alert("Something went wrong with the login process. Please try again later.");
            }
        }

        setLoginData(prev => ({ ...prev, password: "" }));
    };

    return (
        <div className="container p-5 mb-5 mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8 col-sm-12 p-5 border rounded shadow-sm bg-white">
                    <h2 className="mb-4 text-center fw-bold">Welcome back</h2>
                    <p className="text-center text-muted mb-4">Please log in to your account to continue</p>
                    
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="form-label text-muted">Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="name@example.com"
                                className="form-control form-control-lg bg-light"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label text-muted">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Enter password"
                                className="form-control form-control-lg bg-light"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-lg w-100 py-3 mb-3 fw-semibold shadow-sm text-white" style={{ backgroundColor: '#387ed1', border: 'none' }}>
                            Access Dashboard
                        </button>
                        <hr className="my-4 text-muted" />
                        <p className="text-center text-muted">
                            New here? <Link to="/signup" className="text-decoration-none fw-semibold" style={{ color: '#387ed1' }}>Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
