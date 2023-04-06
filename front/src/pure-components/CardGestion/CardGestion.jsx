import React from 'react';
import styles from './CardGestion.module.css'

const AllCardContainer = ({children}) => {
    return <div className={styles.AllCardContainer}>
        {children}
    </div>
}

const CardContainer = ({children}) => {
    return <div className={styles.CardContainer}>
        {children}
    </div>
}

const ImgLogement = ({path}) => {
    return <img className={styles.ImgLogement} src={path} alt='pas trouver'/>
}

const InfoPropietaire = ({proprietaire, adresse, ville}) => {
    return <div className={styles.InfoPropietaire}>
        <div className={styles.ProprietaireText}>Propriétaire : M. {proprietaire}</div>
        <div className={styles.PropText}>{adresse}, {ville}</div>
    </div>
}

const InfoAgence = ({PrixVente, Comission}) => {
    return <div className={styles.InfoAgence}>
        <div className={styles.PrixText}>Prix de vente : {PrixVente}€</div>
        <div className={styles.ComText}>Comission : {Comission}€</div>
    </div>
}

export {
    AllCardContainer,
    CardContainer,
    ImgLogement,
    InfoPropietaire,
    InfoAgence
}