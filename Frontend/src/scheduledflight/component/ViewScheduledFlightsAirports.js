import React from "react";
import { Link } from "react-router-dom";
import AirportService from "../../airport/service/AirportService";
import ScheduledFlightService from "../service/ScheduledFlightService";

function ViewScheduledFlightsAirports() {
    const service = new ScheduledFlightService();
    const airportService = new AirportService();
    const [scheduleFlights, changescheduleFlights] = React.useState([]);
    const [airports, changeAirports] = React.useState([]);
    const [sourceAirportCode, changeSourceAirportCode] = React.useState();
    const [destinationAirportCode, changeDestinationAirportCode] = React.useState();
    const [searchDate, changeSearchDate] = React.useState(new Date().toISOString().slice(0, 10));
    const [error, setError] = React.useState({
        sourceError: '',
        destError: ''
    });

    React.useEffect(() => {
        airportService.getAllAirports().then((data) => {
            changeAirports(data.data);
        }).catch(() => {
            alert("Problem in getting all the airports.");
        });
    }, []);

    return (
        <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f9f9f9', padding: '20px' }}>
            <style>
                {`
                    .jumbotron-custom {
                        background: linear-gradient(135deg, #f9d976, #f39f86);
                        color: #2d2d2d;
                        padding: 40px;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        margin-bottom: 30px;
                    }
                    .form-row {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                        margin-bottom: 20px;
                    }
                    .form-control:focus {
                        box-shadow: 0 0 5px #ff9800;
                        border-color: #ff9800;
                    }
                    .table {
                        background-color: white;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 3px 8px rgba(0,0,0,0.1);
                    }
                    .thead-dark th {
                        background-color: #343a40;
                        color: white;
                    }
                    .btn-success {
                        background-color: #28a745;
                        border: none;
                    }
                    .btn-success:hover {
                        background-color: #218838;
                    }
                    .btn-primary {
                        background-color: #007bff;
                        border: none;
                    }
                    .btn-primary:hover {
                        background-color: #0056b3;
                    }
                `}
            </style>

            <div className="jumbotron-custom text-center">
                <h2><i className="fas fa-paper-plane mr-2"></i>Travel Made Easy</h2>
                <p>Compare and book flights with just a few clicks. Your journey starts here.</p>
            </div>

            <div className="form-row my-3">
                <div className='col'>
                    <label><strong>Source Airport</strong></label>
                    <select className="form-control" id="sourceAirportCode"
                        value={sourceAirportCode}
                        onChange={(event) => changeSourceAirportCode(event.target.value)}>
                        <option value="">Select source</option>
                        {airports.map((airport) => (
                            <option key={airport.airportCode} value={airport.airportCode}>{airport.airportLocation}</option>
                        ))}
                    </select>
                    <div className="text-danger">{error.sourceError}</div>
                </div>

                <div className='col'>
                    <label><strong>Destination Airport</strong></label>
                    <select className="form-control" id="destinationAirportCode"
                        value={destinationAirportCode}
                        onChange={(event) => changeDestinationAirportCode(event.target.value)}>
                        <option value="">Select destination</option>
                        {airports.map((airport) => (
                            <option key={airport.airportCode} value={airport.airportCode}>{airport.airportLocation}</option>
                        ))}
                    </select>
                    <div className="text-danger">{error.destError}</div>
                </div>

                <div className="col">
                    <label><strong>Date of Travel</strong></label>
                    <input className="form-control" type="date" id="searchDate" name="searchDate"
                        min={new Date().toISOString().slice(0, 10)}
                        max={new Date(new Date().getTime() + (15 * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10)}
                        value={searchDate}
                        onChange={(event) => changeSearchDate(event.target.value)}
                    />
                </div>

                <div className="col-2">
                    <button className="btn btn-success form-control mt-4" onClick={(event) => {
                        event.preventDefault();
                        let err = {};
                        let isError = false;
                        if (!sourceAirportCode) {
                            err.sourceError = "Choose the source";
                            isError = true;
                        }
                        if (!destinationAirportCode) {
                            err.destError = "Choose the destination";
                            isError = true;
                        }
                        if (!isError) {
                            service.searchFlightsBetweenSourceAndDest(sourceAirportCode, destinationAirportCode).then((data) => {
                                changescheduleFlights(data.data.filter(flight => flight.schedule.departureTime.slice(0, 10) === searchDate));
                                setError({ sourceError: '', destError: '' });
                            }).catch(() => {
                                alert("Problem in getting the flights.");
                            });
                        } else {
                            setError(err);
                        }
                    }}><i className="fas fa-search"></i> &nbsp;Search</button>
                </div>
            </div>

            <div>
                {scheduleFlights.length > 0 ? (
                    <table className="table table-bordered text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Flight</th>
                                <th>Date</th>
                                <th>From</th>
                                <th>Departure</th>
                                <th>To</th>
                                <th>Arrival</th>
                                <th>Available</th>
                                <th>Book</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleFlights.map((scheduledFlight) => (
                                <tr key={scheduledFlight.scheduleFlightId}>
                                    <td>{scheduledFlight.flight.carrierName}</td>
                                    <td>{`${new Date(scheduledFlight.schedule.departureTime.slice(0, 10)).toLocaleDateString('default', { day: 'numeric', month: 'short', year: 'numeric' })}`}</td>
                                    <td>{scheduledFlight.schedule.sourceAirport.airportLocation}</td>
                                    <td>{scheduledFlight.schedule.departureTime.slice(11, 16)}</td>
                                    <td>{scheduledFlight.schedule.destinationAirport.airportLocation}</td>
                                    <td>{scheduledFlight.schedule.arrivalTime.slice(11, 16)}</td>
                                    <td>{scheduledFlight.availableSeats}</td>
                                    <td>
                                        {scheduledFlight.availableSeats > 0 ? (
                                            <Link className="btn btn-primary" to={`/booking/${scheduledFlight.scheduleFlightId}`}>
                                                <i className="fas fa-clipboard-check"></i> &nbsp;Book flight
                                            </Link>
                                        ) : (
                                            <span className="text-danger">Not available</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center text-danger mt-4">
                        <strong>No flights currently available for the selected criteria.</strong>
                    </div>
                )}
            </div>

            <div className="text-center mt-5">
                <p className="lead">✈️ Discover destinations, book flights, and travel smart with our all-in-one platform.</p>
                <p>We help you connect the skies effortlessly and affordably.</p>
                <p className="font-italic mt-3">✨ Plan ahead with confidence, choose from top airlines, and make your journey memorable.</p>
                <p className="mt-2">🧳 Whether you're heading for a business meeting or a dream vacation, we've got you covered.</p>
                <p className="mt-2">💺 Real-time availability, trusted routes, and 24x7 support to guide you every step of the way.</p>
                <div className="alert alert-info mt-4">
                    <strong>Tip:</strong> Book early to enjoy exclusive discounts on popular routes!
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-md-3">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">🌍 Global Reach</h5>
                                <p className="card-text">Access flights across domestic and international destinations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">📅 Flexible Search</h5>
                                <p className="card-text">Search flights by date, airport, and availability with ease.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title">🔒 Secure Booking</h5>
                                <p className="card-text">Book your tickets with confidence using our safe platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ViewScheduledFlightsAirports;
