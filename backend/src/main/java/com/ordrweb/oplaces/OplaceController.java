package com.ordrweb.oplaces;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping({"/api/v1/oplaces"})
@AllArgsConstructor
public class OplaceController {

   @Autowired
   private final OplaceRepository oplaceRepository;

   @GetMapping
   public ResponseEntity<List<Oplace>> getAllOplaces() {
      List<Oplace> oplacesList = oplaceRepository.findAll();
      if (!oplacesList.isEmpty()) {
         return ResponseEntity.ok(oplacesList);
      }
      return ResponseEntity.notFound().build();
   }

   @GetMapping({"/{id}"})
   public ResponseEntity<Oplace> getOplaceById(@PathVariable String id) {
      Oplace oplace = oplaceRepository.findById(id).orElse(null);
      if (oplace != null) {
         return ResponseEntity.ok(oplace);
      }
      return ResponseEntity.notFound().build();
   }

   @PutMapping({"/{id}"})
    ResponseEntity<Oplace> updateOplace(@PathVariable String id, @RequestBody Oplace updatedOplace) {
      Oplace existingOplace = oplaceRepository.findById(id).orElse(null);
      if (existingOplace != null) {
         existingOplace.setName(updatedOplace.getName());
         existingOplace.setOtag(updatedOplace.getOtag());
         existingOplace.setDescription(updatedOplace.getDescription());
         existingOplace.setProducts(updatedOplace.getProducts());
         oplaceRepository.save(existingOplace);
         return ResponseEntity.status(HttpStatus.OK).body(existingOplace);
      } 
      return ResponseEntity.notFound().build();
      }
   
    @PostMapping
   public ResponseEntity<Oplace> createOplace(@RequestBody Oplace oplace) {
      oplaceRepository.save(oplace);
      return ResponseEntity.status(HttpStatus.CREATED).body(oplace);
   }


   @DeleteMapping({"/{id}"})
    ResponseEntity<Oplace> deleteOplace(@PathVariable String id) {
      Oplace deletedOplace = oplaceRepository.findById(id).orElse(null);
      if (deletedOplace != null) {
         oplaceRepository.delete(deletedOplace);
         return ResponseEntity.status(HttpStatus.OK).body(deletedOplace);
      }
      return ResponseEntity.notFound().build();
   }
}
