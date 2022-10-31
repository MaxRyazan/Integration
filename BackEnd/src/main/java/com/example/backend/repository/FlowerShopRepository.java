package com.example.backend.repository;

import com.example.backend.entity.FlowerShop;
import com.example.backend.entity.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlowerShopRepository extends JpaRepository<FlowerShop, Long> {

    FlowerShop findById(long id);

    FlowerShop findByGrade(Grade grade);

    FlowerShop findByShopTitle(String title);

}
