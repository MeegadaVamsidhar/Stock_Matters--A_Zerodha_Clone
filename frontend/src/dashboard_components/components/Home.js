import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
    const navigate = useNavigate();
    const [userContext, setUserContext] = useState(null);

    useEffect(() => {
        const checkUserAuth = async () => {
            const userToken = Cookies.get("token");
            if (!userToken) {
                // If the token is missing, redirect to the landing page login
                window.location.href = "http://localhost:3000/login";
                return;
            }

            try {
                // Verify the token with the backend
                const { data } = await axios.post(
                    "http://localhost:3002",
                    {},
                    { withCredentials: true }
                );

                if (data.status) {
                    setUserContext(data.user);
                } else {
                    // Token is invalid, clear it and redirect
                    Cookies.remove("token");
                    window.location.href = "http://localhost:3000/login";
                }
            } catch (err) {
                console.error("Auth verification failed:", err);
                window.location.href = "http://localhost:3000/login";
            }
        };

        checkUserAuth();
    }, [navigate]);

    return (
        <div className="home-layout">
            <TopBar username={userContext} />
            <Dashboard />
        </div>
    );
};

export default Home;
