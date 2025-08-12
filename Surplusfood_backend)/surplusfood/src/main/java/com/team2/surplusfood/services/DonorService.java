package com.team2.surplusfood.services;

import com.team2.surplusfood.model.Donor;
import com.team2.surplusfood.repositories.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorService {

    @Autowired
    private DonorRepository donorRepository;

    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }

    public Donor saveDonor(Donor donor) {
        return donorRepository.save(donor);
    }

    public Donor getDonorById(Long id) {
        return donorRepository.findById(id).orElse(null);
    }

    public void deleteDonor(Long id) {
        donorRepository.deleteById(id);
    }
}
