package com.totfd.aksharatrust.aksharatrustapp.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@GetMapping("/api/hello")
	public String sayHello() {
		return "Hello Vinay";
	}
	
	@GetMapping("/api/greet")
	public String greet() {
		
		Date date = new Date();
		
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		
		String formatedDate = formatter.format(date);
		
		return formatedDate;
		
	}
}
