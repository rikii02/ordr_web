package com.ordrweb.oplaces;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OplaceRepository extends MongoRepository<Oplace, String> {
   Optional<Oplace> findByOtag(String o_tag);
}
