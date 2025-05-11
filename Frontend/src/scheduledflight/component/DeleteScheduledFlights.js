import React from "react";
import ScheduledFlightService from "../service/ScheduledFlightService";
import { useNavigate } from "react-router-dom";

function DeleteScheduledFlights() {
    const service = new ScheduledFlightService();
    const navigate = useNavigate();

    const [scheduledFlights, setScheduledFlights] = React.useState([]);
    const [selectedScheduledFlightId, setSelectedScheduledFlightId] = React.useState("");

    React.useEffect(() => {
        if (sessionStorage.getItem("userId") == null) {
            alert("Unauthorised Access to Page.");
            navigate("/login");
        }

        service.getScheduledFlights()
            .then((data) => {
                setScheduledFlights(data.data);
            })
            .catch(() => {
                alert("Error fetching scheduled flights.");
            });
    }, []);

    return (
        <div className="my-4">
            <form>
                <h2>Delete Scheduled Flight</h2>

                <div className="form-group">
                    <label>Select Scheduled Flight</label>
                    <select
                        className="form-control"
                        value={selectedScheduledFlightId}
                        onChange={(event) => setSelectedScheduledFlightId(event.target.value)}
                    >
                        <option value="">Choose a scheduled flight</option>
                        {scheduledFlights.map((sf) => (
                            <option key={sf.scheduleFlightId} value={sf.scheduleFlightId}>
                                Flight {sf.flight.flightNumber}, {sf.flight.carrierName}, {sf.flight.flightModel} |
                                {sf.schedule.sourceAirport.airportLocation} → {sf.schedule.destinationAirport.airportLocation} on
                                {new Date(sf.schedule.departureTime).toLocaleString()}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className="btn btn-danger"
                    onClick={(event) => {
                        event.preventDefault();
                        if (!selectedScheduledFlightId) {
                            alert("Please select a scheduled flight to delete.");
                            return;
                        }

                        if (!window.confirm("Are you sure you want to delete this scheduled flight?")) {
                            return;
                        }

                        service.deleteScheduledFlight(selectedScheduledFlightId)
                            .then(() => {
                                alert("Scheduled Flight deleted.");
                                navigate("/scheduleFlight/admin");
                            })
                            .catch(() => {
                                alert("Problem in deleting the scheduled flight.");
                            });
                    }}
                >
                    Delete Scheduled Flight
                </button>
            </form>
        </div>
    );
}

export default DeleteScheduledFlights;
