package com.example.backend.service;

import com.example.backend.entity.FlowerShop;
import com.example.backend.entity.Grade;
import com.example.backend.repository.FlowerShopRepository;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@RequiredArgsConstructor
public class FlowerShopService {

    private final FlowerShopRepository flowerShopRepository;


    public ResponseEntity<FlowerShop> findById(long id) {
        if (flowerShopRepository.findById(id) != null) {
            return new ResponseEntity<>(flowerShopRepository.findById(id), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }


    public ResponseEntity<List<FlowerShop>> findAll() {
        if (!flowerShopRepository.findAll().isEmpty()) {
            return new ResponseEntity<>(flowerShopRepository.findAll(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }


    public ResponseEntity<FlowerShop> findByGrade(Grade grade) {
        if (flowerShopRepository.findByGrade(grade) != null) {
            return new ResponseEntity<>(flowerShopRepository.findByGrade(grade), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<FlowerShop> findByShopTitle(String title) {
        if (flowerShopRepository.findByShopTitle(title) != null) {
            return new ResponseEntity<>(flowerShopRepository.findByShopTitle(title), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
