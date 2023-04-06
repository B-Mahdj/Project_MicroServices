import React, { useEffect, useState } from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {GridCard} from '../pure-components/CardLogement/CardLogement'
import { VueContainer, PhotoBien, InfoBien } from '../pure-components/VueBienImmobilier/vueBienImmobilier'
import {Input, Button} from '../pure-components/Formulaire/Formulaire'
import { Link, useLocation } from 'react-router-dom'
import Axios from 'axios'

const BienImmobilier = () => {
    const[logements, setLogements] = useState([]);
    let {state} = useLocation();
    
    const img = require('../assets/'+ state.field.photo);

    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <VueContainer>
                <PhotoBien path={img}></PhotoBien>
                <InfoBien typeLogement={state.field.type} prix={state.field.prix} adresse={state.field.adresse} ville={state.field.ville}></InfoBien>
            </VueContainer>
        </PrincipalContainer>
    </Background>
}

export default BienImmobilier