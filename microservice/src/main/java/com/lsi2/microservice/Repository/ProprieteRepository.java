package com.lsi2.microservice.Repository;

import com.lsi2.microservice.Entity.Propriete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProprieteRepository extends JpaRepository<Propriete, Long> {

}
