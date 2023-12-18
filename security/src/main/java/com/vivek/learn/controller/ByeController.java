package com.vivek.learn.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vivek.learn.bean.User;


@RestController
public class ByeController {
	
	private static final Logger logger = LogManager.getLogger(ByeController.class);

	public ByeController() {
		super();
		logger.info("bye controller runs");
	}

	@GetMapping("/bye")
	public User bye() {
		return new User("vivek","pandey");
	}
}
