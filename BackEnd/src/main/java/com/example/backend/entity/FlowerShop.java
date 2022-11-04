package com.example.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;
import java.util.Locale;

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

    @ElementCollection
    private List<String> imagePath;

    public FlowerShop(String shopTitle, String location, LocalTime openTime,
                      LocalTime closingTime, List<Reviews> reviews) {
        this.shopTitle = shopTitle;
        this.location = location;
        this.openTime = openTime;
        this.closingTime = closingTime;
        this.reviews = reviews;
        this.grade = Grade.NEUTRAL;
        this.imagePath = List.of(shopTitle.toLowerCase().replace(" ","")+"1.png",
                shopTitle.toLowerCase().replace(" ","")+"2.png",
                shopTitle.toLowerCase().replace(" ","")+"3.png");
    }
}
