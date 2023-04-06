package com.lsi2.microservice.Entity;


import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name="Propriete")
public class Propriete {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_propriete;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "id_locataire")
    private Utilisateur utilisateur;

    @OneToMany(mappedBy = "propriete")
    private Set<Location> locationSet;

    private String type;

    private String adresse;

    private String ville;

    private float prix;

    private boolean dispo;

    private String photo;

    public Propriete() {
    }

    public Propriete(Long id_propriete, Utilisateur proprietaire, String type, String adresse, String ville, float prix, boolean dispo, String photo) {
        this.id_propriete = id_propriete;
        this.utilisateur = proprietaire;
        this.type = type;
        this.adresse = adresse;
        this.ville = ville;
        this.prix = prix;
        this.dispo = dispo;
        this.photo = photo;
    }

    public Long getId_propriete() {
        return id_propriete;
    }

    public void setId_propriete(Long id) {
        this.id_propriete = id;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur proprietaire) {
        this.utilisateur = proprietaire;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public boolean isDispo() {
        return dispo;
    }

    public void setDispo(boolean dispo) {
        this.dispo = dispo;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public String toString() {
        return "Propriete{" +
                "id=" + id_propriete +
                ", proprietaire=" + utilisateur +
                ", type='" + type + '\'' +
                ", adresse='" + adresse + '\'' +
                ", ville='" + ville + '\'' +
                ", prix=" + prix +
                ", dispo=" + dispo +
                ", photo='" + photo + '\'' +
                '}';
    }
}
