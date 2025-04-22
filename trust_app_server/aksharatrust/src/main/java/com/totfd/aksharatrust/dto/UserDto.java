package com.totfd.aksharatrust.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	
	private int id;
	@NotBlank(message = "Email is required")
	@Email(message ="Invalid Email ID")
	private String email;
	@NotBlank(message = "Password is required")
	private String password; 
	private String role = "ADMIN";
	
}
