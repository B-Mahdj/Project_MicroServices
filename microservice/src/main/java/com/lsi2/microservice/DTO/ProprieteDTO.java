package com.lsi2.microservice.DTO;

public class ProprieteDTO {

    private UserDTO proprietaire;

    private String type;

    private String adresse;

    private String ville;

    private float prix;

    private boolean dispo;

    private String photo;

    public ProprieteDTO() {
    }

    public ProprieteDTO(UserDTO proprietaire, String type, String adresse, String ville, float prix, boolean dispo, String photo) {

        this.proprietaire = proprietaire;
        this.type = type;
        this.adresse = adresse;
        this.ville = ville;
        this.prix = prix;
        this.dispo = dispo;
        this.photo = photo;
    }

    public UserDTO getProprietaire() {
        return proprietaire;
    }

    public void setProprietaire(UserDTO proprietaire) {
        this.proprietaire = proprietaire;
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
}
