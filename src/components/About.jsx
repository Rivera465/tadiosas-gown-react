export default function About() {
  return (
    <section className="featured" id="about">
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
            Founded in <strong style={{ color: 'var(--text)', fontWeight: 600 }}>2024</strong>, Tadiosa's Gown Rental was born out of a passion for making elegance accessible to everyone. Located at <strong style={{ color: 'var(--text)', fontWeight: 600 }}>510 Felix Relix Street, Balibago</strong>, we proudly serve clients across Laguna and nearby provinces.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '1rem', fontWeight: 300 }}>
            We carry a wide range of attire — from stunning Ball Gowns, Wedding Gowns, and Filipiniana to classic Barong Tagalog and formal suits — available in sizes <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Small, Medium, and Large</strong> to ensure every client finds their perfect fit.
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
