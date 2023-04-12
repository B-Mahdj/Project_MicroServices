package com.lsi2.microservice.Repository;

import com.lsi2.microservice.Entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur, Long> {
    List<Utilisateur> findByLocataire(Boolean locataire);
    List<Utilisateur> findByProprietaire(Boolean proprietaire);

    Optional<Utilisateur> findByMailAndPassword(String email, String password);

}
