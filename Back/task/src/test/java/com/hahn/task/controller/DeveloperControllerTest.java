package com.hahn.task.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hahn.task.model.Developer;
import com.hahn.task.service.DeveloperService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.*;

import java.util.*;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(DeveloperController.class)
class DeveloperControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DeveloperService developerService;

    private Developer dev;
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        dev = new Developer();
        dev.setId(1L);
        dev.setFirstName("Hamza");
        dev.setLastName("Ab");
        dev.setStack("full");
        objectMapper = new ObjectMapper();
    }

    @Test
    void saveDeveloper_shouldReturnCreated() throws Exception {
        when(developerService.saveDeveloper(any(Developer.class))).thenReturn(dev);

        mockMvc.perform(post("/api/developers")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(dev)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.firstName").value("Hamza"));
    }

    @Test
    void getAllDevelopers_shouldReturnList() throws Exception {
        List<Developer> list = Collections.singletonList(dev);
        when(developerService.getAllDevelopers()).thenReturn(list);

        mockMvc.perform(get("/api/developers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].firstName").value("Hamza"));
    }

    @Test
    void getDeveloperById_shouldReturnDeveloper() throws Exception {
        when(developerService.getDeveloperById(1L)).thenReturn(dev);

        mockMvc.perform(get("/api/developers/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("Hamza"));
    }

    @Test
    void updateDeveloper_shouldReturnUpdated() throws Exception {
        Developer updatedDev = new Developer();
        updatedDev.setFirstName("Updated");
        updatedDev.setLastName("Ab");
        updatedDev.setStack("backend");

        when(developerService.updateDeveloper(any(Developer.class), eq(1L))).thenReturn(updatedDev);

        mockMvc.perform(put("/api/developers/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedDev)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("Updated"));
    }

    @Test
    void deleteDeveloper_shouldReturnOk() throws Exception {
        doNothing().when(developerService).deleteDeveloper(1L);

        mockMvc.perform(delete("/api/developers/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("Developer deleted successfully!."));
    }
}
