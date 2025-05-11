import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Links() {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (sessionStorage.getItem('userType') !== 'Admin') {
            alert('Unauthorized Access to Page.');
            navigate('/login');
        }
    }, [navigate]);

    const cardStyle = {
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const cardHover = e => e.currentTarget.style.transform = 'scale(1.05)';
    const cardLeave = e => e.currentTarget.style.transform = 'scale(1)';

    const cards = [
        { to: "/airports", icon: "fas fa-map-marker-alt", title: "View airports", desc: "View all the airports in the database." },
        { to: "/airports/add", icon: "fas fa-map-marker-alt", title: "Add airports", desc: "Add an airport to the database." },
        { to: "/airports/delete", icon: "fas fa-map-marker-alt", title: "Delete airports", desc: "Delete airports from the database." },
        { to: "/flights", icon: "fas fa-plane", title: "View planes", desc: "View all planes and their carriers." },
        { to: "/flights/add", icon: "fas fa-plane", title: "Add planes", desc: "Add planes to the database." },
        { to: "/flights/delete", icon: "fas fa-plane", title: "Delete planes", desc: "Delete planes from the database." },
        { to: "/schedule/add", icon: "fas fa-calendar", title: "Add schedule", desc: "Add a new flight schedule." },
        { to: "/scheduleFlight/delete", icon: "fas fa-calendar", title: "Delete schedule", desc: "Delete a flight schedule." },
        { to: "/scheduleFlight/admin", icon: "fas fa-tasks", title: "View schedule", desc: "Manage full flight schedules." },
        { to: "/users", icon: "fas fa-users", title: "View users", desc: "View and manage user accounts." },
        { to: "/add-admin", icon: "fas fa-user-shield", title: "Add admin", desc: "Grant admin rights to a user." },
        { to: "/logout", icon: "fas fa-sign-out-alt", title: "Logout", desc: "Exit admin dashboard securely." },
    ];

    return (
        <div>
            <div className="jumbotron text-center mb-1" style={{ backgroundColor: "aliceblue", padding: "2rem", marginBottom: "1rem", borderRadius: "8px" }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "2rem" }}><i className="fas fa-paper-plane mr-1"></i> Admin Tools</h3>
                <h5 style={{ fontSize: "1.2rem", color: "#555" }}>Manage flight and user data centrally with admin tools.</h5>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "1rem",
                padding: "1rem"
            }}>
                {cards.map((card, index) => (
                    <Link key={index} className="card-item" to={card.to} style={{ textDecoration: "none" }}>
                        <div
                            style={cardStyle}
                            onMouseEnter={cardHover}
                            onMouseLeave={cardLeave}
                        >
                            <div style={{ padding: "1.5rem", textAlign: "center" }}>
                                <h5 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                                    <i className={card.icon}></i> {card.title}
                                </h5>
                                <p style={{ fontSize: "0.9rem", color: "#777" }}>{card.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Links;
