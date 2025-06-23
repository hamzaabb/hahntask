package com.hahn.task.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hahn.task.model.Developer;
import com.hahn.task.service.DeveloperService;
@CrossOrigin(origins = {"http://localhost:3001"})
@RestController
@RequestMapping("/api/developers")
public class DeveloperController {

    private DeveloperService developerService;

    public DeveloperController(DeveloperService developerService) {
        this.developerService = developerService;
    }
   
    
    @PostMapping
    public ResponseEntity<Developer> saveDeveloper(@RequestBody Developer developer) {
        return new ResponseEntity<Developer>(developerService.saveDeveloper(developer), HttpStatus.CREATED);
    }
   
    
    @GetMapping
    public List<Developer> getAllDevelopers() {
        return developerService.getAllDevelopers();
    }
    
    
    @GetMapping("{id}")
    public ResponseEntity<Developer> getDeveloperById(@PathVariable("id") long developerId) {
        return new ResponseEntity<Developer>(developerService.getDeveloperById(developerId),HttpStatus.OK);
    }
    
    
    @PutMapping("{id}")
    public ResponseEntity<Developer> updateDeveloper(@PathVariable("id") long developerId,@RequestBody Developer developer) {
        return new ResponseEntity<Developer>(developerService.updateDeveloper(developer,developerId),HttpStatus.OK);
    }
    
    
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDeveloper(@PathVariable("id") long id) {
        developerService.deleteDeveloper(id);
        return new ResponseEntity<String>("Developer deleted successfully!.",HttpStatus.OK);
    }

}
