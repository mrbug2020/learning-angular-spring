package com.example.demo.rest.exceptions;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler  {

	@ExceptionHandler(ResourceNotFoundException.class)
	protected ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest webRequest) {
		ErrorDetails errorDetails = new ErrorDetails(ex.getMessage(), webRequest.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(Exception.class)
	protected ResponseEntity<?> handleException(ResourceNotFoundException ex,
			HttpHeaders headers, HttpStatus status, WebRequest webRequest) {
		ErrorDetails errorDetails = new ErrorDetails(ex.getMessage(), webRequest.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	}

}
