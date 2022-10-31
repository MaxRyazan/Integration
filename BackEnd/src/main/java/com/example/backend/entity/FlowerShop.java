package com.example.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Table(name = "flower_shop")
public class FlowerShop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String shopTitle;

    private String location;

    private LocalTime openTime;

    private LocalTime closingTime;

    @OneToMany(mappedBy = "flowerShop")
    private List<Reviews> reviews;

    private Grade grade;

    public FlowerShop(String shopTitle, String location, LocalTime openTime,
                      LocalTime closingTime, List<Reviews> reviews) {
        this.shopTitle = shopTitle;
        this.location = location;
        this.openTime = openTime;
        this.closingTime = closingTime;
        this.reviews = reviews;
        this.grade = Grade.NEUTRAL;
    }
}
