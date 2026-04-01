import React from 'react'
import './Hero.css'
import hero from '../../assets/Hero.svg'
import TextType from '../TextType/TextType';
import { Break } from 'three/tsl';

const Hero = () => {
  return (
    <div className="hero">
        <img src={hero} alt="" />
        <div className="txt">
        <h1>Olá, eu sou <br />
        <TextType 
            text={["Desenvolvedora FrontEnd", "Cientista de Dados", "Designer UI/UX"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
        />
        </h1>
        </div>
    </div>
  )
}

export default Hero
