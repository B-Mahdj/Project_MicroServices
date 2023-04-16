import React, { useContext } from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const Container = ({children}) => {
    return <div className={styles.container}> 
        {children}
    </div>
}

const IconMenu = ({children}) => {
    const img = require('../../assets/maison.png');
    return <div className={styles.logoContainer}>
        <img className={styles.Logo} src={img} alt="pas trouver"></img>
        <div className={styles.textLogo}>{children}</div>
    </div>
}

const NavButton = ({children, onClick}) => {
    return <div className={styles.btn}>
        {children}
    </div>
}

const Account = () => {
    const img = require('../../assets/utilisateur.png');
    return <img className={styles.AccountIcon} src={img} alt="pas trouver"></img>
}

const NavBar = () => {
    return <Container>
    <Link to = '/home' style={{ textDecoration: 'none'}}>
        <IconMenu>Les agents tous risques</IconMenu>
    </Link>
    <div className={styles.btnContainer}>
        <div></div>
        <Link to = '/Catalogue' style={{display:'flex', alignItems:'center', textDecoration: 'none'}} className={styles.navigateHover}>
            <NavButton>Propriété</NavButton>
        </Link>
        <Link to = '/Ajout-bien-immobilier' style={{display:'flex', alignItems:'center', textDecoration: 'none'}} className={styles.navigateHover}>
            <NavButton>Ajouter un bien</NavButton>
        </Link>
        <Link to = '/Account' style={{display:'flex', justifyContent:'center', alignItems:'center', textDecoration: 'none' }} className={styles.navigateHover}>
            <Account></Account>
        </Link>
    </div>
</Container>
}
export {
	NavBar
}