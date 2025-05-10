import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const iconStyle = {
        color: 'white',
        fontSize: '20px',
    };

    const iconStyle2 = {
        color: '#DCDCDC',
        fontSize: '20px',
    };

    const navStyle = {
        backgroundColor: '#3E8E41', // Green background for a fresh and professional look
        padding: '15px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)', // Enhanced shadow for depth
        width: '100%',
    };

    const logoStyle = {
        color: '#fff',
        fontWeight: '700',
        fontSize: '26px',
        marginLeft: '10px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        letterSpacing: '2px',
    };

    const linkStyle = {
        color: '#fff',
        padding: '10px 20px',
        textDecoration: 'none',
        fontSize: '18px',
        borderRadius: '30px', // Rounded corners for the links
        margin: '5px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    };

    const linkHoverStyle = {
        backgroundColor: '#6BBF73', // Lighter green shade on hover
        transform: 'scale(1.05)', // Slightly enlarges on hover
    };

    const buttonStyle = {
        backgroundColor: '#FF5722', // Vibrant color for action buttons
        border: 'none',
        padding: '10px 15px',
        color: '#fff',
        borderRadius: '5px',
        fontSize: '16px',
        margin: '0 10px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#FF784E',
        transform: 'scale(1.05)', // Enlarges button slightly on hover
    };

    return (
        <nav style={navStyle} className="navbar navbar-expand-lg">
            <i className="fas fa-paper-plane mr-1" style={iconStyle}></i>
            <Link className="navbar-brand" to={{ pathname: "/" }} style={logoStyle}>MyTrip</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <button style={buttonStyle}>
                <a href="https://sdp3-flight-management.netlify.app/" style={linkStyle}>Home</a>
            </button>

            <div className="collapse navbar-collapse ml-1" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {sessionStorage.getItem('userType') === 'Customer' ? (
                        <div className='form-inline'>
                            <li className="nav-item">
                                <Link className='nav-link' to={{ pathname: "/booking/view" }} style={linkStyle}>
                                    Your bookings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={{ pathname: "/scheduleFlight" }} style={linkStyle}>
                                    All flights
                                </Link>
                            </li>
                        </div>
                    ) : null}
                    {sessionStorage.getItem('userType') === 'Admin' ? (
                        <li className="nav-item">
                            <Link className='nav-link' to={{ pathname: "/links" }} style={linkStyle}>
                                <i className="fas fa-user-cog" style={iconStyle2}></i> Admin Tools
                            </Link>
                        </li>
                    ) : null}
                </ul>
                <div className='navbar-nav'>
                    <span className='form-inline'>
                        <Link className='nav-link' to={{ pathname: "/scheduleFlight/search" }} style={linkStyle}>
                            <i className="fas fa-plane-departure mr-1" style={iconStyle2}></i> Search Flights
                        </Link>
                        {sessionStorage.getItem('userId') !== null ? (
                            <Link className='nav-link' to={{ pathname: "/logout" }} style={linkStyle}>
                                <i className="fas fa-sign-out-alt" style={iconStyle2}></i> Logout
                            </Link>
                        ) : (
                            <Link className='nav-link' to={{ pathname: "/login" }} style={linkStyle}>
                                <i className="fas fa-sign-in-alt" style={iconStyle2}></i> Login
                            </Link>
                        )}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Header;
