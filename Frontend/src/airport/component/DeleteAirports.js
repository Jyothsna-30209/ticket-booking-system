import React, { useEffect, useState } from "react";
import AirportService from "../service/AirportService";
import { useNavigate } from "react-router-dom";

function DeleteAirport() {
    const [airports, setAirports] = useState([]);
    const service = new AirportService();
    const navigate = useNavigate();

    // Fetch all airports on component mount
    useEffect(() => {
        if (sessionStorage.getItem('userId') == null) {
            alert('Unauthorized Access to Page.');
            navigate('/login');
        } else {
            service.getAllAirports()
                .then(response => {
                    setAirports(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching airports:", error);
                    alert("Error fetching airports. Please try again.");
                });
        }
    }, [navigate]);
    const deleteAirport = (code) => {
        if (window.confirm("Are you sure you want to delete this airport?")) {
            service.deleteAirport(code)  // Use airportCode or airportId as needed
                .then(() => {
                    setAirports(prevAirports => prevAirports.filter(a => a.airportCode !== code));
                    alert("Airport deleted successfully.");
                })
                .catch((error) => {
                    console.error("Error deleting airport:", error);
                    alert("Error deleting airport. Please try again.");
                });
        }
    };

    return (
        <div className="container mt-4">
            <h2>
                <i className="fas fa-trash-alt"></i>&nbsp;Delete Airport
            </h2>
            <table className="table table-bordered mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Airport Name</th>
                        <th>Airport Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {airports.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center">No airports available.</td>
                        </tr>
                    ) : (
                        airports.map((airport) => (
                            <tr key={airport.airportCode}>
                                <td>{airport.airportCode}</td>
                                <td>{airport.airportName}</td>
                                <td>{airport.airportLocation}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteAirport(airport.airportCode)}  // Use airportCode here
                                    >
                                        <i className="fas fa-trash-alt"></i>&nbsp; Delete Airport
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DeleteAirport;
