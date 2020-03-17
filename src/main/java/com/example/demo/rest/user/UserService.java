package com.example.demo.rest.user;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.rest.exceptions.ResourceNotFoundException;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
@RequestMapping("/api/v1")
public class UserService {

	@Autowired
	UserRepository userRepo;

	@GetMapping("/users")
	public ResponseEntity<List<User>> getAll() {
		return ResponseEntity.ok(userRepo.findAll());
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<User> findById(@PathVariable("id") Long id) {
		User user = this.userRepo.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Not found user with id: " + id));
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

	@PostMapping("/user")
	public User addUser(@RequestBody User user) {
		return userRepo.save(user);
	}
	
	@PostMapping("/users")
	public ResponseEntity<List<User>> addUsers(@Valid @RequestBody List<User> users) {
		List<User> addedUsers = userRepo.saveAll(users);
		return ResponseEntity.ok(addedUsers);
	}

	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@Valid @PathVariable("id") Long id, @Valid @RequestBody User user)
			throws ResourceNotFoundException {
		User oldUser = this.userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Not found user with id: " + id));
		if (user == null || user.getId() == null || !user.getId().equals(oldUser.getId())) {
			throw new ResourceNotFoundException("Not Valid User.");
		}
		user.setPassword(oldUser.getPassword());
		User updateUser = this.userRepo.saveAndFlush(user);
		return ResponseEntity.ok().body(updateUser);
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable("id") Long id) throws ResourceNotFoundException {
		User user = this.userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Not found user with id: " + id));
		this.userRepo.deleteById(id);
		return ResponseEntity.ok().body(user);
	}

	@PostMapping("/checkLogin")
	public ResponseEntity<User> checkUser(@PathParam("email") String email, @PathParam("password") String password) {
		if (email == null || password == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "UserName/Email or password not correct.");
		}
		User tmpUser = this.userRepo.findByUserEmail(email)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Not found user with Email: " + email));
		if (tmpUser != null && tmpUser.getPassword().equals(password)) {
			tmpUser.setPassword(password);
			return ResponseEntity.ok(tmpUser);
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "UserName/Email or password not correct.");
		}
	}
	
	@PutMapping("/changeUserPassword/{id}")
	public ResponseEntity<User> changeUserPassword(@PathVariable("id") Long id, @PathParam("oldPassword") String oldPassword, @PathParam("newPassword") String newPassword) {
		if (oldPassword == null || newPassword == null || id == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Old/New Password not be empty.");
		}
		User user = this.userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Not found user with id: " + id));
		if (!user.getPassword().equals(oldPassword)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Old Password not correct.");
		}
		user.setPassword(newPassword);
		user = this.userRepo.saveAndFlush(user);
		return ResponseEntity.ok(user);
	}

	@GetMapping("/user")
	public ResponseEntity<List<User>> findAllUserByEmailContaining(@Valid @PathParam("email") String email) {
		if (email == null) {
			return this.getAll();
		}
		return ResponseEntity.ok(userRepo.findByUserEmailContainingIgnoreCase(email));
	}
}
