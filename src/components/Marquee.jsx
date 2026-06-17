const ITEMS = [
  'Filipiniana', 'Barong Tagalog', 'Suits & Tuxedos',
  'Ball Gowns', 'Wedding Gowns', 'Professional Alterations', 'Same-Week Rental',
]

export default function Marquee() {
  // Duplicate items so the seamless loop works (matches original HTML)
  const all = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {all.map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot" style={{ marginLeft: '4rem' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
