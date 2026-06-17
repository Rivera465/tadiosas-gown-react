import { useEffect, useState } from 'react'

const NAV_SECTIONS = [
  { id: 'home',        label: 'Home' },
  { id: 'collections', label: 'Collections' },
  { id: 'about',       label: 'About Us' },
  { id: 'catalog',     label: 'Rental Catalog' },
  { id: 'reviews',     label: 'Reviews' },
  { id: 'contact',     label: 'Contact' },
]

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')

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

  return (
    <nav id="navbar" style={{ boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none' }}>
      <a href="#home" className="nav-logo">Tadiosa<span>'s</span> Gown</a>

      <ul className="nav-links">
        {NAV_SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`nav-link${activeId === id ? ' active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button onClick={onBookNow} className="nav-cta">Contact Us</button>
    </nav>
  )
}
