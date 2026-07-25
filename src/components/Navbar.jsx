import { useEffect, useState } from 'react'

const NAV_SECTIONS = [
  { id: 'collections', label: 'Collections' },
  { id: 'about',       label: 'About Us' },
  { id: 'catalog',     label: 'Rental Catalog' },
  { id: 'services',    label: "Why Tadiosa's" },
  { id: 'reviews',     label: 'Reviews' },
  { id: 'contact',     label: 'Contact' },
]

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      let current = 'home'
      const offset = 120
      NAV_SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      })
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav id="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none' }}>
        <a href="#home" className="nav-logo">
          <img src="/favicon.png" alt="Tadiosa's Gown Logo" className="nav-logo-img" />
          Tadiosa<span>'s</span> Gown
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={`nav-link${activeId === id ? ' active' : ''}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={onBookNow} className="nav-cta nav-cta-desktop">Contact Us</button>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
          <span className={`ham-line${menuOpen ? ' open' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-logo">Tadiosa's Gown</div>
            <ul className="mobile-nav-links">
              {NAV_SECTIONS.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeId === id ? 'active' : ''}
                    onClick={handleNavClick}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={() => { onBookNow(); setMenuOpen(false) }} className="btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  )
}
