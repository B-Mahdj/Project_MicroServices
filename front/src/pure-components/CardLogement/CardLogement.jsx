import React from 'react';
import styles from './CardLogement.module.css'

const GridCard = ({children}) => {
    return <div className={styles.GridCard}>
    {children}
    </div>
}

const CardContainer = ({children}) => {
    return <div className={styles.CardContainer}>
        {children}
    </div>
}

const TopInfo = ({children}) => {
    return <div className={styles.TopInfo}>
        {children}
    </div>
}

const ImgLogement = ({path}) => {
    return <img className={styles.ImgLogement} src={path} alt='pas trouver'/>
}

const InfoLogement = ({typeLogement,adresse,ville, prix}) => {
    return <div className={styles.InfoLogement}>
        <div className={styles.TypeLogement}>{typeLogement}</div>
        <div className={styles.Prix}>{prix}€</div>
        <div className={styles.PropText}>{adresse}, {ville}</div>
    </div>
}

export {
    CardContainer,
    TopInfo,
    ImgLogement,
    InfoLogement,
    GridCard,
}