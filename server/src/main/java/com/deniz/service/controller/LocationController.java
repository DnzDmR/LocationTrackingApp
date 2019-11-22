package com.deniz.service.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deniz.service.entities.Location;
import com.deniz.service.entities.Users;
import com.deniz.service.services.MongoLocationDetailsService;
import com.deniz.service.services.MongoUserDetailsService;

@RestController
@RequestMapping("/location")
public class LocationController {

	@Autowired
	private MongoUserDetailsService userDetailsService;

	@Autowired
	private MongoLocationDetailsService locationDetailsService;

	@PostMapping("/saveLocation/{username}")
	public void locationSave(@RequestBody Location location, @PathVariable String username) {

		Users user = userDetailsService.getUser(username);
		location.setUser(user);

		locationDetailsService.saveLocation(location);
	}

	@GetMapping(path = "/getLocation/{username}", produces = "application/json")
	public ResponseEntity<Location> getUserLocation(@PathVariable String username) {

		Optional<Location> location = Optional.of(locationDetailsService.getLocation(username));

		if (location.isPresent()) {
			return new ResponseEntity<Location>(location.get(), HttpStatus.NOT_FOUND);

		} else {
			return new ResponseEntity<Location>(HttpStatus.NOT_FOUND);
		}

	}

	@GetMapping(path = "/getFollowingUsersLocation/{username}", produces = "application/json")
	public ResponseEntity<ArrayList<Location>> getFollowingUsersLocation(@PathVariable String username) {

		Optional<ArrayList<Location>> location = Optional.of(locationDetailsService.getFollowingUsersLocation(username));

		if (location.isPresent()) {
			return new ResponseEntity<ArrayList<Location>>(location.get(), HttpStatus.NOT_FOUND);

		} else {
			return new ResponseEntity<ArrayList<Location>>(HttpStatus.NOT_FOUND);
		}

	}

}
