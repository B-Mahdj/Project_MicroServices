import React from 'react'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {PrincipalContainer, UpContainer, MiddleContainer, DownContainer, SocialMedia} from '../pure-components/MiddlePart/MiddlePart'
import Background from '../pure-components/Background/Background'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'

const Home = () => {
    return <Background>
        <NavBar></NavBar>
        <PrincipalContainer>
            <UpContainer>
            </UpContainer>
            <MiddleContainer></MiddleContainer>
            <DownContainer>
            {[instagram, twitter, facebook].map((reseau,index) => {
                const style = index === 1 ? 'black solid 2px' : ''
                    return <SocialMedia key={index} border={{borderLeft : style, borderRight : style}}>
                    <img src={reseau} alt='pas trouver'/>
                    <div>AGENCETOUSRISQUES</div>
                </SocialMedia>
                })}
            </DownContainer>
        </PrincipalContainer>
    </Background>
}

export default Home