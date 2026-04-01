import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  setMenuOpen(false)
}

  return (
    <nav className="navbar">
      <img src={logo} alt="logo Ianca Carregosa" className="navbar-logo" />

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollTo('home')}>Home</li>
        <li onClick={() => scrollTo('sobre')}>Sobre</li>
        <li onClick={() => scrollTo('projetos')}>Projetos</li>
        <li onClick={() => scrollTo('contato')}>Contato</li>
      </ul>
    </nav>
  )
}

export default Navbar