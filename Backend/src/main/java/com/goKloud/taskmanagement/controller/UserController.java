package com.goKloud.taskmanagement.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.goKloud.taskmanagement.model.*;
import com.goKloud.taskmanagement.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class UserController {
	@Autowired
	UserService userSer;
	@PostMapping("/register")
	public ResponseEntity<?> Register(@RequestBody User user) {
		User registeredUser = userSer.register(user); 
        if (registeredUser == null) { 
            // Replace any specific failure error codes from register with this line if needed
            return new ResponseEntity<>("Registration Failed", HttpStatus.BAD_REQUEST); 
        } else {
            return new ResponseEntity<>(registeredUser, HttpStatus.CREATED); // Or HttpStatus.OK
        }
		
	}
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
	    User foundUser = userSer.login(user);

	    if (foundUser == null) {
	        return new ResponseEntity<>("User not found in the database", HttpStatus.NOT_FOUND);
	    } else {
	        return new ResponseEntity<>(foundUser, HttpStatus.OK);
	    }
	}
	
}
