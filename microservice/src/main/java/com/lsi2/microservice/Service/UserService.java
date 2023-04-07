package com.lsi2.microservice.Service;

import com.lsi2.microservice.Entity.Utilisateur;
import com.lsi2.microservice.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<Utilisateur> getAllUser(){
        return  userRepository.findAll();
    }
    public List<Utilisateur> getAllProprietaire(){
        return userRepository.findByProprietaire(true);
    }

    public List<Utilisateur> getAllLocataire(){
        return userRepository.findByLocataire(true);
    }

    public Optional<Utilisateur> getUserByID(Long id){
        return userRepository.findById(id);
    }

    public Optional<Utilisateur> getUserByMailAndPassword(String mail, String password){
        return userRepository.findByMailAndPassword(mail, password);
    }

    public Utilisateur saveUser(Utilisateur user){
        return userRepository.save(user);
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
}
