import React from 'react'
import styles from './vueBienImmobilier.module.css'

const VueContainer = ({children}) => {
    return <div className={styles.vueContainer}>
        {children}
    </div>
}

const PhotoBien = ({path}) => {
    return <img className={styles.ImgLogement} src={path} alt='pas trouver'></img>
}

const InfoBien = ({typeLogement,adresse,ville, prix}) => {
    return <div className={styles.InfoBien}>
        <div className={styles.TypeLogement}>{typeLogement}</div>
        <div className={styles.Prix}>{prix}€</div>
        <div className={styles.PropText}>{adresse}, {ville}</div>
    </div>
}

export {
    VueContainer,
	PhotoBien,
    InfoBien
}