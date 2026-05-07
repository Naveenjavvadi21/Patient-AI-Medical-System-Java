package com.example.patient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.patient.model.Patient;
import com.example.patient.repository.PatientRepository;

@RestController
@CrossOrigin
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientRepository repo;

    // Add patient
    @PostMapping
    public Patient addPatient(@RequestBody Patient p) {
        return repo.save(p);
    }

    // Get all patients
    @GetMapping
    public List<Patient> getPatients() {
        return repo.findAll();
    }
}
