import React from 'react'
import styles from './MiddlePart.module.css'
import devanture from '../../assets/devanture.svg'

const PrincipalContainer = ({children}) =>{
    return <div className={styles.principalContainer}>
        {children}
    </div>
}

const UpContainer = () => {
    return <div className={styles.upContainer}>
        <img className={styles.DevantureImg} src={devanture} alt='pas trouver'/>
        <div className={styles.WelcomeText}>
            Bienvenue sur le site internet de notre agence mmobilière 
        </div>
    </div>
}

const MiddleContainer = () => {
    return <div className={styles.MiddleContainer}>
        <div>Notre agence vous propose des biens immobiliers dans toutes l’Île-de-France</div>
        <div>75 / 77 / 78 / 91 / 92 / 93 / 94 / 95</div>
    </div>
}

const DownContainer = ({children}) => {
    return <div className={styles.DownContainer}>
        {children}
    </div>
}

const SocialMedia = ({children, border}) => {
    return <div className={styles.SocialMedia} style = {border}>
        {children}
    </div>
}

export {
    PrincipalContainer, 
    UpContainer,
    MiddleContainer, 
    DownContainer, 
    SocialMedia
}