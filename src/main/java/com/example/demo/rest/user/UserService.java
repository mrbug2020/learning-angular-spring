package com.example.demo.rest.user;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*", methods = RequestMethod.POST)
@RequestMapping("/api/v1")
public class UserService {
	
	@Autowired
	UserRepository userRepo;
	
	@GetMapping("/user")
	public ResponseEntity<List<User>> getAll() {
		return ResponseEntity.status(HttpStatus.OK).body(userRepo.findAll());
	}
	@GetMapping("/user/{id}")
	public ResponseEntity<Optional<User>> findById(@PathVariable("id") Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(userRepo.findById(id));
	}
	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return userRepo.save(user);
	}
	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return userRepo.save(user);
	}
	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable("id") Long id) throws Exception {
		try {
			this.userRepo.deleteById(id);
		} catch (Exception e) {
			throw new Exception("Delete user fail.");
		}
	}
	@PostMapping("/checkLogin")
	public ResponseEntity<User> checkUser(@Valid @RequestBody User user) {
		if (user != null) {
			User tmpUser = this.userRepo.findByUserName(user.getUserName());
			if (tmpUser != null && tmpUser.getPassword().equals(user.getPassword())) {
				tmpUser.setPassword(user.getPassword());
				return ResponseEntity.ok(tmpUser);
			}
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

}
