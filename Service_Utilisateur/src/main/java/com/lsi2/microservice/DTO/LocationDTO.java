package com.lsi2.microservice.DTO;

public class LocationDTO {

    private UserDTO userDTO;

    private PropertiesWoutUserDTO proprieteDTO;

    private String date_debut;

    private String date_fin;

    private Boolean annule;

    public LocationDTO() {
    }

    public LocationDTO(UserDTO userDTO, PropertiesWoutUserDTO proprieteDTO, String date_debut, String date_fin, Boolean annule) {
        this.userDTO = userDTO;
        this.proprieteDTO = proprieteDTO;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.annule = annule;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    public PropertiesWoutUserDTO getProprieteDTO() {
        return proprieteDTO;
    }

    public void setProprieteDTO(PropertiesWoutUserDTO proprieteDTO) {
        this.proprieteDTO = proprieteDTO;
    }

    public String getDate_debut() {
        return date_debut;
    }

    public void setDate_debut(String date_debut) {
        this.date_debut = date_debut;
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
        return "LocationDTO{" +
                "userDTO=" + userDTO +
                ", proprieteDTO=" + proprieteDTO +
                ", date_debut='" + date_debut + '\'' +
                ", date_fin='" + date_fin + '\'' +
                ", annule=" + annule +
                '}';
    }
}
