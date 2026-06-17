export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div style={{ marginBottom: '3rem' }}>
        <div className="section-label">Find Us</div>
        <h2 className="section-title">
          Experience{' '}
          <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--gold-dark)' }}>
            Elegance
          </em>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginTop: '0.75rem', fontWeight: 300 }}>
          We welcome you to our Balibago atelier for private fittings and personalized consultations.
        </p>
      </div>

      <div className="contact-inner">
        <div>
          {/* Address */}
          <div className="contact-detail">
            <div className="contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="contact-info-label">Our Atelier</div>
              <div className="contact-info-val">510 Felix Relix Street, Balibago<br />Laguna, Philippines</div>
            </div>
          </div>

          {/* Hours */}
          <div className="contact-detail">
            <div className="contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="contact-info-label">Store Hours</div>
              <div className="contact-info-val">Open 10am – 9pm daily</div>
            </div>
          </div>

          {/* Socials */}
          <div className="contact-detail">
            <div className="contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l16 0" /><path d="M4 9l16 0" /><path d="M4 14l16 0" /><path d="M4 19l16 0" />
              </svg>
            </div>
            <div>
              <div className="contact-info-label">Connect With Us</div>
              <div className="contact-info-val">
                <a href="https://www.instagram.com/tadiosagown/" target="_blank" rel="noreferrer">Instagram: @tadiosagown</a><br />
                <a href="https://www.facebook.com/TadiosaGown/" target="_blank" rel="noreferrer">Facebook: Elegant Gown's Rental Laguna</a><br />
                <a href="https://www.tiktok.com/@tadiosasgownrental" target="_blank" rel="noreferrer">TikTok: @tadiosasgownrental</a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.instagram.com/tadiosagown/" target="_blank" rel="noreferrer" className="social-btn">Instagram</a>
            <a href="https://www.facebook.com/TadiosaGown/" target="_blank" rel="noreferrer" className="social-btn">Facebook</a>
            <a href="https://www.tiktok.com/@tadiosasgownrental" target="_blank" rel="noreferrer" className="social-btn">TikTok</a>
          </div>

          <a
            href="https://www.google.com/maps?q=Balibago,+Laguna,+Philippines"
            className="directions-btn"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Get Directions
          </a>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870!2d121.1244!3d14.2067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e5c9f5a0d8b3%3A0x0!2sBalibago%2C%20Santa%20Rosa%2C%20Laguna!5e0!3m2!1sen!2sph!4v1620000000000"
            allowFullScreen=""
            loading="lazy"
            title="Store Location"
          />
        </div>
      </div>
    </section>
  )
}
