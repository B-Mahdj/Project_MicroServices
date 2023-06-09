import React, {useEffect, useState } from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {GridCard, CardContainer, TopInfo, ImgLogement, InfoLogement} from '../pure-components/CardLogement/CardLogement'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Catalogue = () => {
    const[logements, setLogements] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3000/api/v1/proprietes").then((response) => {
            console.log(response.data);
            setLogements(response.data);
        })
    },[])

    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <GridCard>
                {
                    logements && logements.map(field => {
                        const img = require('../assets/'+ field.photo);
                     return <Link key={field.id_propriete} state={{field}} to = '/BienImmobilier' style={{ textDecoration: 'none'}}>
                            <CardContainer>
                                <TopInfo>
                                    <ImgLogement path={img}></ImgLogement>
                                    <InfoLogement typeLogement={field.type} prix={field.prix} adresse={field.adresse} ville={field.ville}></InfoLogement>
                                </TopInfo>
                            </CardContainer>
                        </Link>
                    })
                }
            </GridCard>
        </PrincipalContainer>
    </Background>
}

export default Catalogue