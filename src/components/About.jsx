import { useState } from 'react'

export default function About() {
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <section className="featured" id="about">
      {mapOpen && (
        <div className="modal-overlay" onClick={() => setMapOpen(false)}>
          <div className="map-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setMapOpen(false)} aria-label="Close">✕</button>
            <div className="modal-eyebrow" style={{ marginBottom: '1rem' }}>Our Location</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870!2d121.1244!3d14.2067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e5c9f5a0d8b3%3A0x0!2sBalibago%2C%20Santa%20Rosa%2C%20Laguna!5e0!3m2!1sen!2sph!4v1620000000000"
              width="100%"
              height="400"
              style={{ border: 'none', display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              title="Tadiosa's Gown Rental Location"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=510+Felix+Relix+Street+Balibago+Santa+Rosa+Laguna+Philippines"
              target="_blank"
              rel="noreferrer"
              className="directions-btn"
              style={{ display: 'inline-flex', marginTop: '1rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      )}

      <div className="featured-inner">
        <div className="featured-img-wrap">
          <img
            className="featured-img"
            src="/Alampay 1(1).png"
            alt="Tadiosa's Gown Rental — Filipiniana Collection"
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
          <div className="featured-img-accent" />
        </div>

        <div>
          <div className="section-label">About Us</div>
          <h2 className="section-title">
            Where Every Moment<br />
            Becomes{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--gold-dark)' }}>
              Unforgettable.
            </em>
          </h2>

          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', margin: '1.5rem 0 1rem', fontWeight: 300 }}>
            Founded in 2024, Tadiosa's Gown Rental was born out of a passion for making elegance accessible to everyone. Located at <button onClick={() => setMapOpen(true)} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--gold-dark)', textDecoration: 'underline', fontWeight: 300, fontSize: '1rem', cursor: 'pointer', fontFamily: 'inherit' }}>510 Felix Relix Street, Balibago</button>, we proudly serve clients across Laguna and nearby provinces.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '1rem', fontWeight: 300 }}>
            We carry a wide range of attire — from stunning Ball Gowns, Wedding Gowns, and Filipiniana to classic Barong Tagalog and formal suits — available in sizes Small, Medium, and Large to ensure every client finds their perfect fit.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Our team is dedicated to delivering the best experience — from personalized style guidance to on-the-spot fitting assistance. We believe that every person deserves to look and feel their absolute best on their most important occasions.
          </p>

          <div className="featured-stats">
            <div><div className="stat-val">2024</div><div className="stat-label">Est. Year</div></div>
            <div><div className="stat-val">200+</div><div className="stat-label">Styles in Stock</div></div>
            <div><div className="stat-val">S–L</div><div className="stat-label">Sizes Available</div></div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#catalog" className="btn-primary">Browse Catalog</a>
            <a href="#contact" className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
