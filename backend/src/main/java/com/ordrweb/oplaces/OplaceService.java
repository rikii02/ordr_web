package com.ordrweb.oplaces;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@AllArgsConstructor
@Service
public class OplaceService {

    private final OplaceRepository oplaceRepository;

    public List<Oplace> getAllOplaces() {
        return oplaceRepository.findAll();
    }
}


