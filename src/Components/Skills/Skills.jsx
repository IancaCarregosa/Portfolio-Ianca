import React from 'react'
import './Skills.css'
import titlePT from '../../assets/titleSkills.svg'
import titleEN from '../../assets/titleSkillsENG.svg'
import { useTranslation } from 'react-i18next'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import reactJS from '../../assets/reactjs.svg'
import wp from '../../assets/wp.svg'
import php from '../../assets/php.svg'
import reactNative from '../../assets/reactNative.svg'
import bootstrap from '../../assets/bootstrap.svg'
import figma from '../../assets/figma.svg'
import sql from '../../assets/sql.svg'
import python from '../../assets/python.svg'
import powerBI from '../../assets/powerBI.svg'
import ts from '../../assets/typescript.svg'
import tailwind from '../../assets/tailwind.svg'


const Skills = () => {
  const { i18n } = useTranslation()

  const isPT = i18n.language.startsWith('pt')

  return (
    <div className="skills">
      <div className="title">
        <img src={isPT ? titlePT : titleEN} alt="Skills title" />
      </div>

      <div className="habilidades">
        <div className="skills1">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={reactJS} alt="" />
          <img src={wp} alt="" />
          <img src={php} alt="" />
          <img src={reactNative} alt="" />   
        </div>

        <div className="skills2">
          <img src={bootstrap} alt="" />
          <img src={figma} alt="" />
          <img src={sql} alt="" />
          <img src={python} alt="" />
          <img src={powerBI} alt="" />
          <img src={ts} alt="" />
          <img src={tailwind} alt="" />  
        </div>
      </div>
    </div>
  )
}

export default Skills
