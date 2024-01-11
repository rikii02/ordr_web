package com.ordrweb.oplaces;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.*;

@SpringBootApplication
public class OplacesApplication {
   
   public static void main(String[] args) {
      SpringApplication.run(OplacesApplication.class, args);
   }
   
   @Bean
   CommandLineRunner runner(OplaceRepository repository) {
      return args -> {
         String otag = "@La_pizza";

         Oplace oplace = new Oplace(
            "La Pizza",
             otag,
            "Pizzeria",
            List.of("burger", "pizza")
         );
         
         repository.insert(oplace);
      };
   }

}

