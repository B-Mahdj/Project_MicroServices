package com.lsi2.microservice.Mapper;

import com.lsi2.microservice.DTO.PropertiesWoutUserDTO;
import com.lsi2.microservice.DTO.ProprieteDTO;
import com.lsi2.microservice.DTO.UserDTO;
import com.lsi2.microservice.Entity.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class UserMapper{


    public UserDTO toUserDTO(Utilisateur utilisateur) {

        return new UserDTO(utilisateur.getPassword(), utilisateur.getNom(), utilisateur.getPrenom(), utilisateur.getAdresse(), utilisateur.getVille(), utilisateur.getTelephone(), utilisateur.getMail(), utilisateur.getProprietaire(), utilisateur.getLocataire());

    }


    public List<UserDTO> toUserDTOs(List<Utilisateur> utilisateurs) {
            List<UserDTO> userDTOS = new ArrayList<>();
            utilisateurs.forEach(user -> userDTOS.add(toUserDTO(user)));
        return userDTOS;
    }

    public Utilisateur toUser(UserDTO userDTO) {
        Utilisateur user = new Utilisateur();
        user.setPassword(userDTO.getPassword());
        user.setNom(userDTO.getNom());
        user.setPrenom(userDTO.getPrenom());
        user.setAdresse(userDTO.getAdresse());
        user.setVille(userDTO.getVille());
        user.setMail(userDTO.getMail());
        user.setTelephone(userDTO.getTelephone());
        user.setProprietaire(userDTO.getProprietaire());
        user.setLocataire(userDTO.getLocataire());
        return user;
    }
}
