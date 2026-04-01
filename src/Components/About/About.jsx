import React from 'react'
import './About.css'
import sobreLinha from '../../assets/sobreLinha.svg'
import ianca from '../../assets/ianca.svg'
import title from '../../assets/title.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutLinha"></div>
        <div className="about-sections">
            <div className="aboutFoto">
                <img src={ianca} alt=""/>
            </div>
            <div className="aboutTexto">
              <img src={title} alt=""/>
              <p>Eu sou Ianca Carregosa, curiosa por natureza e apaixonada por transformar ideias em experiências digitais. Estudo Ciência da Computação e me encantei pelo universo do front-end, do UI/UX e também pela área de dados. <br/> Gosto de unir criatividade e lógica para dar vida a projetos que sejam bonitos, funcionais e que realmente façam sentido para quem usa. Com minhas habilidades, desenvolvo sites para e-commerce, aplicativos, landing pages, blogs e muito mais, sempre com o objetivo de criar algo que conecte pessoas e tecnologia de forma leve e intuitiva. Se interessou? seu projeto pode ser o próximo!</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
