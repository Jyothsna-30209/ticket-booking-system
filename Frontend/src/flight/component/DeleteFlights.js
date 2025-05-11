import React from "react";
import FlightService from "../service/FlightService";
import { useNavigate } from "react-router-dom";

function DeleteFlights() {
    const service = new FlightService();
    const navigate = useNavigate();

    const [flights, setFlights] = React.useState([]);
    const [selectedFlightId, setSelectedFlightId] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        if (sessionStorage.getItem("userId") == null) {
            alert("Unauthorised Access to Page.");
            navigate("/login");
        }

        service.getAllFlights()
            .then((data) => {
                setFlights(data.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Unable to fetch flight data.");
                setLoading(false);
            });
    }, []);

    const handleDelete = (event) => {
        event.preventDefault();

        if (!selectedFlightId) {
            alert("Please select a flight to delete.");
            return;
        }

        const confirm = window.confirm("Are you sure you want to delete this flight?");
        if (!confirm) return;

        service.deleteFlight(selectedFlightId)
            .then(() => {
                alert("Flight deleted successfully.");
                navigate("/flights");
            })
            .catch(() => {
                alert("Error occurred while deleting the flight.");
            });
    };

    return (
        <div className="my-4 container col-md-6">
            <form className="border p-4 shadow rounded bg-light">
                <h2 className="mb-4 text-danger text-center">
                    <i className="fas fa-trash-alt"></i> Delete Flight
                </h2>

                {error && <div className="alert alert-danger">{error}</div>}
                {loading ? (
                    <div className="text-center text-secondary">Loading flights...</div>
                ) : (
                    <div className="form-group">
                        <label><strong>Select Flight to Delete</strong></label>
                        <select
                            className="form-control"
                            value={selectedFlightId}
                            onChange={(e) => setSelectedFlightId(e.target.value)}
                        >
                            <option value="">-- Select a flight --</option>
                            {flights.map((flight) => (
                                <option key={flight.flightNumber} value={flight.flightNumber}>
                                    Flight {flight.flightNumber} - {flight.carrierName}, {flight.flightModel} (Seats: {flight.seatCapacity})
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <button
                    className="btn btn-danger mt-3 w-100"
                    onClick={handleDelete}
                    disabled={loading}
                >
                    <i className="fas fa-trash"></i> Delete Flight
                </button>
            </form>
        </div>
    );
}

export default DeleteFlights;
