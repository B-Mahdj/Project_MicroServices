package com.lsi2.microservice.DTO;

import java.util.HashSet;
import java.util.Set;

public class UserDTO {

    private Long id;
    private String password;

    private String nom;

    private String prenom;

    private String  adresse;

    private String ville;

    private String mail;

    private String telephone;

    private Boolean proprietaire;

    private Boolean locataire;


    public UserDTO() {
    }

    public UserDTO(Long id, String password, String nom, String prenom, String adresse, String ville, String mail, String telephone, Boolean proprietaire, Boolean locataire) {
        this.id = id;
        this.password = password;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.ville = ville;
        this.mail = mail;
        this.telephone = telephone;
        this.proprietaire = proprietaire;
        this.locataire = locataire;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
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

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public Boolean getProprietaire() {
        return proprietaire;
    }

    public void setProprietaire(Boolean proprietaire) {
        this.proprietaire = proprietaire;
    }

    public Boolean getLocataire() {
        return locataire;
    }

    public void setLocataire(Boolean locataire) {
        this.locataire = locataire;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "id=" + id +
                ", password='" + password + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", adresse='" + adresse + '\'' +
                ", ville='" + ville + '\'' +
                ", mail='" + mail + '\'' +
                ", telephone='" + telephone + '\'' +
                ", proprietaire=" + proprietaire +
                ", locataire=" + locataire +
                '}';
    }
}
