import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="navbar-logo">
          MAPI<span className="logo-dot"></span>
        </a>

        {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Quiénes Somos</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Servicios</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Precios</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn-primary navbar-cta">Empezar</a>
        </div>

        <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
