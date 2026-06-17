export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div className="hero-eyebrow">Atelier Est. 2024</div>
        <h1 className="hero-title">
          Celestial Elegance<br />
          for Every<br />
          <em>Occasion.</em>
        </h1>
        <p className="hero-desc">
          Tadiosa's curates the finest gowns, suits, and traditional Filipino attire — crafted to celebrate your most cherished moments.
        </p>
        <div className="hero-actions">
          <a href="#catalog" className="btn-primary">Explore Collection</a>
          <a href="#contact" className="btn-ghost">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 8 16 12 12 16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Visit Atelier
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div
          className="hero-image-inner"
          style={{ background: "url('/hero-gown.png') center top/cover no-repeat" }}
        />
        <div className="hero-badge">
          <div className="hero-badge-num">200+</div>
          <div className="hero-badge-label">Styles Available</div>
        </div>
      </div>
    </section>
  )
}
