import { useState, useEffect } from 'react'
import catalogItems from '../data/catalogItems'

function GownPickerModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [onClose])

  const gowns = catalogItems.filter(item => item.gallery)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="ar-picker-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-eyebrow">AR Try-On — Coming Soon</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 400, color: 'var(--dark)', margin: '0.5rem 0 0.75rem' }}>
          Choose a Style to Try On
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.75rem', fontWeight: 300, lineHeight: 1.7 }}>
          The AR try-on feature is coming soon. Select any gown below to preview it — virtual fitting will be available once launched.
        </p>
        <div className="ar-picker-grid">
          {gowns.map((item, i) => (
            <div className="ar-picker-card" key={i}>
              <div className="ar-picker-img-wrap">
                <img src={`/${item.img}`} alt={item.popupName || item.name} />
                <div className="ar-picker-overlay">
                  <span>Coming Soon</span>
                </div>
              </div>
              <div className="ar-picker-name">{item.popupName || item.name}</div>
              <div className="ar-picker-cat">{item.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ARTryOn() {
  const [pickerOpen, setPickerOpen] = useState(false)

  return (
    <>
      {pickerOpen && <GownPickerModal onClose={() => setPickerOpen(false)} />}

      {/* Floating button for mobile/tablet */}
      <button className="ar-float-btn" onClick={() => setPickerOpen(true)} aria-label="AR Try-On">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
        </svg>
        <span>Try On</span>
      </button>

      <section className="ar-section" id="ar-tryon">
        <div className="ar-inner">
          <div className="ar-text">
            <div className="section-label" style={{ color: 'var(--gold)' }}>Virtual Experience</div>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Try Before You{' '}
              <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--gold-dark)' }}>
                Rent.
              </em>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.55)', margin: '1.25rem 0 2rem', fontWeight: 300, maxWidth: 420 }}>
              Our Augmented Reality try-on feature is coming soon. See how each gown looks on you — right from your device, before visiting the shop.
            </p>
            <div className="ar-badges">
              <div className="ar-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
                </svg>
                Live Camera Try-On
              </div>
              <div className="ar-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
                Works on Mobile
              </div>
              <div className="ar-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                All Styles Available
              </div>
            </div>
            <button
              className="ar-try-btn"
              onClick={() => setPickerOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
              </svg>
              Choose a Gown to Try On
            </button>
          </div>

          <div className="ar-preview">
            <div className="ar-screen">
              <div className="ar-screen-inner">
                <div className="ar-coming-soon-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
                  </svg>
                </div>
                <div className="ar-coming-soon-label">AR Try-On</div>
                <div className="ar-coming-soon-sub">Coming Soon</div>
                <div className="ar-scan-lines" />
              </div>
            </div>
            <div className="ar-screen-shine" />
          </div>
        </div>
      </section>
    </>
  )
}
