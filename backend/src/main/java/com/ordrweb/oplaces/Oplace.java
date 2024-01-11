package com.ordrweb.oplaces;

import java.util.List;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Oplace {
   
   public String name;
   @Indexed(unique = true) public String otag;
   public String description;
   public List<String> products;

   public Oplace() {
   }

   public Oplace(String name, String otag, String description, List<String> products) {
      this.name = name;
      this.otag = otag;
      this.description = description;
      this.products = products;
   }

   public String getName() {
      return this.name;
   }

   public String getO_tag() {
      return this.otag;
   }

   public String getDescription() {
      return this.description;
   }

   public List<String> getProdjucts() {
      return this.products;
   }

   public void setName(String name) {
      this.name = name;
   }

   public void setO_tag(String otag) {
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
