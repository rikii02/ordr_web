package com.ordrweb.oplaces;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
//@ComponentScan(basePackages = "com.ordrweb.oplaces.config")
public class OplacesApplication {
   
   public static void main(String[] args) {
      SpringApplication.run(OplacesApplication.class, args);
   }
}

