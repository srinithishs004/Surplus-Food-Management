package com.team2.surplusfood.services;

import com.team2.surplusfood.model.Volunteer;
import com.team2.surplusfood.repositories.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteerService {

    @Autowired
    private VolunteerRepository volunteerRepository;

    public List<Volunteer> getAllVolunteers() {
        return volunteerRepository.findAll();
    }

    public Volunteer saveVolunteer(Volunteer volunteer) {
        return volunteerRepository.save(volunteer);
    }

    public Volunteer getVolunteerById(Long id) {
        return volunteerRepository.findById(id).orElse(null);
    }

    public void deleteVolunteer(Long id) {
        volunteerRepository.deleteById(id);
    }
}
