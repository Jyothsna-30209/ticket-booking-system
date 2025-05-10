package com.cg.flightmgmt.controller;

import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cg.flightmgmt.dao.AirportServiceImpl;
import com.cg.flightmgmt.dto.Airport;

@RestController
@CrossOrigin
@RequestMapping("/airport")
public class AirportController {
	Logger logger = org.slf4j.LoggerFactory.getLogger(AirportController.class);

	@Autowired
	private AirportServiceImpl dao;

	// GET: View all airports
	@GetMapping(path = "/airports")
	public ResponseEntity<List<Airport>> viewAllAirports() {
		List<Airport> list = dao.viewAirport();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	// GET: View specific airport by code
	@GetMapping(path = "/airports/{airportCode}")
	public Airport viewAirport(@PathVariable("airportCode") int airportCode) {
		return dao.viewAirport(airportCode);
	}

	// POST: Add airport
	@PostMapping(path = "/addAirport")
	public Airport addAirport(@RequestBody Airport airport) {
		logger.info("Airport added to the database");
		return dao.addAirport(airport);
	}

	// DELETE: Delete airport by code
	@DeleteMapping(path = "/deleteAirport/{airportCode}")
	public ResponseEntity<String> deleteAirport(@PathVariable("airportCode") int airportCode) {
		dao.deleteAirport(airportCode); // Directly calling delete method
		logger.info("Airport with code " + airportCode + " deleted.");
		return new ResponseEntity<>("Airport deleted successfully.", HttpStatus.OK);
	}
}
