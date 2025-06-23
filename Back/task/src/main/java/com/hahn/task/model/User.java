package com.hahn.task.model;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;
    
    private String email;
}
