package com.vivek.learn.config;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

import com.vivek.learn.filter.LoggerFilter;

import static org.springframework.security.web.util.matcher.AntPathRequestMatcher.antMatcher;

@Configuration
@EnableWebSecurity(debug = false)
public class SecurityConfiguration {

//	UserDetailsManager or UserDetailsService
	@Bean
	public UserDetailsManager userDetailsService() {
		InMemoryUserDetailsManager userDetailsManager = new InMemoryUserDetailsManager();
		userDetailsManager.createUser(User.withUsername("vivek").password("{noop}vivek123").roles("USER").build());
		userDetailsManager
				.createUser(User.withUsername("admin").password("{noop}admin123").roles("ADMIN", "USER").build());
		return userDetailsManager;
	}

//	create our own filter chain rather than using the default filter chain provided by spring security

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http, HandlerMappingIntrospector introspector)
			throws Exception {

		http.authorizeHttpRequests(customizer -> customizer.requestMatchers(antMatcher("/")).permitAll()
				.requestMatchers(antMatcher("/hi")).hasRole("USER").requestMatchers(mvc(introspector).pattern("/bye"))
				.hasRole("ADMIN").anyRequest().authenticated()

		).formLogin(withDefaults()).addFilterAfter(new LoggerFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}

	@Bean
	MvcRequestMatcher.Builder mvc(HandlerMappingIntrospector introspector) {
		return new MvcRequestMatcher.Builder(introspector);
	}

}
