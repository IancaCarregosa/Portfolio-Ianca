import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Lanyard from './Components/Lanyard/Lanyard'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projetos from './Components/Projetos/Projetos'
import Contato from './Components/Contato/Contato'

const App = () => {
  return (
    <>
      <Navbar/>
      <section id="home">
        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        <Hero/>
      </section>
      <section id="sobre">
        <About/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projetos">
        <Projetos/>
      </section>
      <section id="contato">
        <Contato/>
      </section>
    </>
  )
}

export default App