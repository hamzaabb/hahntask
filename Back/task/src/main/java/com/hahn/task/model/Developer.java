package com.hahn.task.model;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "developers")
public class Developer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "first_name" , nullable = false)
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "stack")
    private String stack;
}
