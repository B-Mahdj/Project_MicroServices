package com.lsi2.microservice.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Location")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_location;

    @ManyToOne
    @JoinColumn(name = "id_locataire")
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "id_propriete")
    private Propriete propriete;

    private String date_deb;

    private String date_fin;

    private Boolean annule;

    public Location() {
    }

    public Location(Long id_location, Utilisateur utilisateur, Propriete propriete, String date_debut, String date_fin, Boolean annule) {
        this.id_location = id_location;
        this.utilisateur = utilisateur;
        this.propriete = propriete;
        this.date_deb = date_debut;
        this.date_fin = date_fin;
        this.annule = annule;
    }

    public Long getId_location() {
        return id_location;
    }

    public void setId_location(Long id) {
        this.id_location = id;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public Propriete getPropriete() {
        return propriete;
    }

    public void setPropriete(Propriete propriete) {
        this.propriete = propriete;
    }

    public String getDate_deb() {
        return date_deb;
    }

    public void setDate_deb(String date_deb) {
        this.date_deb = date_deb;
    }

    public String getDate_fin() {
        return date_fin;
    }

    public void setDate_fin(String date_fin) {
        this.date_fin = date_fin;
    }

    public Boolean getAnnule() {
        return annule;
    }

    public void setAnnule(Boolean annule) {
        this.annule = annule;
    }

    @Override
    public String toString() {
        return "Location{" +
                "id=" + id_location +
                ", utilisateur=" + utilisateur +
                ", propriete=" + propriete +
                ", date_debut='" + date_deb + '\'' +
                ", date_fin='" + date_fin + '\'' +
                ", annule=" + annule +
                '}';
    }
}
