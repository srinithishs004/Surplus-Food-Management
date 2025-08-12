package com.team2.surplusfood.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long userid;

    @Column(nullable = false)
    private String fullName;
    @Column(nullable = false)
    private Long phone;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String gender;
    @Column(nullable = false)
    private String userType;
    @Column
    private String address;
}
