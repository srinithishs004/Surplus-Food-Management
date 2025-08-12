package com.team2.surplusfood.controller;

import com.team2.surplusfood.model.Donor;
import com.team2.surplusfood.services.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:*")
@RestController
@RequestMapping("/api/donors")
public class DonorController {

    @Autowired
    private DonorService donorService;

    @GetMapping
    public ResponseEntity<List<Donor>> getAllDonors() {
        List<Donor> donors = donorService.getAllDonors();
        return new ResponseEntity<>(donors, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Donor> saveDonor(@RequestBody Donor donor) {
        Donor savedDonor = donorService.saveDonor(donor);
        return new ResponseEntity<>(savedDonor, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Donor> getDonorById(@PathVariable Long id) {
        Donor donor = donorService.getDonorById(id);
        return donor != null ? new ResponseEntity<>(donor, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDonor(@PathVariable Long id) {
        donorService.deleteDonor(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
