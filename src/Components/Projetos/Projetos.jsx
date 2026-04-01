import React from 'react'
import './Projetos.css'
import title from '../../assets/titleProjetos.svg'
import projetos_data from '../../assets/projetos_data'

const Projetos = () => {
    return (
        <div className="projetos">
            <div className="titleP">
                <img src={title} alt="Título da seção Projetos" /> 
            </div>
            
            <div className="projetos-container">
                {projetos_data.map((projeto, index) => {
                    return (
                        <div key={index} className="projeto-item-group">
                            
                            <div className="projeto-card">
                                <img 
                                    src={projeto.p_img} 
                                    alt={`Imagem do Projeto: ${projeto.p_name}`} 
                                    className="projeto-imagem" 
                                />
                                
                                <div className="projeto-info">
                                    <p>{projeto.p_desc}</p> 
                                    
                                    <div className="projeto-techs-icons">
                                        {projeto.p_techs && projeto.p_techs.map((TechPath, techIndex) => (
                                            <span key={techIndex} className="tech-icon-item">
                                                <img src={TechPath} alt={`Tecnologia ${TechPath}`} className="tech-icon-img" />
                                            </span>
                                        ))}
                                    </div>

                                    <div className="projeto-links">
                                        <a href={projeto.p_github} target="_blank" rel="noopener noreferrer">
                                            Repositório
                                        </a>
                                        
                                        {projeto.p_demo && (
                                            <a href={projeto.p_demo} target="_blank" rel="noopener noreferrer">
                                                Ver Projeto
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <h3 className="projeto-titulo">{projeto.p_name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projetos