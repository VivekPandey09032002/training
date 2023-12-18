package com.vivek.learn.filter;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoggerFilter extends OncePerRequestFilter {
	
	private static final Logger log = LogManager.getLogger(LoggerFilter.class);


	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		
		if(authentication !=null) {
			log.info("UserName: {}",authentication.getName());
			log.info("Role: {}",authentication.getAuthorities());
			log.info("Authentication Class: {}",authentication.getClass().getSimpleName());
		}

		filterChain.doFilter(request, response);
		
		
	}

}
