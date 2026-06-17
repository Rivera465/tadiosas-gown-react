export default function About() {
  return (
    <section className="featured" id="about">
      <div className="featured-inner">
        <div className="featured-img-wrap">
          <img
            className="featured-img"
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
            alt="Designed for Every Silhouette"
          />
          <div className="featured-img-accent" />
        </div>

        <div>
          <div className="section-label">Our Promise</div>
          <h2 className="section-title">
            Designed for<br />
            Every{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--gold-dark)' }}>
              Silhouette.
            </em>
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--muted)', margin: '1.5rem 0', fontWeight: 300 }}>
            Every body is worthy of beauty. At Tadiosa's, we carry sizes in Small, Medium, and Large — because your most precious moments deserve attire that fits you perfectly, not the other way around.
          </p>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: 'var(--muted)', fontWeight: 300 }}>
            Our expert team offers personalized fittings and alterations at our Balibago atelier, ensuring every client walks out feeling extraordinary.
          </p>

          <div className="featured-stats">
            <div><div className="stat-val">1+</div><div className="stat-label">Year of Service</div></div>
            <div><div className="stat-val">200+</div><div className="stat-label">Styles in Stock</div></div>
            <div><div className="stat-val">10K+</div><div className="stat-label">Happy Clients</div></div>
          </div>

          <a href="#catalog" className="btn-primary">Browse Catalog</a>
        </div>
      </div>
    </section>
  )
}
