import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF", padding: "1rem" }}>
            <div className="container text-muted position-relative">
                <a className="navbar-brand" href="/">
                    <img src='media/images/logo.svg' style={{ width: "135px" }} alt='logo' />
                </a>

                <div className="d-flex align-items-center ms-auto">
                    <ul className="navbar-nav d-none d-lg-flex flex-row gap-4 me-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" style={{color: "#666"}}>Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{color: "#666"}}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" style={{color: "#666"}}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing" style={{color: "#666"}}>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support" style={{color: "#666"}}>Support</Link>
                        </li>
                    </ul>

                    {/* Hamburger Button */}
                    <button 
                        className="navbar-toggler border-0 shadow-none d-block" 
                        type="button" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ outline: "none" }}
                    >
                        <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} fs-3`}></i>
                    </button>
                </div>

                {/* Mega Menu Dropdown */}
                {isMenuOpen && (
                    <div className="position-absolute top-100 start-0 w-100 bg-white border shadow-sm p-4 mt-2 z-3" style={{ borderRadius: "4px" }}>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4">
                                <Link to="/products" className="text-decoration-none text-dark fw-bold mb-3 d-block fs-5">Kite</Link>
                                <p className="text-muted small">Trading platform</p>
                                
                                <Link to="/products" className="text-decoration-none text-dark fw-bold mt-4 mb-3 d-block fs-5">Console</Link>
                                <p className="text-muted small">Backoffice</p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <Link to="/products" className="text-decoration-none text-dark fw-bold mb-3 d-block fs-5">Coin</Link>
                                <p className="text-muted small">Mutual funds</p>
                                
                                <Link to="/products" className="text-decoration-none text-dark fw-bold mt-4 mb-3 d-block fs-5">Kite Connect</Link>
                                <p className="text-muted small">Trading APIs</p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <h6 className="text-muted fw-bold mb-3">Utilities</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Calculators</a></li>
                                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Brokerage calculator</a></li>
                                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Margin calculator</a></li>
                                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">SIP calculator</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4">
                                <h6 className="text-muted fw-bold mb-3">Education & Updates</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Varsity</a></li>
                                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Trading Q&A</a></li>
                                    <li className="mb-2 mt-3"><a href="#" className="text-decoration-none text-dark">Z-Connect blog</a></li>
                                    <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Market updates</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;