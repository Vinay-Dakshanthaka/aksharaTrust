package com.totfd.aksharatrust.service;

import com.totfd.aksharatrust.dto.UserDto;

public interface UserService {

	UserDto createUser(UserDto userDto);
	
	UserDto getUserById(Long id);
		
//	UserDto findByEmail(String email);
	
	UserDto verifyByEmailAndPassword(String email, String password);
	
}
