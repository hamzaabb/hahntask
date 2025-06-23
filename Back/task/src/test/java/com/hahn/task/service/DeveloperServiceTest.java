package com.hahn.task.service;

import com.hahn.task.model.Developer;
import com.hahn.task.repository.DeveloperRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class DeveloperServiceTest {

    @InjectMocks
    private DeveloperService developerService;

    @Mock
    private DeveloperRepository developerRepository;

    private Developer dev;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        dev = new Developer();
        dev.setId(1L);
        dev.setFirstName("Hamza");
        dev.setLastName("Ab");
        dev.setStack("full");
    }

    @Test
    void saveDeveloper_shouldReturnSavedDeveloper() {
        when(developerRepository.save(dev)).thenReturn(dev);

        Developer saved = developerService.saveDeveloper(dev);

        assertEquals("Hamza", saved.getFirstName());
        verify(developerRepository, times(1)).save(dev);
    }

    @Test
    void getAllDevelopers_shouldReturnList() {
        List<Developer> list = Arrays.asList(dev);
        when(developerRepository.findAll()).thenReturn(list);

        List<Developer> result = developerService.getAllDevelopers();

        assertFalse(result.isEmpty());
        assertEquals(1, result.size());
        verify(developerRepository).findAll();
    }

    @Test
    void getDeveloperById_shouldReturnDeveloper() {
        when(developerRepository.findById(1L)).thenReturn(Optional.of(dev));

        Developer found = developerService.getDeveloperById(1L);

        assertNotNull(found);
        assertEquals("Hamza", found.getFirstName());
        verify(developerRepository).findById(1L);
    }

    @Test
    void updateDeveloper_shouldUpdateAndReturn() {
        Developer updatedDev = new Developer();
        updatedDev.setFirstName("NewName");
        updatedDev.setLastName("Ab");
        updatedDev.setStack("backend");

        when(developerRepository.findById(1L)).thenReturn(Optional.of(dev));
        when(developerRepository.save(any(Developer.class))).thenReturn(updatedDev);

        Developer result = developerService.updateDeveloper(updatedDev, 1L);

        assertEquals("NewName", result.getFirstName());
        verify(developerRepository).save(updatedDev);
    }

    @Test
    void deleteDeveloper_shouldCallRepositoryDelete() {
        doNothing().when(developerRepository).deleteById(1L);

        developerService.deleteDeveloper(1L);

        verify(developerRepository).deleteById(1L);
    }
}
