import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        username: "",
    });

    const { email, password, username } = signupData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3002/signup",
                { ...signupData },
                { withCredentials: true }
            );

            if (data.success) {
                console.log("Account created!");
                alert("Account successfully created! You can now log in.");
                navigate("/login");
            }
        } catch (err) {
            console.error("Signup error:", err);

            if (err.response && err.response.data && err.response.data.message) {
                alert(err.response.data.message);
            } else {
                alert("Something went wrong with the registration process. Please try again.");
            }
        }

        setSignupData(prev => ({ ...prev, password: "" }));
    };

    return (
        <div className="container py-5 mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-10 text-center d-none d-lg-block">
                    <img 
                        src="media/images/signup.png" 
                        style={{ width: "85%", borderRadius: "8px" }} 
                        alt="Signup" 
                        className="shadow-sm"
                    />
                </div>
                <div className="col-lg-5 col-md-10 col-sm-12 p-5 border rounded shadow-sm bg-white">
                    <h2 className="mb-4 text-center fw-bold">Open a new account</h2>
                    <p className="text-center text-muted mb-4 fs-6">Sign up with Stock Matters today</p>
                    
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <label className="form-label text-muted">Email address</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="name@email.com"
                                className="form-control form-control-lg bg-light"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-muted">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Choose a username"
                                className="form-control form-control-lg bg-light"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-muted">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Create a password"
                                className="form-control form-control-lg bg-light"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-lg w-100 py-3 mt-3 fw-semibold shadow-sm text-white" style={{ backgroundColor: '#387ed1', border: 'none' }}>
                            Create Account
                        </button>
                    </form>
                    
                    <hr className="my-4 text-muted" />
                    <p className="text-center text-muted m-0">
                        Already have an account? <Link to="/login" className="text-decoration-none fw-semibold" style={{ color: '#387ed1' }}>Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;