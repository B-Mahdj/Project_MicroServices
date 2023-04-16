import React from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import { VueContainer, PhotoBien, InfoBien } from '../pure-components/VueBienImmobilier/vueBienImmobilier'
import { useLocation } from 'react-router-dom'

const BienImmobilier = () => {
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