import React, { useEffect, useState } from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {GridCard, CardContainer, TopInfo, ImgLogement, InfoLogement, DownInfo, InfoPropietaire, BtnCatalogue, PopUp, BtnContainer} from '../pure-components/CardLogement/CardLogement'
import {Input, Button} from '../pure-components/Formulaire/Formulaire'
import Axios from 'axios'

const formDataVente = [
    {
        text: "Date de la vente",
        type: "date",
        key: "date_vente"
    },
    {
        text: "Commission",
        type: "text",
        key: "com"
    }
]

const formDateVisite = [
    {
        text: "Date de la visite",
        type: "date",
        key: "date_visite"
    }
]

const Catalogue = () => {
    const[logements, setLogements] = useState([]);
    const[isActivePopUp, setPopUp] = useState(false);
    const[btnSelector, setBtnSelector] = useState(false);
    const[fields, setField] = useState([]);
    const [data, setData] = useState({})

    useEffect(() => {
        Axios.get("http://localhost:3000/api/v1/proprietes").then((response) => {
            console.log(response.data);
            setLogements(response.data);
        })
    },[])

    // const submitDataVente = async () => {
    //     showPopUp();
	// 	Axios.post("http://localhost:3001/api/Vente", {
    //     data : data, idLogement : fields.id_logement
    // })
    // setData(null);
    // }
    
    // const submitDataVisite = async () => {
    //     showPopUp();
	// 	Axios.post("http://localhost:3001/api/AjoutVisite", {
    //     data : data, idLogement : fields.id_logement
    // })
    // setData(null);
    // }

    const showPopUp = (isDemande, field) => {
        setPopUp(!isActivePopUp)
        setBtnSelector(isDemande)
        setField(field)
    }

    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
        <GridCard>
                {
                    logements && logements.map(field => {
                        // const img = require('../assets/'+ field.photo);
                     return <CardContainer key={field.id_propriete}>
                        <TopInfo>
                            {/* <ImgLogement path={img}></ImgLogement> */}
                            <InfoLogement typeLogement={field.type} prix={field.prix}></InfoLogement>
                        </TopInfo>
                        <DownInfo>
                            <InfoPropietaire proprietaire={field.id_proprietaire} adresse={field.adresse} ville={field.ville}></InfoPropietaire>
                        </DownInfo>
                    </CardContainer>
                    })
                }
            </GridCard>
        </PrincipalContainer>
    </Background>
}

export default Catalogue