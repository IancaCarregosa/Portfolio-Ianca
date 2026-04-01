import React from 'react'
import './Skills.css'
import title from '../../assets/titleSkills.svg'
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
  return (
    <div className="skills">
        <div className="title">
            <img src={title} alt="" srcset="" />
        </div>
        <div className="habilidades">
            <div className="skills1">
            <img src={html} alt="" srcset="" />
            <img src={css} alt="" srcset="" />
            <img src={js} alt="" srcset="" />
            <img src={reactJS} alt="" srcset="" />
            <img src={wp} alt="" srcset="" />
            <img src={php} alt="" srcset="" />
            <img src={reactNative} alt="" srcset="" />   
            </div>
            <div className="skills2">
            <img src={bootstrap} alt="" srcset="" />
            <img src={figma} alt="" srcset="" />
            <img src={sql} alt="" srcset="" />
            <img src={python} alt="" srcset="" />
            <img src={powerBI} alt="" srcset="" />
            <img src={ts} alt="" srcset="" />
            <img src={tailwind} alt="" srcset="" />  
            </div>
        </div>
    </div>
    
  )
}

export default Skills
