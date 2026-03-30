import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import Menu from "./Menu";

const TopBar = ({ username }) => {
    const [indices, setIndices] = useState({
        nifty: { price: "Loading...", percent: "", isDown: false },
        sensex: { price: "Loading...", percent: "", isDown: false }
    });

    useEffect(() => {
        // Fetch Live Market Indices Data from Yahoo Finance api proxy
        // ^NSEI for NIFTY 50, ^BSESN for SENSEX
        axios.get("http://localhost:3002/stock?symbols=^NSEI,^BSESN")
            .then(res => {
                const liveData = res.data;
                const fetchedNifty = liveData.find(item => item.symbol === "^NSEI");
                const fetchedSensex = liveData.find(item => item.symbol === "^BSESN");

                if (fetchedNifty || fetchedSensex) {
                    setIndices({
                        nifty: fetchedNifty ? {
                            price: fetchedNifty.price.toLocaleString("en-IN", { minimumFractionDigits: 2 }),
                            percent: `${fetchedNifty.isDown ? "" : "+"}${fetchedNifty.percent}`,
                            isDown: fetchedNifty.isDown
                        } : indices.nifty,
                        sensex: fetchedSensex ? {
                            price: fetchedSensex.price.toLocaleString("en-IN", { minimumFractionDigits: 2 }),
                            percent: `${fetchedSensex.isDown ? "" : "+"}${fetchedSensex.percent}`,
                            isDown: fetchedSensex.isDown
                        } : indices.sensex
                    });
                }
            })
            .catch(err => console.error("Could not fetch indices", err));
            // eslint-disable-next-line
    }, []);

    const handleSignOut = () => {
        Cookies.remove("token");
        window.location.href = "http://localhost:3000/login";
    };

    return (
        <div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index">NIFTY 50</p>
                    <p className="index-points">{indices.nifty.price}</p>
                    <p className={`percent ${indices.nifty.isDown ? "down" : "up"}`}>{indices.nifty.percent}</p>
                </div>
                <div className="sensex">
                    <p className="index">SENSEX</p>
                    <p className="index-points">{indices.sensex.price}</p>
                    <p className={`percent ${indices.sensex.isDown ? "down" : "up"}`}>{indices.sensex.percent}</p>
                </div>
            </div>
            
            <div className="user-nav">
                {username ? (
                    <div className="user-profile">
                        <span className="welcome-text">Hi, {username}</span>
                        <button className="logout-btn" onClick={handleSignOut}>Logout</button>
                    </div>
                ) : null}
            </div>

            <Menu />
        </div>
    );
};

export default TopBar;
