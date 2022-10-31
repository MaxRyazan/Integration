package com.example.backend.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;


@Entity
@NoArgsConstructor
public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flowerShop_id")
    private FlowerShop flowerShop;

    private String reviewText;

    private LocalDateTime reviewDate;

    @Enumerated(value = EnumType.STRING)
    private Grade grade;

    public Reviews(FlowerShop flowerShop, String reviewText, LocalDateTime reviewDate, Grade grade) {
        this.flowerShop = flowerShop;
        this.reviewText = reviewText;
        this.reviewDate = reviewDate;
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "Reviews{" +
                "reviewText='" + reviewText + '\'' +
                ", grade=" + grade +
                '}';
    }
}
