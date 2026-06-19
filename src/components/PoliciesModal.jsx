import { useEffect } from 'react'

export default function PoliciesModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="policies-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-eyebrow">Terms & Conditions</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '2rem' }}>
          Our Policies
        </h2>

        <div className="policies-modal-grid">
          {/* RENTAL POLICY */}
          <div className="policy-card">
            <div className="policy-header">
              <div className="policy-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 className="policy-title">Rental Policy</h3>
            </div>
            <ol className="policy-list">
              <li>The balance must be fully paid upon pick-up of the item.</li>
              <li>
                Rental is strictly <strong>3 days</strong>. We count per date, not every 24 hrs.
                <span className="policy-sub">1st day — Pick up &nbsp;|&nbsp; 2nd day — Event &nbsp;|&nbsp; 3rd day — Return</span>
                <ul className="policy-sub-list">
                  <li>A penalty of <strong>₱200 per day</strong> will be charged for each day exceeding the rental period.</li>
                  <li>The security deposit will be returned once the gown is returned undamaged.</li>
                </ul>
              </li>
              <li><strong>Strictly no alteration.</strong></li>
              <li>There is a <strong>₱150 charge</strong> for broken or changed hangers.</li>
            </ol>
          </div>

          {/* CANCELLATION POLICY */}
          <div className="policy-card">
            <div className="policy-header">
              <div className="policy-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
              </div>
              <h3 className="policy-title">Cancellation Policy</h3>
            </div>
            <ol className="policy-list">
              <li>Rescheduling is free, but depends on the gown's availability on the rescheduling date.</li>
              <li>
                <strong>Strictly no refunds.</strong> The down payment (max of <strong>₱500</strong>) is non-refundable.
                <ul className="policy-sub-list">
                  <li>The down payment may be used to rebook for a future event or converted towards the purchase of shawls, bags, or heels.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
