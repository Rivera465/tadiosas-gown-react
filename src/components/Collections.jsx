const COLLECTIONS = [
  { img: 'black_ball_gown.jpg',    alt: 'Ball Gowns',      tag: 'Grand & Glamorous',    name: 'Ball Gowns',      count: '50+ styles available', pos: 'center' },
  { img: 'blue_formal_suit.jpg',   alt: 'Suits',           tag: 'For the Gentleman',    name: 'Suits',           count: '80+ styles',           pos: 'center' },
  { img: 'classic_filipiniana.jpg',alt: 'Filipiniana',     tag: 'Cultural Heritage',    name: 'Filipiniana',     count: '60+ styles',           pos: 'center' },
  { img: 'barong_tagalog.jpg',     alt: 'Barong Tagalog',  tag: 'National Formal Wear', name: 'Barong Tagalog',  count: '40+ styles',           pos: 'center top' },
  { img: 'wedding gowm 1.jpg',     alt: 'Wedding Gowns',   tag: 'Bridal & Formal',      name: 'Wedding Gowns',   count: '30+ styles',           pos: 'center top' },
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
