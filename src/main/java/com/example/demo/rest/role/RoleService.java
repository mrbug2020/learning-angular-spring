package com.example.demo.rest.role;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class RoleService {
	@Autowired
	RoleRepository roleRepo;
	
	@GetMapping("/role")
	public List<Role> getAll() {
		return this.roleRepo.findAll();
	}
	@GetMapping("/role/{id}")
	public Optional<Role> getOne(@Valid @PathParam(value = "id") Long id) {
		return this.roleRepo.findById(id);
	}
	@PostMapping("/role")
	public Role addRole(@Valid @RequestBody Role role) {
		return this.roleRepo.save(role);
	}
	@PutMapping("/role")
	public Role updateRole(@Valid @RequestBody Role role) {
		return this.roleRepo.save(role);
	}
	@DeleteMapping("/role/{id}")
	public boolean deleteRole(@Valid @PathParam(value = "id") Long id) {
		try {
			this.roleRepo.deleteById(id);
		} catch (IllegalArgumentException e) {
			return false;
		} catch (Exception e) {
			return false;
		}
		return true; 
	}
}
