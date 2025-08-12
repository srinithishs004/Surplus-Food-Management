package com.team2.surplusfood.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "volunteers")
public class Volunteer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long volid;
//
//    @Column(name = "name")
//    private String name;
//
//    @Column(name = "email")
//    private String email;
//
//    @Column(name = "phone")
//    private String phone;

    @Column
    private String vehicle_type;

    @OneToOne
    @JoinColumn
    private User userid;

}
