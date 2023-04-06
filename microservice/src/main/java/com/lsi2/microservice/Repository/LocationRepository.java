package com.lsi2.microservice.Repository;

import com.lsi2.microservice.Entity.Location;
import com.lsi2.microservice.Entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByUtilisateur(Utilisateur utilisateur);
}
