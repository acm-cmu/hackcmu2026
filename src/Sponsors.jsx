import { useEffect, useState } from 'react'
import dogLogo from './assets/logo.png'
import adobeLogo from './assets/sponsor_logos/adobe_logo.png'
import citadelLogo from './assets/sponsor_logos/citadel_logo.png'
import cursorLogo from './assets/sponsor_logos/cursor_logo.png'
import deShawLogo from './assets/sponsor_logos/de_shaw_logo.png'
import garnerHealthLogo from './assets/sponsor_logos/garner_health_logo.png'
import hrtLogo from './assets/sponsor_logos/hrt_logo.png'
import janeStreetLogo from './assets/sponsor_logos/jane_street_logo.png'
import lockheedMartinLogo from './assets/sponsor_logos/lockheed_martin_logo.png'
import microsoftLogo from './assets/sponsor_logos/microsoft_logo.png'
import quadratureLogo from './assets/sponsor_logos/quadrature_logo.png'
import robloxLogo from './assets/sponsor_logos/roblox_logo.png'
import sandiaLogo from './assets/sponsor_logos/sandia_logo.png'
import scmLogo from './assets/sponsor_logos/scm_logo.png'
import texasInstrumentsLogo from './assets/sponsor_logos/texas_instruments_logo.png'
import visaLogo from './assets/sponsor_logos/visa_logo.png'
import './Sponsors.css'

const SPONSOR_LIST = [
  { name: 'Adobe', logo: adobeLogo },
  { name: 'Citadel', logo: citadelLogo },
  { name: 'Cursor', logo: cursorLogo },
  { name: 'DE Shaw', logo: deShawLogo },
  { name: 'Garner Health', logo: garnerHealthLogo },
  { name: 'HRT', logo: hrtLogo },
  { name: 'Jane Street', logo: janeStreetLogo },
  { name: 'Lockheed Martin', logo: lockheedMartinLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Quadrature', logo: quadratureLogo },
  { name: 'Roblox', logo: robloxLogo },
  { name: 'Sandia', logo: sandiaLogo },
  { name: 'SCM', logo: scmLogo },
  { name: 'Texas Instruments', logo: texasInstrumentsLogo },
  { name: 'Visa', logo: visaLogo },
]

const TOTAL_SPONSOR_SLOTS = 16

const SPONSORS = Array.from({ length: TOTAL_SPONSOR_SLOTS }, (_, i) => {
  const sponsor = SPONSOR_LIST[i]
  if (sponsor) {
    return {
      name: sponsor.name,
      logo: sponsor.logo,
      blurb: `${sponsor.name} is a valued sponsor of HackCMU 2026. More details coming soon.`,
    }
  }
  return {
    name: 'Coming Soon',
    logo: dogLogo,
    blurb: 'This spot is reserved for a future sponsor — stay tuned!',
  }
})

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
        {SPONSORS.map((sponsor, i) => (
          <button
            key={i}
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
            <span className="sponsor-click-hint">click me!</span>
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
