const REVIEWS = [
  {
    quote: '"The Aurelia Silk Ballgown was absolutely breathtaking. Every guest complimented my gown — Tadiosa\'s made my debut unforgettable."',
    name: 'Maria Reyes',
    occasion: 'Debut Celebration',
  },
  {
    quote: '"Found the perfect Barong for my son\'s Filipiniana-themed celebration in just one visit. The staff was so helpful and the fit was spot-on after a quick alteration."',
    name: 'Eduardo Santos',
    occasion: 'Filipiniana Event',
  },
  {
    quote: '"We rented our entire entourage\'s gowns from Tadiosa\'s. The quality and service are unmatched — we\'ll be back for every occasion."',
    name: 'Carla Mendoza',
    occasion: 'Entourage Rental',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
        <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
          What Our Clients Say
        </div>
        <h2 className="section-title" style={{ color: 'var(--cream)' }}>Stories of Elegance</h2>
      </div>
      <div className="test-grid">
        {REVIEWS.map(({ quote, name, occasion }) => (
          <div className="test-card" key={name}>
            <div className="stars">★ ★ ★ ★ ★</div>
            <div className="test-quote">{quote}</div>
            <div className="test-name">{name}</div>
            <div className="test-occasion">{occasion}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
