import React, { useState, useEffect } from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import { AllCardContainer, CardContainer, ImgLogement, InfoAgence, InfoPropietaire } from '../pure-components/CardGestion/CardGestion'
import Axios from 'axios'

const GestionFinanciere = () => {
        const[transactions, setTransactions] = useState([]);

        useEffect(() => {
        Axios.get("http://localhost:3000/api/getTransaction").then((response) => {
        setTransactions(response.data);
        console.log(response.data);
        })
        },[])
        
        return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <AllCardContainer>
            {
                    transactions && transactions.map(field => {
                        const img = require('../assets/'+ field.img_logement);
                     return <CardContainer>
                                <ImgLogement path={img}></ImgLogement>
                                <InfoPropietaire proprietaire={field.proprietaire} adresse={field.adresse} ville={field.ville}></InfoPropietaire>
                                <InfoAgence PrixVente={field.prix_mev} Comission={1000 + field.prix_mev*field.pourcentage_negociation}></InfoAgence>
                        </CardContainer>
                    })
            }
            </AllCardContainer>
        </PrincipalContainer>
        </Background>
}

export default GestionFinanciere