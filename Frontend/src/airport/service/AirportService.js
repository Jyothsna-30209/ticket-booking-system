import axios from 'axios';

class AirportService {
    // Get all airports
    getAllAirports() {
        return axios.get('http://localhost:5010/airline-api/airport/airports');
    }

    // Add a new airport
    addAirport(airport) {
        return axios.post('http://localhost:5010/airline-api/airport/addAirport', airport);
    }

    // Delete an airport by its ID
    deleteAirport(id) {
        console.log("Deleting airport with ID:", id);
        return axios.delete(`http://localhost:5010/airline-api/airport/deleteAirport/${id}`);
    }
}

export default AirportService;
