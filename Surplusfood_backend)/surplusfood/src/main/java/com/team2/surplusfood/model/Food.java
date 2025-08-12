//package com.team2.surplusfood.model;
//
//import lombok.Data;
//
//import javax.persistence.*;
//import java.time.LocalDate;
//
//@Data
//@Entity
//@Table(name = "team2food")
//public class Food {
//    public enum Status{
//        ACTIVE,INACTIVE;
//    }
//    public enum Category{
//        NORTH_INDIAN,SOUTH_INDIAN,KOREAN,CHINESE,ITALIAN;
//    }
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "food_id")
//    public Long id;
//
//    @Column(name = "category")
//    private Category category;
//
//    @Column(name = "description")
//    private String description;
//
//    @Column(name = "quantity")
//    private int quantity;
//
//    @Column(name = "post_date")
//    private LocalDate postDate;
//
//    @Column(name = "expiry_date")
//    private LocalDate expiryDate;
//
//    @Column(name = "quality")
//    private String quality;
//
//    @Column(name = "status")
//    private Status status;
////
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "donor_id")
//    private Donor donor;
//
//}

package com.team2.surplusfood.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Table(name = "foods")
public class Food<datetime, dateTime> {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long foodid;

    @Column
    private String donorname;

    @Column
    private String phone;

    @Column
    private String category;

    @Column
    private String description;

    @Column
    private int quantity;

    @Column
    private String postdate;

    @Column
    private String expirydate;

    @Column
    private String quality;

    @Column
    private String status;


    @Column
    private String inhub;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Donor donorid; // This should be the correct field name
}

