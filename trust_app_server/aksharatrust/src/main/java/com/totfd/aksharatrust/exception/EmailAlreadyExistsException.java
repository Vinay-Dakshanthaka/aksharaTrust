package com.totfd.aksharatrust.exception;

public class EmailAlreadyExistsException extends RuntimeException{

	@Override
	public String getMessage() {
		return "Email already exist";
	}
}
