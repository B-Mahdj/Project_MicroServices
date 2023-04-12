package com.lsi2.microservice.Controller;

import com.lsi2.microservice.DTO.LocationDTO;
import com.lsi2.microservice.DTO.ProprieteDTO;
import com.lsi2.microservice.DTO.UserDTO;
import com.lsi2.microservice.Entity.Propriete;
import com.lsi2.microservice.Entity.Utilisateur;
import com.lsi2.microservice.Mapper.LocationMapper;
import com.lsi2.microservice.Mapper.ProprieteMapper;
import com.lsi2.microservice.Mapper.UserMapper;
import com.lsi2.microservice.Service.LocationService;
import com.lsi2.microservice.Service.ProprieteService;
import com.lsi2.microservice.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ProprieteService proprieteService;

    @Autowired
    private LocationService locationService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ProprieteMapper proprieteMapper;

    @Autowired
    private LocationMapper locationMapper;

    @GetMapping("/")
    public String home(){
        return "Hello Word";
    }

    @GetMapping(value = "/users")
    public List<UserDTO> getAllUser(){
        return userMapper.toUserDTOs(userService.getAllUser());
    }

    @GetMapping(value = "/user/{id}", produces = "application/json")
    public UserDTO getUserById(@PathVariable Long id){
        return userMapper.toUserDTO(userService.getUserByID(id).get());
    }

    @PutMapping(value = "/user/update/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO){
        UserDTO updatedUser = userMapper.toUserDTO(userService.getUserByID(id).get());
        updatedUser.setPassword(userDTO.getPassword());
        updatedUser.setNom(userDTO.getNom());
        updatedUser.setPrenom(userDTO.getPrenom());
        updatedUser.setAdresse(userDTO.getAdresse());
        updatedUser.setVille(userDTO.getVille());
        updatedUser.setMail(userDTO.getMail());
        updatedUser.setTelephone(userDTO.getTelephone());
        updatedUser.setProprietaire(userDTO.getProprietaire());
        updatedUser.setLocataire(userDTO.getLocataire());
        userService.saveUser(userMapper.toUser(updatedUser));
    }

    @PostMapping("/user/create")
    public void createUser(@RequestBody UserDTO userDTO){
        userService.saveUser(userMapper.toUser(userDTO));
    }

    @GetMapping(value = "/proprietaires", produces = "application/json")
    public List<UserDTO> getAllProprietaire(){
        return userMapper.toUserDTOs(userService.getAllProprietaire());
    }

    @GetMapping(value = "/locataires", produces = "application/json")
    public List<UserDTO> getAllLocataire(){
        return userMapper.toUserDTOs(userService.getAllLocataire());
    }

    @GetMapping(value = "/proprietaire/{id}/proprietes", produces = "application/json")
    public List<ProprieteDTO> getProprietaireProprietes(@PathVariable Long id){
        List<Propriete> proprietes = proprieteService.getAll().stream().filter(propriete -> propriete.getUtilisateur().getId_user()== id).toList();
        return proprieteMapper.mapToDTO(proprietes);
    }

    @GetMapping(value = "/proprietaire/{idProprietaire}/propriete/{idPropriete}", produces = "application/json")
    public ProprieteDTO  getProprietairePropriete(@PathVariable Long idProprietaire, @PathVariable Long idPropriete){
        return proprieteMapper.mapToDTO(proprieteService.getById(idPropriete).get());
    }

    @GetMapping(value = "/locataire/{idLocataire}/locations", produces = "application/json")
    public List<LocationDTO> getLocataireLocations(@PathVariable Long idLocataire){
        Utilisateur user = userService.getUserByID(idLocataire).get();
        return locationMapper.toLocationDTOs(locationService.getLocationByLocataireId(user));
    }

    @GetMapping(value = "/locataire/{idLocataire}/location/{idLocation}", produces = "application/json")
    public LocationDTO getLocataireLocation(@PathVariable Long idLocataire, @PathVariable Long idLocation){
        return locationMapper.toLocationDTO(locationService.getLocationById(idLocation).get());
    }

    @GetMapping("/login")
    public UserDTO getUserByEmailAndPassword(@RequestParam String email, @RequestParam String password){
        if(userService.getUserByMailAndPassword(email,password).isPresent()){
            return userMapper.toUserDTO(userService.getUserByMailAndPassword(email, password).get());
        }
       else return new UserDTO();

    }

}
