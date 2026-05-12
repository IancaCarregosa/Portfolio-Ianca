import React from 'react'
import { useTranslation } from 'react-i18next'
import './About.css'
import ianca from '../../assets/ianca.svg'
import titlePT from '../../assets/title.svg'
import titleEN from '../../assets/titleENG.svg'

const About = () => {
  const { t, i18n } = useTranslation()

  const isPT = i18n.language.startsWith('pt')

  return (
    <div className='about'>
      <div className="aboutLinha"></div>

      <div className="about-sections">
        <div className="aboutFoto">
          <img src={ianca} alt="Ianca Carregosa" />
        </div>

        <div className="aboutTexto">
          {/* TÍTULO DINÂMICO */}
          <img src={isPT ? titlePT : titleEN} alt="About title" />

          <p>
            {t('about.p1')}
            <br />
            {t('about.p2')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About