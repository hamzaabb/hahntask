package com.hahn.task.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hahn.task.model.Developer;

public interface DeveloperRepository extends JpaRepository<Developer,Long>{

    
}