package com.lsi2.microservice.Mapper;

import com.lsi2.microservice.DTO.LocationDTO;
import com.lsi2.microservice.Entity.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@Component
public class LocationMapper {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private ProprieteMapper proprieteMapper;

    public LocationDTO toLocationDTO(Location location){
        return new LocationDTO(userMapper.toUserDTO(location.getUtilisateur()),proprieteMapper.mapToDTO2(location.getPropriete()),location.getDate_debut(), location.getDate_fin(), location.getAnnule());
    }

    public List<LocationDTO> toLocationDTOs(List<Location>location){
        List<LocationDTO> locationDTOS = new ArrayList<>();
        location.forEach(location1 -> locationDTOS.add(toLocationDTO(location1)));
        return locationDTOS;
    }
}
