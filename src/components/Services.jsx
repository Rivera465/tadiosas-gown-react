const SERVICES = [
  {
    name: 'Professional Care',
    desc: 'Every piece is cleaned, pressed, and inspected before each rental — so you always receive it in pristine condition.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    name: 'Perfect Fit',
    desc: 'Our in-house tailors offer complimentary consultations and same-day minor alterations at our Balibago atelier.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: 'Wide Selection',
    desc: 'Over 500 curated styles across Gowns, Suits, Filipiniana, Barong, Ball Gowns, and Wedding Gowns — in Small, Medium, and Large.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    name: 'Trusted Since 2024',
    desc: 'Proudly serving Laguna and surrounding provinces — your trusted partner for milestone occasions since we opened in 2024.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 0.5rem' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>What We Offer</div>
        <h2 className="section-title">Why Choose Tadiosa's</h2>
      </div>
      <div className="services-grid">
        {SERVICES.map(({ name, desc, icon }) => (
          <div className="service-card" key={name}>
            <div className="service-icon">{icon}</div>
            <div className="service-name">{name}</div>
            <div className="service-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
