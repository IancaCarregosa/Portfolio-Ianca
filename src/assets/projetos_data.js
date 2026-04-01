import projetoArquiteto_img from '../assets/projetoTaylor.png'
import projetoQuartoEscuro_img from '../assets/projetoQuartoEscuro.png'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import reactJS from '../assets/reactjs.svg'
import wp from '../assets/wp.svg'
import php from '../assets/php.svg'
import reactNative from '../assets/reactNative.svg'
import bootstrap from '../assets/bootstrap.svg'
import figma from '../assets/figma.svg'
import illustrator from '../assets/illustrator.svg'

const projetos_data = [
    {
        p_no: 1, 
        p_name: "Blog Tema WordPress", 
        p_img: projetoQuartoEscuro_img, 
        p_desc: "Desenvolvimento de tema para um blog pessoal no WordPress.",
        p_github: "https://github.com/IancaCarregosa/TemaWordPress/tree/main",
        p_demo: "https://quarto-escuro-mente-acesa.wasmer.app",
        p_techs: [
            html, css, php, wp, figma
        ]
    },
    {
        p_no: 2, 
        p_name: "Portfólio Arquiteto", 
        p_img: projetoArquiteto_img, 
        p_desc: "Desenvolvimento de um Portfólio responsivo para um graduando de arquitetura e urbanismo.",
        p_github: "https://github.com/IancaCarregosa/PortfolioTaylor",
        p_demo: "https://taylorguinsberg.github.io/portfolio/index.html",
        p_techs: [
            html, css, js, figma
        ]
    },
     
]

export default projetos_data