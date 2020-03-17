package com.example.demo.rest.role;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.example.demo.rest.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Role {

	@Id
	private Long id;
	private String roleName;
	private String description;
	@OneToMany(mappedBy = "role", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JsonIgnore
	private List<User> users;

	public Role() {
		super();
	}

	public Role(Long id, String roleName,String description) {
		super();
		this.id = id;
		this.roleName = roleName;
		this.description = description;
	}
	
	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
