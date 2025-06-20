package com.hahn.task.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hahn.task.exception.ResourceNotFoundException;
import com.hahn.task.model.Developer;
import com.hahn.task.repository.DeveloperRepository;
import com.hahn.task.service.DeveloperService;

@Service
public class DeveloperServiceImpl implements DeveloperService{

    private DeveloperRepository developerRepository;
    public DeveloperServiceImpl(DeveloperRepository developerRepository) {
        this.developerRepository = developerRepository;
    }
    @Override
    public Developer saveDeveloper(Developer developer) {
        return developerRepository.save(developer);
    }

    @Override
    public List<Developer> getAllDevelopers() {
        return developerRepository.findAll();
    }

    @Override
    public Developer getDeveloperById(long id) {
        return developerRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Developer","Id",id));
    }

    @Override
    public Developer updateDeveloper(Developer developer, long id) {
        // we need to check whether developer with given ID exists in DB or not
        Developer existingDeveloper = developerRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Developer","id",id)
        );
        existingDeveloper.setFirstName(developer.getFirstName());
        existingDeveloper.setLastName(developer.getLastName());
        existingDeveloper.setStack(developer.getStack());
        // save existing developer to DB
        developerRepository.save(existingDeveloper);
        return existingDeveloper;

    }

    @Override
    public void deleteDeveloper(long id) {
        // check whether an developer exist in a DB or not
        developerRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Developer","Id",id));

        developerRepository.deleteById(id);
    }

}
