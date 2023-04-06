import React, { useContext } from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'

const Container = ({children}) => {
    return <div className={styles.container}> 
        {children}
    </div>
}

const IconMenu = ({children}) => {
    return <div className={styles.logoContainer}>
        <div className={styles.Logo}></div>
        <div className={styles.textLogo}>Bonjour, {children} !</div>
    </div>
}

const NavButton = ({children, onClick}) => {
    return <div onClick={onClick} className={styles.btn}>
        {children}
    </div>
}

const NavBar = () => {
    const { user } = useContext(UserContext);
    return <Container>
    <Link to = '/' style={{ textDecoration: 'none'}}>
        <IconMenu>{user.name}</IconMenu>
    </Link>
    <div style={{padding : '50px', width : '50%', display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
        <Link to = '/Catalogue' style={{ textDecoration: 'none', width : '30%' }}>
            <NavButton>Propriété</NavButton>
        </Link>
        <Link to = '/Ajout-bien-immobilier' style={{ textDecoration: 'none', width : '30%' }}>
            <NavButton>Ajouter un bien</NavButton>
        </Link>
        <Link to = '/Gestion-Financiere' style={{ textDecoration: 'none', width : '30%' }}>
            <NavButton>Gestion Financière</NavButton>
        </Link>
    </div>
</Container>
}
export {
	NavBar
}