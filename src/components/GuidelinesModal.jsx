import { useEffect } from 'react'

export default function GuidelinesModal({ onClose }) {
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

        <div className="modal-eyebrow">Read This</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '2rem' }}>
          Guidelines
        </h2>

        <div className="guidelines-list">

          {/* 1. Fitting Rules */}
          <div className="guideline-item">
            <div className="guideline-heading">
              <span className="guideline-num">1</span>
              <span className="guideline-title">Fitting Rules</span>
            </div>
            <ul className="policy-sub-list guideline-points">
              <li>The first <strong>3 chosen gowns</strong> for fitting are <strong>FREE.</strong></li>
              <li>An additional <strong>₱50 per gown</strong> will be charged for each extra item tried on.</li>
              <li>✅ Good news: These fitting fees <strong>will be waived</strong> once you proceed with a reservation.</li>
            </ul>
          </div>

          {/* 2. Reservation & Downpayment */}
          <div className="guideline-item">
            <div className="guideline-heading">
              <span className="guideline-num">2</span>
              <span className="guideline-title">🗓️ Reservation &amp; Downpayment</span>
            </div>
            <ul className="policy-sub-list guideline-points">
              <li>We require a minimum <strong>downpayment of ₱500</strong> to reserve.</li>
              <li>Please note that downpayments are non-refundable if the <strong>event is canceled.</strong></li>
              <li>However, you may convert it into accessories such as a shawl, clutch bag, or glass heels — or you may <strong>reschedule your event.</strong></li>
            </ul>
          </div>

          {/* 3. Security Deposit */}
          <div className="guideline-item">
            <div className="guideline-heading">
              <span className="guideline-num">3</span>
              <span className="guideline-title">🔒 Security Deposit</span>
            </div>
            <ul className="policy-sub-list guideline-points">
              <li>We have a security deposit, which is <strong>fully refundable.</strong></li>
              <li>The deposit will be returned in full as long as the clothes are returned in <strong>good condition.</strong></li>
              <li>Don't worry, ibabalik po namin ng buo after checking. 😊</li>
            </ul>
          </div>

          {/* 4. Late Return Policy */}
          <div className="guideline-item">
            <div className="guideline-heading">
              <span className="guideline-num">4</span>
              <span className="guideline-title">⏳ Late Return Policy</span>
            </div>
            <ul className="policy-sub-list guideline-points">
              <li>We offer a <strong>3-days</strong> rental period (Per <strong>date</strong>, not per 24 hours = 1 day).</li>
              <li>To keep our schedule fair for all clients, there is a <strong>₱200 per day</strong> charge for late returns.</li>
            </ul>
          </div>

          {/* 5. Gown Change Policy */}
          <div className="guideline-item">
            <div className="guideline-heading">
              <span className="guideline-num">5</span>
              <span className="guideline-title">🔄 Gown Change Policy</span>
            </div>
            <ul className="policy-sub-list guideline-points">
              <li>To keep our schedule fair for all clients, there is a <strong>₱200 per day</strong> charge for late returns.</li>
            </ul>
          </div>

        </div>

        <div className="rent-timeline">
          <div className="rent-timeline-header">
            <div className="rent-timeline-title">3 Days Rent</div>
            <div className="rent-timeline-sub">Your Event, Our Joy</div>
            <div className="rent-timeline-note">(Per date, not every 24 hrs = 1 day)</div>
          </div>
          <div className="rent-timeline-steps">
            <div className="rent-step">
              <div className="rent-step-badge">1st Day</div>
              <ul className="policy-sub-list">
                <li>Pick up your beautiful rented clothes</li>
                <li>Time: Afternoon <strong>1pm – 10pm</strong> 🌟</li>
                <li>Extension Fee: <strong>₱200 per day</strong></li>
              </ul>
            </div>
            <div className="rent-step-divider">↓</div>
            <div className="rent-step">
              <div className="rent-step-badge">2nd Day</div>
              <ul className="policy-sub-list">
                <li>Enjoy the event!</li>
                <li>Take a lot of pictures!</li>
                <li>Slay the day 🔥</li>
              </ul>
            </div>
            <div className="rent-step-divider">↓</div>
            <div className="rent-step">
              <div className="rent-step-badge">3rd Day</div>
              <ul className="policy-sub-list">
                <li>Returning of gown</li>
                <li>Returning of security deposit</li>
                <li>Time: Morning <strong>8am – 3pm</strong></li>
              </ul>
              <div className="rent-late-fee">Late Return Fee: <strong>₱200 / Day</strong></div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.88rem', color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.7 }}>
          We're excited to help you look your best for your special day! 💕
        </p>
      </div>
    </div>
  )
}
