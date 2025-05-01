package com.totfd.aksharatrust.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.totfd.aksharatrust.dto.UserDto;
import com.totfd.aksharatrust.entity.ResponseStructure;
import com.totfd.aksharatrust.entity.User;
import com.totfd.aksharatrust.service.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/user")
//@CrossOrigin("*")
//@CrossOrigin("http://localhost:5173")
//@CrossOrigin(origins = {
////		"https://aksharatrust.org",
//		"http://localhost:5173"
//})
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/saveUser")
	public ResponseEntity<ResponseStructure<UserDto>> saveUser(@Valid @RequestBody UserDto userDto) {

		UserDto savedUser = userService.createUser(userDto);

		ResponseStructure<UserDto> structure = new ResponseStructure<UserDto>();
		structure.setCode(HttpStatus.CREATED.value());
		structure.setData(savedUser);
		structure.setMessage("User Created");

		return new ResponseEntity<ResponseStructure<UserDto>>(structure, HttpStatus.CREATED);
	}

	@PostMapping("/verifyByEmailAndPassword")
	public ResponseEntity<ResponseStructure<UserDto>> verifyByEmailAndPassword(@RequestBody UserDto userDto) {
		String email = userDto.getEmail();
		String password = userDto.getPassword();

		System.out.println("email: " + email + ", password: " + password);

		UserDto foundUser = userService.verifyByEmailAndPassword(email, password);

		ResponseStructure<UserDto> structure = new ResponseStructure<>();
		structure.setCode(HttpStatus.OK.value());
		structure.setData(foundUser);
		structure.setMessage("Verified Successfully");

		return new ResponseEntity<>(structure, HttpStatus.OK);
	}

	@GetMapping("/getUser/{id}")
	public ResponseEntity<ResponseStructure<UserDto>> getUserById(@PathVariable Long id) {
		UserDto foundUser;
		ResponseStructure<UserDto> structure = new ResponseStructure<UserDto>();
		try {
			foundUser = userService.getUserById(id);
			System.out.println("Found User " + foundUser);
			structure.setCode(HttpStatus.FOUND.value());
			structure.setData(foundUser);
			structure.setMessage("User foud ");
			return new ResponseEntity<ResponseStructure<UserDto>>(structure, HttpStatus.OK);
		} catch (Exception e) {
			structure.setCode(HttpStatus.NOT_FOUND.value());
			structure.setData(null);
			structure.setMessage("User Not found");
			System.out.println("Error while fetching User by Id : " + e);
			e.printStackTrace();
			return new ResponseEntity<ResponseStructure<UserDto>>(structure, HttpStatus.NOT_FOUND);
		}

	}
}
