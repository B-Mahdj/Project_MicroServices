import React, { useState, useContext} from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import { UserContext } from '../App'
import {FormContainer, Input, Button, RightForm, LeftForm, ImageUploader} from '../pure-components/Formulaire/Formulaire'
import Axios from 'axios';

const formData = [
    {
        text: "Type de bien",
        type: "text",
        key: "type"
    },
    {
        text: "Adresse",
        type: "text",
        key: "adresse"
    },
    {
        text: "Ville",
        type: "text",
        key: "ville"
    },
    {
        text: "Prix de vente",
        type: "text",
        key: "prix"
    }
    
]

const AjoutBien = () => {
    const { user } = useContext(UserContext);
    const [data, setData] = useState({})
    const [fileToDisplay, setfileToDisplay] = useState("")
    const [fileName, setfileName] = useState({})

    const submitData = async () => {
        try {
          const response = await Axios.post("http://localhost:3000/api/v1/proprietes", {
            type: data.type,
            adresse: data.adresse,
            ville: data.ville,
            prix: data.prix,
            id_proprietaire: user.id,
            dispo: true,
            photo: fileName,
          });
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    
    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <FormContainer>
                <LeftForm>
                    {
                        formData.map(field => {
                                return <Input key={field.key} type={field.type} placeholder={field.text} onChange={(e) => {
                                    setData(prev => {
                                        prev[field.key] = e.target.value
                                        return prev;
                                    })
                                    }
                                }>{field.text} : </Input>
                        })
                    }
                </LeftForm>
                <RightForm>
                    <ImageUploader
                        fileToDisplay={fileToDisplay}
                        setfileToDisplay={setfileToDisplay}
                        setfileName={setfileName}
                    />
                    <Button onClick={submitData}>Enregistrer le bien</Button>
                </RightForm>
            </FormContainer>
        </PrincipalContainer>
        </Background>
}

export default AjoutBien