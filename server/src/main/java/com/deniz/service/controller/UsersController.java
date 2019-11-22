package com.deniz.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deniz.service.entities.Users;
import com.deniz.service.services.MongoUserDetailsService;

@RestController
@RequestMapping("/users")
public class UsersController {

	@Autowired
	private MongoUserDetailsService userDetailsService;
	
	@Autowired
	PasswordEncoder passwordEncoder;

	@PostMapping("/saveUser")
	public void registerUser(@RequestBody Users user) {

		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userDetailsService.saveUser(user);
	}

	@GetMapping(path = "/getUser/{username}", produces = "application/json")
	public ResponseEntity<Users> getUserInformation(@PathVariable("username") String username) {

		return new ResponseEntity<Users>(userDetailsService.getUser(username), HttpStatus.OK);
	}
	
	@PostMapping(path = "/updateUser")
	public ResponseEntity<Users> updateUser(@RequestBody Users user){
		
		Users u =userDetailsService.getUser(user.getUsername());
		
		u.setEmail(user.getEmail());
		u.setFirstName(user.getFirstName());
		u.setLastName(user.getLastName());
		u.setPassword(user.getPassword());
		u.setPhoneNumber(user.getPhoneNumber());
		u.setPicture(user.getPicture());
		
		
		return new ResponseEntity<Users>(userDetailsService.saveUser(u),HttpStatus.OK);
	}
	

}
