package com.totfd.aksharatrust.aksharatrustapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.totfd.aksharatrust.aksharatrustapp.dto.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	boolean existsByEmail(String email);
}
