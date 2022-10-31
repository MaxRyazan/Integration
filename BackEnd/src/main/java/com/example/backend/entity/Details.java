package com.example.backend.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name = "flowers_details")
public class Details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String countryOfOrigin;

    private String temperatureRegime;

    private String plantGenus;

    private String foliageColor;

    @OneToOne
    private Flower flower;

    public Details(String countryOfOrigin, String temperatureRegime,
                   String plantGenus, String foliageColor, Flower flower) {
        this.countryOfOrigin = countryOfOrigin;
        this.temperatureRegime = temperatureRegime;
        this.plantGenus = plantGenus;
        this.foliageColor = foliageColor;
        this.flower = flower;
    }
}
