package com.team2.surplusfood.config;



import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;

import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration

@EnableWebMvc

public class CorsConfig implements WebMvcConfigurer {

    @Override

    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/api/v1/**")  // Replace with your API endpoints

                .allowedOrigins("http://localhost:*")  // Replace with the origin of your React app

                .allowedMethods("GET", "POST", "PUT", "DELETE")

                .allowedHeaders("*")

                .allowCredentials(true);

    }

}
