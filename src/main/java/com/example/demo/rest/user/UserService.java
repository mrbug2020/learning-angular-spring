package com.example.demo.rest.user;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.demo.rest.exceptions.ResourceNotFoundException;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
@RequestMapping("/api/v1")
public class UserService {

	@Autowired
	UserRepository userRepo;

	@GetMapping("/user")
	public ResponseEntity<List<User>> getAll() {
		return ResponseEntity.status(HttpStatus.OK).body(userRepo.findAll());
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

	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@Valid @PathVariable("id") Long id, @Valid @RequestBody User user)
			throws ResourceNotFoundException {
		User oldUser = this.userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Not found user with id: " + id));
		if (user == null || user.getId() == null || !user.getId().equals(oldUser.getId())) {
			throw new ResourceNotFoundException("Not Valid User.");
		}
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
	public ResponseEntity<User> checkUser(@Valid @RequestBody User user) {
		if (user == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "UserName/Email or password not correct.");
		}
		User tmpUser = this.userRepo.findByUserEmail(user.getUserEmail())
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Not found user with Email: " + user.getUserEmail()));
		if (tmpUser != null && tmpUser.getPassword().equals(user.getPassword())) {
			tmpUser.setPassword(user.getPassword());
			return ResponseEntity.ok(tmpUser);
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "UserName/Email or password not correct.");
		}
	}

}
