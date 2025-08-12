package com.team2.surplusfood.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2WebMvc;

@Configuration
@EnableSwagger2WebMvc
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.team2.surplusfood")) // Change to your controller package
                .paths(PathSelectors.any())
                .build()
//                .apiInfo(new ApiInfoBuilder()
//                        .title("Your API Documentation")
//                        .description("API documentation for your Spring Boot application")
//                        .version("1.0")
//                        .build())
                .host("localhost:8080");
    }
}

