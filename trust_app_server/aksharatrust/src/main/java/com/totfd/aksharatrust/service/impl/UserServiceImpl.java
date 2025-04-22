package com.totfd.aksharatrust.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.totfd.aksharatrust.dto.UserDto;
import com.totfd.aksharatrust.entity.User;
import com.totfd.aksharatrust.exception.EmailAlreadyExistsException;
import com.totfd.aksharatrust.mapper.UserMapper;
import com.totfd.aksharatrust.repository.UserRepository;
import com.totfd.aksharatrust.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;

	@Override
	public UserDto createUser(UserDto userDto) {

		if (userRepository.existsByEmail(userDto.getEmail())) {
			throw new EmailAlreadyExistsException();
		}

		User user = UserMapper.toEntity(userDto);

		User saveUser = userRepository.save(user);

		return UserMapper.toDto(saveUser);

	}

	@Override
	public UserDto getUserById(Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + id));
		return UserMapper.toDto(user);
	}

	@Override
	public UserDto verifyByEmailAndPassword(String email, String password) {

		User user = userRepository.verifyByEmail(email, password)
				.orElseThrow(() -> new RuntimeException("Invalid Credentials "));
		return UserMapper.toDto(user);
	}


	
}
