package com.cg.flightmgmt.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.flightmgmt.dto.Airport;
import com.cg.flightmgmt.repository.AirportRepository;
import com.cg.flightmgmt.service.AirportService;

@Service
public class AirportServiceImpl implements AirportService {
    @Autowired
    private AirportRepository repo;  // Corrected the field name to 'repo'

    @Override
    public Airport addAirport(Airport airport) {
        return repo.save(airport);
    }

    @Override
    public List<Airport> viewAirport() {
        return repo.findAll();
    }

    @Override
    public Airport viewAirport(int airportCode) {
        Optional<Airport> found = repo.findById(airportCode);
        if (found.isPresent()) {
            return found.get();
        } else {
            // Since you no longer want to throw an exception, you can return null or handle it in a different way.
            return null; // Returning null if airport is not found
        }
    }

    @Override
    public void deleteAirport(int airportCode) {
        if (repo.existsById(airportCode)) {  // Checking if the airport exists before deleting
            repo.deleteById(airportCode);
        } else {
            // Optionally, you can log that the airport does not exist.
            System.out.println("Airport with code " + airportCode + " not found.");
        }
    }
}
