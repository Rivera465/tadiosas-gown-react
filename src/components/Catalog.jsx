import { useState } from 'react'
import catalogItems from '../data/catalogItems'

const FILTERS = [
  { label: 'All',          value: 'all' },
  { label: 'Gowns',        value: 'gown' },
  { label: 'Suits',        value: 'suit' },
  { label: 'Filipiniana',  value: 'filipiniana' },
  { label: 'Barong',       value: 'barong' },
  { label: 'Ball Gown',    value: 'ballgown' },
  { label: 'Wedding Gowns',value: 'wedding' },
]

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)

  const visible = catalogItems.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.cat === activeFilter
    const accessible = !item.hidden || expanded || activeFilter !== 'all'
    return matchesFilter && accessible
  })

  const handleFilter = (value) => {
    setActiveFilter(value)
    // When switching to a specific filter, show all of that category
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
        <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
          Showing <span>{visible.length}</span> styles
        </div>
      </div>

      <div className="product-grid">
        {visible.map((item, i) => (
          <div className="product-card revealed" key={item.img + i} style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="product-img-wrap">
              <img
                className="product-img"
                src={`/${item.img}`}
                alt={item.name}
                style={item.pos ? { objectPosition: item.pos } : undefined}
              />
            </div>
            <div className="product-name">{item.name}</div>
            <div className="product-meta">
              <span className="product-price">{item.price}</span>
              <span className="product-rent">3 days</span>
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
