package Harsh.Singh.APIGatway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@SpringBootApplication
@EnableEurekaClient
public class ApiGatwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatwayApplication.class, args);
	}
	@Bean
	public RouteLocator routeLocator(RouteLocatorBuilder builder)
	{
		return builder.routes()
				.route(p->p.path("/vehicle/**").uri("lb://VEHICLE-SERVICE"))
				.route(p->p.path("/customer/**").uri("lb://CUSTOMER-SERVICE"))
				.build();
	}

}
