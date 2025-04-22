package com.totfd.aksharatrust.mapper;

import com.totfd.aksharatrust.dto.UserDto;
import com.totfd.aksharatrust.entity.User;


public class UserMapper {

	public static UserDto toDto(User user) {
	    UserDto userDto = new UserDto();
	    userDto.setEmail(user.getEmail());
	    userDto.setPassword(user.getPassword());
	    userDto.setRole(user.getRole());
	    return userDto;
	}

	public static User toEntity(UserDto dto) {
	    User user = new User();
	    user.setEmail(dto.getEmail());
	    user.setPassword(dto.getPassword());
	    user.setRole(dto.getRole());
	    return user;
	}

}
