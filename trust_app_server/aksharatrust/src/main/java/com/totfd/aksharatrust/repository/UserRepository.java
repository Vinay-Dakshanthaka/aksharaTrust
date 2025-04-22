package com.totfd.aksharatrust.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.totfd.aksharatrust.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{

	@Query("select u from User u where u.email=?1 and u.password=?2")
	Optional<User> verifyByEmail(String email, String Password);
	
	
	boolean existsByEmail(String email);
	
	Optional<User> findByEmail(String email);
	
}
