import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.svg'
import TextType from '../TextType/TextType'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="hero">
      <img src={hero} alt="hero illustration" />

      <div className="txt">
        <h1>
          {t('hero.greeting')} <br />

          <TextType 
            text={t('hero.roles', { returnObjects: true })}
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