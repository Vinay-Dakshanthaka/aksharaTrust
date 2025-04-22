package com.totfd.aksharatrust.entity;

import lombok.Data;

@Data
public class ResponseStructure<T> {

	private int code;
	private String message;
	private T data;
}
