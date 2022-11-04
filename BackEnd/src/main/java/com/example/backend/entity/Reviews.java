package com.example.backend.entity;

import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@NoArgsConstructor
@Table(name = "reviews")
public class Reviews {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flower_shop_id")
    private FlowerShop flowerShop;

    @Column(name = "name_of_writer", nullable = false)
    private String nameOfWriter;
    private String reviewText;

    private LocalDateTime reviewDate;

    @Enumerated(value = EnumType.STRING)
    private Grade grade;

    public Reviews(FlowerShop flowerShop, String nameOfWriter,
                   String reviewText, LocalDateTime reviewDate, Grade grade) {
        this.flowerShop = flowerShop;
        this.nameOfWriter = nameOfWriter;
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
