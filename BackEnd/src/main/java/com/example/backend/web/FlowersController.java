package com.example.backend.web;

import com.example.backend.entity.FlowerShop;
import com.example.backend.service.FlowerShopService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("flowers/api/v1")
public class FlowersController {

    private final FlowerShopService flowerService;

    @GetMapping(value = "/flower_shops", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<FlowerShop>> showAllShops(){
      return flowerService.findAll();
    }

    @GetMapping(value = "/{title}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<FlowerShop> showOne(@PathVariable String title){
       return flowerService.findByShopTitle(title);
    }

}
