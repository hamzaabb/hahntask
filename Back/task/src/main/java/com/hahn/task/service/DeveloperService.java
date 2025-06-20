package com.hahn.task.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hahn.task.model.Developer;

@Service
public interface DeveloperService {

    Developer saveDeveloper(Developer developer);
    List<Developer> getAllDevelopers();
    Developer getDeveloperById(long id);
    Developer updateDeveloper(Developer developer, long id);
    void deleteDeveloper(long id);

}
