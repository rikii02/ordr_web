package com.ordrweb.oplaces;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Oplace {

   @Id
   public int id;
   public String name;
   @Indexed(unique = true) public String otag;
   public String description;
   public List<String> products;

   public Oplace() {
   }

   public Oplace(int id, String name, String otag, String description, List<String> products) {
      this.id = id;
      this.name = name;
      this.otag = otag;
      this.description = description;
      this.products = products;
   }
   public int getId() {
      return this.id;
   }

   public String getName() {
      return this.name;
   }

   public String getOtag() {
      return this.otag;
   }

   public String getDescription() {
      return this.description;
   }

   public void setName(String name) {
      this.name = name;
   }

   public void setOtag(String otag) {
      this.otag = otag;
   }

   public void setDescription(String description) {
      this.description = description;
   }

   public void setProduct(String product) {
      this.products.add(product);
   }

   public List<String> getProducts() {
      return this.products;
   }

   public void setProducts(final List<String> products) {
      this.products = products;
   }
}
