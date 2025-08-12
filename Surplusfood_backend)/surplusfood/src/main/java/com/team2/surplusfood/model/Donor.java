//package com.team2.surplusfood.model;
//
//import lombok.Data;
//
//import javax.persistence.*;
//import java.util.List;
//import java.util.Set;
//
//@Data
//@Entity
//@Table(name = "donors")
//public class Donor {
//    public enum DonorType{
//        EVENT_ORGANIZER,RESTAURANTS;
//
//    }
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "donor_id")
//    private Long id;
//
//    @OneToOne
//    @JoinColumn(name="userid")
//    private int user;
//
//    @OneToMany(mappedBy = "donor")
//    private Set<Food> foods;
//
////    @ManyToOne
////    @JoinColumn(name="food_id")
////    private Food food_id;
//    @Enumerated(EnumType.STRING)
//    @Column(name = "donor_type")
//    private DonorType donortype;
//
//
//}

package com.team2.surplusfood.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name = "donors")
public class Donor {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long donorid;

    @OneToOne
    @JoinColumn
    private User userid; // Assuming there is a User entity


//    @OneToMany(mappedBy = "donor")
//    @JoinColumn
//    private Set<Food> foods; // This maps to the Food entity


    @Column
    private String donortype;
}

