//package com.team2.surplusfood.model;
//
//import lombok.Data;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Data
//@Entity
//@Table(name = "beneficiaries")
//public class Beneficiary {
//    public enum beneficiary_type{
//        ORPHANAGE,NGO,INDIVIDUAL;
//    }
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "ben_id")
//    private Long id;
//
////    @Column(name = "name")
////    private String name;
////
////    @Column(name = "email")
////    private String email;
////
////    @Column(name = "phone")
////    private String phone;
//    @Column(name = "curr_location")
//    private String location;
//
//    @Column(name = "ben_type")
//    private beneficiary_type ben_type;
//
//    @OneToOne
//    @JoinColumn(name="userid")
//    private int userid;
//
////    @OneToMany(mappedBy = "beneficiary", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
////    private List<Order> orders;
//}

package com.team2.surplusfood.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "beneficiaries")
public class Beneficiary {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long benid;

    @Column
    private String currlocation;

    @Column
    private String ben_type;

    @OneToOne
    @JoinColumn
    private User userid;

    // Uncomment if needed
    // @OneToMany(mappedBy = "beneficiary", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    // private List<Order> orders;
}
