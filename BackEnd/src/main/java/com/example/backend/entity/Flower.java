package com.example.backend.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@NoArgsConstructor
@Table(name= "flower")
public class Flower {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String description;

    @OneToOne
    private Details details;

    private BigDecimal price;

    public Flower(String title, String description, Details details, BigDecimal price) {
        this.title = title;
        this.description = description;
        this.details = details;
        this.price = price;
    }
}
