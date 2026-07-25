export default function Footer({ onPolicies, onGuidelines }) {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">Tadiosa<span>'s</span> Gown</div>
          <p className="footer-tagline">
            Elevating your most precious moments with the finest collection of gowns and suits since 2024.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/tadiosagown/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/TadiosaGown/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@tadiosasgownrental" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Collections</div>
          <ul className="footer-links">
            <li><a href="#catalog">Ball Gowns</a></li>
            <li><a href="#catalog">Suit Collection</a></li>
            <li><a href="#catalog">Filipiniana &amp; Barong</a></li>
            <li><a href="#catalog">Wedding Dress</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#contact">Contact Us</a></li>
            <li><button onClick={onPolicies} className="footer-policy-btn">Rental Terms</button></li>
            <li><button onClick={onGuidelines} className="footer-policy-btn">Guidelines</button></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Visit Us</div>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontWeight: 300 }}>
            510 Felix Relix Street, Balibago.<br />
            Open 10am – 9pm daily.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2024 Tadiosa's Gown Rental. All rights reserved.</div>
        <div className="footer-copy">Designed with elegance in mind.</div>
      </div>
    </footer>
  )
}
