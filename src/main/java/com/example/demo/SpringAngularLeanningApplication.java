package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.rest.role.Role;
import com.example.demo.rest.role.RoleRepository;
import com.example.demo.rest.user.User;
import com.example.demo.rest.user.UserRepository;

@SpringBootApplication
public class SpringAngularLeanningApplication {

	public static final Logger LOGGER = LoggerFactory.getLogger(SpringAngularLeanningApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(SpringAngularLeanningApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner init(UserRepository userRepository, RoleRepository roleRepository) {
		return (args) -> {
			LOGGER.info("-------------Init role-----------------");
			Role adminRole = roleRepository.save(new Role(1L, "Administrator", "Administrator"));
			Role editorRole = roleRepository.save(new Role(2L, "Editor", "Editor"));
			Role normalRole = roleRepository.save(new Role(3L, "Normal", "Normal"));
			LOGGER.info("-------------Init users-----------------");
			userRepository.save(new User(null, "admin@admin", "admin", adminRole));
			userRepository.save(new User(null, "editor@admin", "editor", editorRole));
			userRepository.save(new User(null, "test@test", "test", normalRole));
		};
	}

}
