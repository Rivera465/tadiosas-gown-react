const COLLECTIONS = [
  { img: 'Ball Gown 2(1).png',         alt: 'Ball Gowns',      tag: 'Grand & Glamorous',    name: 'Ball Gowns',      count: '3 styles available',   pos: 'center top' },
  { img: 'Premium Tuxedo 1(1).png',    alt: 'Suits',           tag: 'For the Gentleman',    name: 'Suits',           count: '3 styles',             pos: 'center top' },
  { img: 'Alampay 1(1).png',           alt: 'Filipiniana',     tag: 'Cultural Heritage',    name: 'Filipiniana',     count: '3 styles',             pos: 'center top' },
  { img: 'Barong 1(1).png',            alt: 'Barong',          tag: 'National Formal Wear', name: 'Barong',          count: '3 styles',             pos: 'center top' },
  { img: 'Dress 1(1).png',             alt: 'Wedding Dress',   tag: 'Bridal & Formal',      name: 'Wedding Dress',   count: '3 styles',             pos: 'center top' },
]

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="collections-header">
        <div>
          <div className="section-label">Curated for You</div>
          <h2 className="section-title">Our Collections</h2>
        </div>
        <a href="#catalog" className="view-all">View All Styles →</a>
      </div>

      <div className="collections-grid">
        {COLLECTIONS.map(({ img, alt, tag, name, count, pos }) => (
          <div className="col-card" key={name}>
            <img className="col-card-img" src={`/${img}`} alt={alt} style={{ objectPosition: pos }} />
            <div className="col-card-overlay" />
            <div className="col-card-info">
              <div className="col-card-tag">{tag}</div>
              <div className="col-card-name">{name}</div>
              <div className="col-card-count">{count}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
