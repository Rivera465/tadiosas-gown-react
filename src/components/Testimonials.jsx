const REVIEWS = [
  {
    quote: 'Highly recommend this rental shop! The barong I rented was clean, looked brand new, and was budget-friendly. The staff were very accommodating and incredibly kind. Great experience overall!',
    name: 'Nikki Franco',
    occasion: '6 months ago',
    initials: 'N',
    avatarColor: '#C0392B',
  },
  {
    quote: 'Absolutely loved my experience! The gowns are stunning and the service was exceptional. Highly recommended for anyone looking for quality and elegance.',
    name: 'Licca Clabita',
    occasion: '3 months ago',
    initials: 'LC',
    avatarColor: '#5D6D7E',
  },
  {
    quote: "Big thanks to Tadiosa's Gown Rental. Last minute, they accommodate my inquiries instantly and the owner is very responsive. Highly recommended. Next po ulit. 😊",
    name: 'Jamm Briones',
    occasion: '6 months ago',
    initials: 'JB',
    avatarColor: '#2C3E50',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
        <div className="section-label" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
          What Our Clients Say
        </div>
        <h2 className="section-title" style={{ color: '#ffffff' }}>Stories of Elegance</h2>
      </div>
      <div className="test-grid">
        {REVIEWS.map(({ quote, name, occasion, initials, avatarColor }) => (
          <div className="test-card" key={name}>
            <div className="test-header">
              <div className="test-avatar" style={{ background: avatarColor }}>
                {initials}
              </div>
              <div className="test-meta">
                <div className="test-name">{name}</div>
                <div className="stars">★ ★ ★ ★ ★</div>
              </div>
            </div>
            <div className="test-quote">{quote}</div>
            <div className="test-occasion">{occasion}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
