import { useEffect, useState } from 'react'
import dogLogo from './assets/logo.png'
import './Sponsors.css'

const SPONSORS = Array.from({ length: 16 }, (_, i) => ({
  name: `Company ${i + 1}`,
  logo: dogLogo,
  blurb: `Company ${i + 1} is a valued sponsor of HackCMU 2026. More details coming soon.`,
}))

function CornerNails() {
  return (
    <>
      <span className="corner-nail corner-nail-tl" aria-hidden="true" />
      <span className="corner-nail corner-nail-tr" aria-hidden="true" />
      <span className="corner-nail corner-nail-bl" aria-hidden="true" />
      <span className="corner-nail corner-nail-br" aria-hidden="true" />
    </>
  )
}

function Sponsors() {
  const [activeSponsor, setActiveSponsor] = useState(null)

  useEffect(() => {
    if (!activeSponsor) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveSponsor(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeSponsor])

  return (
    <>
      <div className="sponsors-sign sponsors-sign-top">
        <CornerNails />
        <h2>Our Benefactors</h2>
      </div>

      <div className="sponsors-grid">
        {SPONSORS.map((sponsor) => (
          <button
            key={sponsor.name}
            type="button"
            className="sponsor-frame"
            onClick={() => setActiveSponsor(sponsor)}
            aria-label={`View ${sponsor.name} details`}
          >
            <span className="sponsor-frame-inner">
              <CornerNails />
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
            </span>
            <span className="sponsor-frame-name">{sponsor.name}</span>
          </button>
        ))}
      </div>

      <div className="sponsors-sign sponsors-sign-bottom">
        <CornerNails />
        <p>
          Our work here at ACM@CMU would not be possible without the help of our amazing
          sponsors. We are immeasurably thankful for their support.
        </p>
        <p>
          Interested in sponsoring us? Email{' '}
          <a href="mailto:acm-exec@cs.cmu.edu">acm-exec@cs.cmu.edu</a>.
        </p>
      </div>

      {activeSponsor && (
        <div className="sponsor-modal-backdrop" onClick={() => setActiveSponsor(null)}>
          <div className="sponsor-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="sponsor-modal-close"
              onClick={() => setActiveSponsor(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              className="sponsor-modal-logo"
              src={activeSponsor.logo}
              alt={`${activeSponsor.name} logo`}
            />
            <h3 className="sponsor-modal-title">{activeSponsor.name}</h3>
            <p className="sponsor-modal-blurb">{activeSponsor.blurb}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Sponsors
