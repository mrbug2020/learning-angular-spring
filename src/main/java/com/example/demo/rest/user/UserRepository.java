package com.example.demo.rest.user;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	public Optional<User> findById(Long id);
	public Optional<User> findByUserEmail(String userEmail);
	public List<User> findByUserEmailContainingIgnoreCase(String userEmail);
}
