import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const iconStyle = {
        color: 'white',
        fontSize: '20px',
    };

    const iconStyle2 = {
        color: '#DCDCDC',
        fontSize: '20px',
    };

    const navStyle = {
        backgroundColor: '#3E8E41',
        padding: '10px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
        width: '100%',
        position: 'relative',
        zIndex: 999,
    };

    const logoStyle = {
        color: '#fff',
        fontWeight: '700',
        fontSize: '26px',
        marginLeft: '10px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        letterSpacing: '2px',
        textDecoration: 'none',
    };

    const linkStyle = {
        color: '#fff',
        padding: '10px 20px',
        textDecoration: 'none',
        fontSize: '18px',
        borderRadius: '30px',
        margin: '5px',
        display: 'inline-block',
        whiteSpace: 'nowrap',
    };

    const buttonStyle = {
        backgroundColor: '#FF5722',
        border: 'none',
        padding: '10px 15px',
        color: '#fff',
        borderRadius: '5px',
        fontSize: '16px',
        margin: '0 10px',
    };

    return (
        <>
            <style>{`
                .navbar {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                }

                .nav-left {
                    display: flex;
                    align-items: center;
                }

                .menu-toggle {
                    display: none;
                    font-size: 26px;
                    color: white;
                    background: none;
                    border: none;
                }
                .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
}

.nav-links ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
}


                .nav-links a, .nav-links li {
                    display: inline-block;
                }

                @media (max-width: 768px) {
                    .menu-toggle {
                        display: block;
                    }

                    .nav-links {
                        display: ${isOpen ? 'flex' : 'none'};
                        flex-direction: column;
                        width: 100%;
                        margin-top: 10px;
                        background-color: #3E8E41;
                        padding: 10px 0;
                        border-radius: 10px;
                    }

                    .nav-links a, .nav-links li {
                        width: 100%;
                        text-align: center;
                        padding: 10px 0;
                        font-size: 16px;
                    }

                    .custom-home-button {
                        width: 100%;
                        text-align: center;
                        margin-top: 10px;
                    }
                }

                @media (max-width: 480px) {
                    .navbar-brand {
                        font-size: 20px !important;
                    }

                    .nav-links a {
                        font-size: 14px;
                        padding: 8px 0;
                    }

                    .custom-home-button a {
                        font-size: 14px;
                    }
                }
            `}</style>

            <nav style={navStyle} className="navbar">
                <div className="nav-left">
                    <i className="fas fa-paper-plane mr-1" style={iconStyle}></i>
                    <Link className="navbar-brand" to="/" style={logoStyle}>MyTrip</Link>
                </div>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>

                <div className="custom-home-button">
                    <button style={buttonStyle}>
                        <a href="https://sdp3-flight-management.netlify.app/" style={{ ...linkStyle, padding: 0 }}>Home</a>
                    </button>
                </div>

                <div className="nav-links">
                    <ul className="navbar-nav">
                        {sessionStorage.getItem('userType') === 'Customer' && (
                            <>
                                <li>
                                    <Link to="/booking/view" style={linkStyle}>Your bookings</Link>
                                </li>
                                <li>
                                    <Link to="/scheduleFlight" style={linkStyle}>All flights</Link>
                                </li>
                            </>
                        )}
                        {sessionStorage.getItem('userType') === 'Admin' && (
                            <li>
                                <Link to="/links" style={linkStyle}>
                                    <i className="fas fa-user-cog" style={iconStyle2}></i> Admin Tools
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link to="/scheduleFlight/search" style={linkStyle}>
                                <i className="fas fa-plane-departure mr-1" style={iconStyle2}></i> Search Flights
                            </Link>
                        </li>
                        {sessionStorage.getItem('userId') !== null ? (
                            <li>
                                <Link to="/logout" style={linkStyle}>
                                    <i className="fas fa-sign-out-alt" style={iconStyle2}></i> Logout
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link to="/login" style={linkStyle}>
                                    <i className="fas fa-sign-in-alt" style={iconStyle2}></i> Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
