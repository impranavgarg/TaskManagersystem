package com.goKloud.taskmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.goKloud.taskmanagement.model.User;
import com.goKloud.taskmanagement.repositories.UserRepository;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

//	 @Autowired
//	    private BCryptPasswordEncoder passwordEncoder;
	 
	public User register(User newUser) {
        User existingUser = getUser(newUser.getUsername());
        

        if (existingUser != null) {
            return null; // Return null on registration failure 
        }
        
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        newUser.setPassword(bcrypt.encode(newUser.getPassword()));
        return userRepository.save(newUser);
//        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
//        return newUser.getPassword();
    }
	
	public User login(User user){
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        User existingUser = getUser(user.getUsername());
        if(existingUser!=null) {
        	if(bcrypt.matches(user.getPassword(), existingUser.getPassword())) {
        		return existingUser;
        	}else {
        		return null;
        	}
        	
        }
//        System.out.println(bcrypt.encode(user.getPassword()));
//		User u = userRepository.findUser(user.getUsername(), bcrypt.encode(user.getPassword()));
		return null;
	}
	public User getUser(String username) {
		User user = userRepository.findByUsername(username);
		 return user;
	}

}
