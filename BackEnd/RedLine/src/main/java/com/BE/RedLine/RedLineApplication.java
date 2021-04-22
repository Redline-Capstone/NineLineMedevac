package com.BE.RedLine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SpringBootApplication
public class RedLineApplication {
//	private String ExpectedURL = "http://localhost:3000";
//	private String internalIP = "127.0.0.1:3000";
//	private String outsideIP = "198.213.89.195"; //ip of school
//	private String outsideIP2 = "198.213.89.145"; //ip of school 2

	public static void main(String[] args) {
		SpringApplication.run(RedLineApplication.class, args);
	}
//
////for cors
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/requests")
//						.allowedMethods("GET")
//						.allowedHeaders("Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
//								"Access-Control-Request-Method", "Access-Control-Request-Headers", "Origin",
//								"Cache-Control", "Content-Type")
//						.allowedOrigins(ExpectedURL)
////						.allowedOrigins(internalIP)
//						.allowedOrigins(outsideIP)
//						.allowedOrigins(outsideIP2)
//
//				;
//				registry.addMapping("/requests/{id}")
//						.allowedMethods("GET","PATCH")
//						.allowedHeaders("Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
//								"Access-Control-Request-Method", "Access-Control-Request-Headers", "Origin",
//								"Cache-Control", "Content-Type")
//						.allowedOrigins(ExpectedURL)
////						.allowedOrigins(internalIP)
//						.allowedOrigins(outsideIP)
//						.allowedOrigins(outsideIP2)
//				;
//				registry.addMapping("/responder/{name}")
//						.allowedMethods("GET")
//						.allowedHeaders("Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
//								"Access-Control-Request-Method", "Access-Control-Request-Headers", "Origin",
//								"Cache-Control", "Content-Type")
//						.allowedOrigins(ExpectedURL)
////						.allowedOrigins(internalIP)
//						.allowedOrigins(outsideIP)
//						.allowedOrigins(outsideIP2)
//				;
//				registry.addMapping("/nineline")
//						.allowedMethods("POST")
//						.allowedHeaders("Access-Control-Allow-Headers", "Access-Control-Allow-Origin",
//								"Access-Control-Request-Method", "Access-Control-Request-Headers", "Origin",
//								"Cache-Control", "Content-Type")
//						.allowedOrigins(ExpectedURL)
////						.allowedOrigins(internalIP)
//						.allowedOrigins(outsideIP)
//						.allowedOrigins(outsideIP2)
//				;
//				System.out.println("-registry-"+registry.toString());
//			}
//		};
//	}
}

//
//@Configuration
//@EnableWebMvc
//class WebConfig implements Filter,WebMvcConfigurer {
//
//	@Override
//	public void addCorsMappings(CorsRegistry registry) {
//		registry.addMapping("/**");
//	}
//
//	@Override
//	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) {
//		HttpServletResponse response = (HttpServletResponse) res;
//		HttpServletRequest request = (HttpServletRequest) req;
//		System.out.println("WebConfig; "+request.getRequestURI());
//		response.setHeader("Access-Control-Allow-Origin", "https://frontportafolio.herokuapp.com");
//		response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
//		response.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,observe");
//		response.setHeader("Access-Control-Max-Age", "3600");
//		response.setHeader("Access-Control-Allow-Credentials", "true");
//		response.setHeader("Access-Control-Expose-Headers", "Authorization");
//		response.addHeader("Access-Control-Expose-Headers", "responseType");
//		response.addHeader("Access-Control-Expose-Headers", "observe");
//		System.out.println("Request Method: "+request.getMethod());
//		if (!(request.getMethod().equalsIgnoreCase("OPTIONS"))) {
//			try {
//				chain.doFilter(req, res);
//			} catch(Exception e) {
//				e.printStackTrace();
//			}
//		} else {
//			System.out.println("Pre-flight");
//			response.setHeader("Access-Control-Allow-Origin", "*");
//			response.setHeader("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT");
//			response.setHeader("Access-Control-Max-Age", "3600");
//			response.setHeader("Access-Control-Allow-Headers", "Access-Control-Expose-Headers"+"Authorization, content-type," +
//					"USERID"+"ROLE"+
//					"access-control-request-headers,access-control-request-method,accept,origin,authorization,x-requested-with,responseType,observe");
//			response.setStatus(HttpServletResponse.SC_OK);
//		}
//
//	}
//
//}
//
