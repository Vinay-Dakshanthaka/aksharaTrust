package com.totfd.aksharatrust.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id;
	
	@Column(nullable = false, unique = true)
	public String email;
	
	@Column(nullable = false)
	public String password;
	
	@Column(nullable = false)
	public String role = "ADMIN";
	
}
