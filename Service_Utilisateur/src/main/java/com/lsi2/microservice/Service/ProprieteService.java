package com.lsi2.microservice.Service;

import com.lsi2.microservice.Entity.Propriete;
import com.lsi2.microservice.Repository.ProprieteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProprieteService {

    @Autowired
    private ProprieteRepository proprieteRepository;

    public List<Propriete> getAll(){
        return proprieteRepository.findAll();
    }

    public Optional<Propriete> getById(Long id){
        return proprieteRepository.findById(id);
    }
}
