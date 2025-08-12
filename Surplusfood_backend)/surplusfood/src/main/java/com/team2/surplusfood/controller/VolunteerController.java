package com.team2.surplusfood.controller;

import com.team2.surplusfood.model.Volunteer;
import com.team2.surplusfood.services.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:*")
@RestController
@RequestMapping("/api/volunteers")
public class VolunteerController {

    @Autowired
    private VolunteerService volunteerService;

    @GetMapping
    public ResponseEntity<List<Volunteer>> getAllVolunteers() {
        List<Volunteer> volunteers = volunteerService.getAllVolunteers();
        return new ResponseEntity<>(volunteers, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Volunteer> saveVolunteer(@RequestBody Volunteer volunteer) {
        Volunteer savedVolunteer = volunteerService.saveVolunteer(volunteer);
        return new ResponseEntity<>(savedVolunteer, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Volunteer> getVolunteerById(@PathVariable Long id) {
        Volunteer volunteer = volunteerService.getVolunteerById(id);
        return volunteer != null ? new ResponseEntity<>(volunteer, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVolunteer(@PathVariable Long id) {
        volunteerService.deleteVolunteer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
