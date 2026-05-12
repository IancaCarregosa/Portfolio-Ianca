import React from 'react'
import './Contato.css'
import titlePT from '../../assets/titleContato.svg'
import titleENG from '../../assets/titleContatoENG.svg'
import email from '../../assets/email.png'
import wpp from '../../assets/wpp.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import { useTranslation } from 'react-i18next'

const Contato = () => {
    const { i18n } = useTranslation()
    const isPT = i18n.language.startsWith('pt')
  return (
    <div className="contato">
        <div className="boxContato">
           <div className="titleContato"><img src={isPT ? titlePT : titleENG} alt="Contato title" /></div>
            <ul>
                <li> <a href='mailto:iancacarregosa@gmail.com?subject=Interesse%20profissional&body=Ol%C3%A1%2C%20tudo%20bem%3F%20%0AVim%20por%20meio%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.' target="_blank" rel="noopener noreferrer"><img src={email} alt=""/></a></li>
                <li><a href='https://wa.me/5579998463488?text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20sobre%20um%20poss%C3%ADvel%20projeto%20ou%20oportunidade.' target="_blank" rel="noopener noreferrer"><img src={wpp} alt=""/></a></li>
                <li><a href='https://www.linkedin.com/in/ianca-carregosa' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt=""/></a></li>
                <li><a href='https://github.com/IancaCarregosa' target="_blank" rel="noopener noreferrer"><img src={github} alt=""/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Contato
