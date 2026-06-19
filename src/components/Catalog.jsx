import { useState, useEffect } from 'react'
import catalogItems from '../data/catalogItems'

const FILTERS = [
  { label: 'All',          value: 'all' },
  { label: 'Gowns',        value: 'gown' },
  { label: 'Suits',        value: 'suit' },
  { label: 'Filipiniana',  value: 'filipiniana' },
  { label: 'Barong',       value: 'barong' },
  { label: 'Ball Gown',    value: 'ballgown' },
  { label: 'Wedding Dress', value: 'wedding' },
]

const CAT_LABELS = {
  gown: 'Gown', suit: 'Suit', filipiniana: 'Filipiniana',
  barong: 'Barong', ballgown: 'Ball Gown', wedding: 'Wedding Dress',
}

function ItemModal({ item, onClose }) {
  const [activeImg, setActiveImg] = useState(0)
  const images = item.gallery && item.gallery.length > 0 ? item.gallery : [item.img]

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="item-modal-overlay" onClick={onClose}>
      <div className="item-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className="item-modal-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Main image */}
        <div className="item-modal-main-img-wrap">
          <img
            className="item-modal-main-img"
            src={`/${images[activeImg]}`}
            alt={item.name}
          />
        </div>

        {/* Thumbnails — only show if more than 1 image */}
        {images.length > 1 && (
          <div className="item-modal-thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                className={`item-modal-thumb${activeImg === i ? ' active' : ''}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={`/${img}`} alt={`${item.name} view ${i + 1}`} />
              </button>
            ))}
          </div>
        )}

        {/* Info */}
        <div className="item-modal-info">
          <div className="item-modal-category">{CAT_LABELS[item.cat] || item.cat}</div>
          <div className="item-modal-name">{item.popupName || item.name}</div>
          <div className="item-modal-price">{item.price}</div>
          <div className="item-modal-sizes">
            <span className="item-modal-sizes-label">Available Sizes</span>
            <div className="item-modal-size-pills">
              {(item.sizes || ['XS','S','M','L']).map(s => <span key={s} className="size-pill">{s}</span>)}
            </div>
          </div>
          <a href="#contact" className="item-modal-inquire" onClick={onClose}>
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const visible = catalogItems.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.cat === activeFilter
    const accessible = !item.hidden || expanded || activeFilter !== 'all'
    return matchesFilter && accessible
  })

  const handleFilter = (value) => {
    setActiveFilter(value)
    if (value !== 'all') setExpanded(true)
    else setExpanded(false)
  }

  const handleToggle = () => {
    const next = !expanded
    setExpanded(next)
    if (!next) {
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="catalog" id="catalog">
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      <div className="catalog-header">
        <div>
          <div className="section-label">Rental Catalog</div>
          <h2 className="section-title">Our Rental Catalog</h2>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="filter-pills">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              className={`pill${activeFilter === value ? ' active' : ''}`}
              onClick={() => handleFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
          Showing <span>{visible.length}</span> styles
        </div>
      </div>

      <div className="product-grid">
        {visible.map((item, i) => (
          <div
            className="product-card revealed"
            key={item.img + i}
            style={{ animationDelay: `${i * 0.05}s` }}
            onClick={() => setSelectedItem(item)}
            title={`View ${item.name}`}
          >
            <div className="product-img-wrap">
              <img
                className="product-img"
                src={`/${item.img}`}
                alt={item.name}
                style={item.pos ? { objectPosition: item.pos } : undefined}
              />
              {/* Gallery badge */}
              {item.gallery && item.gallery.length > 1 && (
                <div className="product-gallery-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  {item.gallery.length}
                </div>
              )}
              <div className="product-hover-overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="product-info">
              <div className="product-name">{item.name}</div>
              <div className="product-meta">
                <span className="product-price">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeFilter === 'all' && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn-primary" onClick={handleToggle}>
            {expanded ? 'Show Less \u00a0↑' : 'View Full Catalog \u00a0↓'}
          </button>
        </div>
      )}
    </section>
  )
}
