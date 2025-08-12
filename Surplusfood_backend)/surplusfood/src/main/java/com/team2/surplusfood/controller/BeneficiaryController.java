package com.team2.surplusfood.controller;

import com.team2.surplusfood.model.Beneficiary;
import com.team2.surplusfood.services.BeneficiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:*")
@RestController
@RequestMapping("/api/beneficiaries")
public class BeneficiaryController {

    @Autowired
    private BeneficiaryService beneficiaryService;

    @GetMapping
    public ResponseEntity<List<Beneficiary>> getAllBeneficiaries() {
        List<Beneficiary> beneficiaries = beneficiaryService.getAllBeneficiaries();
        return new ResponseEntity<>(beneficiaries, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Beneficiary> saveBeneficiary(@RequestBody Beneficiary beneficiary) {
        Beneficiary savedBeneficiary = beneficiaryService.saveBeneficiary(beneficiary);
        return new ResponseEntity<>(savedBeneficiary, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beneficiary> getBeneficiaryById(@PathVariable Long id) {
        Beneficiary beneficiary = beneficiaryService.getBeneficiaryById(id);
        return beneficiary != null ? new ResponseEntity<>(beneficiary, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBeneficiary(@PathVariable Long id) {
        beneficiaryService.deleteBeneficiary(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
