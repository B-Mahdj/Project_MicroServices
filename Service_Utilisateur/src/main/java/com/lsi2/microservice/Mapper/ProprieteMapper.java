package com.lsi2.microservice.Mapper;

import com.lsi2.microservice.DTO.PropertiesWoutUserDTO;
import com.lsi2.microservice.DTO.ProprieteDTO;
import com.lsi2.microservice.Entity.Propriete;
import com.lsi2.microservice.Mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;



@Component
public class ProprieteMapper {

    @Autowired
    private UserMapper userMapper;

    public ProprieteDTO mapToDTO(Propriete prop){
        return new ProprieteDTO(userMapper.toUserDTO(prop.getUtilisateur()), prop.getType(), prop.getAdresse(), prop.getVille(), prop.getPrix(), prop.isDispo(), prop.getPhoto());
    }

    public PropertiesWoutUserDTO mapToDTO2(Propriete prop){
        return new PropertiesWoutUserDTO(prop.getType(), prop.getAdresse(), prop.getVille(), prop.getPrix(), prop.isDispo(), prop.getPhoto());
    }

    public List<ProprieteDTO> mapToDTO(List<Propriete> props){
        List<ProprieteDTO> propsDTOS = new ArrayList<>();
        props.forEach(pp -> propsDTOS.add(mapToDTO(pp)));
        return propsDTOS;
    }

    public Propriete mapToEntity(ProprieteDTO proprieteDTO){
        Propriete propriete = new Propriete();
        propriete.setAdresse(proprieteDTO.getAdresse());
        propriete.setDispo(proprieteDTO.isDispo());
        propriete.setPrix(proprieteDTO.getPrix());
        propriete.setPhoto(proprieteDTO.getPhoto());
        propriete.setVille(proprieteDTO.getVille());
        propriete.setUtilisateur(userMapper.toUser(proprieteDTO.getProprietaire()));
        propriete.setType(proprieteDTO.getType());
        return propriete;
    }
}
