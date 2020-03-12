package com.example.demo.rest.user;

import javax.persistence.*;

import com.example.demo.rest.role.Role;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String userEmail;
	private String password;
	@ManyToOne
	@JoinColumn
	private Role role;
	
	public User() {
		super();
	}
	public User(Long id, String userName, String password, Role role) {
		super();
		this.id = id;
		this.userEmail = userName;
		this.password = password;
		this.role = role;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	
	
}
