import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('pt') ? 'en' : 'pt'
    i18n.changeLanguage(newLang)
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

      {/* MENU CENTRAL */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollTo('home')}>{t('nav.home')}</li>
        <li onClick={() => scrollTo('sobre')}>{t('nav.about')}</li>
        <li onClick={() => scrollTo('projetos')}>{t('nav.projects')}</li>
        <li onClick={() => scrollTo('contato')}>{t('nav.contact')}</li>
      </ul>

      {/* TOGGLE DIREITA */}
      <div className="lang-item">
        <button className="lang-toggle" onClick={toggleLanguage}>
          <Globe size={16} />
          <span>{i18n.language.startsWith('pt') ? 'EN' : 'PT'}</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar