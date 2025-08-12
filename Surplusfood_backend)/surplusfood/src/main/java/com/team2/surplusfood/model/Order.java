package com.team2.surplusfood.model;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "orders")
public class Order {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long orderid;

    @ManyToOne
    @JoinColumn( nullable = false)
    private Food foodid;

    @ManyToOne
    @JoinColumn( nullable = false)
    private Beneficiary benid;

    @OneToOne
    @JoinColumn
    private Volunteer volid;

    @Column
    private LocalDate orderdate;

    @Column
    private String status;

//    @OneToOne
//    @JoinColumn(name = "Ben_id")
//    public Beneficiary beneficiary;
}
