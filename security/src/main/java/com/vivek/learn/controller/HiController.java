package com.vivek.learn.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HiController {
	private static final Logger logger = LogManager.getLogger(HiController.class);
	
	public HiController() {
		logger.info("Hi controller initalized");
	}
	
	@GetMapping("/hi")
	public String sayHi() {
		return "home";
	}
}
