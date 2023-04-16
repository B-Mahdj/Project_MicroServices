import React, { useState, useEffect, useContext} from 'react'
import Background from '../../pure-components/Background/Background'
import { PrincipalContainer } from '../../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../../pure-components/NavBar/NavBar'
import { UserContext } from '../../App'
import styles from './Account.module.css'
import { Link } from 'react-router-dom'

const AccountInfo = () => {
    const { user } = useContext(UserContext);
    const img = require('../../assets/user.png');
    return (
    <div className={styles.userInfoContainer}>
    <div className={styles.userInfoHeader}>Informations utilisateur</div>
    <div className={styles.userContainer}>
        <div className={styles.profileContainer}>
            <div className={styles.profileImage}>
                <img className={styles.AccountIcon} src={img} alt="pas trouver"></img>
            </div>
        </div>
        <div>
            <div className={styles.userInfo}>Nom : {user.nom}</div>
            <div className={styles.userInfo}>Prénom : {user.prenom}</div>
            <div className={styles.userInfo}>Adresse : {user.adresse}</div>
            <div className={styles.userInfo}>Ville : {user.ville}</div>
            <div className={styles.userInfo}>Email : {user.mail}</div>
            <div className={styles.userInfo}>Téléphone : {user.telephone}</div>
            <div className={styles.userInfo}>Statut : {user.proprietaire ? 'Propriétaire' : ''} {user.locataire ? 'Locataire' : ''}</div>
        </div>
        <div></div>
    </div>
    </div>
    )
}

const Logout = () => {
    const img = require('../../assets/utilisateur.png');
    return <button className={styles.logoutButton}>Déconnexion</button>
}

const Account = () => {

    
    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <AccountInfo></AccountInfo>
            <Link to = '/logout' style={{ marginTop:'50px', display:'flex', justifyContent:'center', alignItems:'center', textDecoration: 'none' }} className={styles.navigateHover}>
                <Logout></Logout>
            </Link>
        </PrincipalContainer>
        </Background>
}

export default Account