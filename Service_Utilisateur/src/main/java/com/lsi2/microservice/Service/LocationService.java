package com.lsi2.microservice.Service;

import com.lsi2.microservice.Entity.Location;
import com.lsi2.microservice.Entity.Utilisateur;
import com.lsi2.microservice.Repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public List<Location> getAllLocation(){
        return locationRepository.findAll();
    }

    public List<Location> getLocationByLocataireId(Utilisateur user){
        return locationRepository.findByUtilisateur(user);
    }

    public Optional<Location> getLocationById(Long id){
        return locationRepository.findById(id);
    }

}
