import { useEffect, useState } from 'react'
import dogLogo from './assets/logo.png'
import a16zLogo from './assets/sponsor_logos/a16z_logo.png'
import adobeLogo from './assets/sponsor_logos/adobe_logo.png'
import bloombergLogo from './assets/sponsor_logos/bloomberg_logo.png'
import citadelLogo from './assets/sponsor_logos/citadel_logo.png'
import cursorLogo from './assets/sponsor_logos/cursor_logo.png'
import deShawLogo from './assets/sponsor_logos/de_shaw_logo.png'
import garnerHealthLogo from './assets/sponsor_logos/garner_health_logo.png'
import hrtLogo from './assets/sponsor_logos/hrt_logo.png'
import ifmLogo from './assets/sponsor_logos/ifm_logo.png'
import janeStreetLogo from './assets/sponsor_logos/jane_street_logo.png'
import jumpLogo from './assets/sponsor_logos/jump_logo.png'
import lockheedMartinLogo from './assets/sponsor_logos/lockheed_martin_logo.png'
import microsoftLogo from './assets/sponsor_logos/microsoft_logo.png'
import quadratureLogo from './assets/sponsor_logos/quadrature_logo.png'
import queritLogo from './assets/sponsor_logos/querit_logo.png'
import robloxLogo from './assets/sponsor_logos/roblox_logo.png'
import sandiaLogo from './assets/sponsor_logos/sandia_logo.png'
import scmLogo from './assets/sponsor_logos/scm_logo.png'
import texasInstrumentsLogo from './assets/sponsor_logos/texas_instruments_logo.png'
import visaLogo from './assets/sponsor_logos/visa_logo.png'
import './Sponsors.css'

const BRONZE_SPONSORS = new Set([
  'Citadel',
  'DE Shaw',
  'Jane Street',
  'Jump',
  'Microsoft',
  'Quadrature',
  'Sandia',
])

function tierFor(name) {
  if (name === 'IFM') return 'platinum'
  if (name === 'HRT') return 'gold'
  if (name === 'Cursor') return 'silver'
  if (BRONZE_SPONSORS.has(name)) return 'bronze'
  return 'base'
}

const SPONSOR_LIST = [
  { name: 'a16z', logo: a16zLogo },
  { name: 'Adobe', logo: adobeLogo },
  { name: 'Bloomberg', logo: bloombergLogo },
  { name: 'Citadel', logo: citadelLogo },
  { name: 'Cursor', logo: cursorLogo },
  { name: 'DE Shaw', logo: deShawLogo },
  { name: 'Garner Health', logo: garnerHealthLogo },
  { name: 'HRT', logo: hrtLogo },
  { name: 'IFM', logo: ifmLogo },
  { name: 'Jane Street', logo: janeStreetLogo },
  { name: 'Jump', logo: jumpLogo },
  { name: 'Lockheed Martin', logo: lockheedMartinLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Quadrature', logo: quadratureLogo },
  {
    name: 'Querit',
    logo: queritLogo,
    blurb: (
      <>
        <p>Querit is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Querit is building a global Web Search API and search infrastructure for LLMs, AI
          agents, and in-app search. We transform the open web into AI-ready knowledge through
          up-to-date search, structured extraction, and source grounding to answer the latest
          questions, make accurate judgments, and take reliable action, with unique Multilingual
          index.
        </p>
        <p>
          Link:{' '}
          <a href="https://www.querit.ai/en" target="_blank" rel="noopener noreferrer">
            https://www.querit.ai/en
          </a>
        </p>
      </>
    ),
  },
  {
    name: 'Roblox',
    logo: robloxLogo,
    blurb: (
      <>
        <p>Roblox is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          At Roblox, we’re building the tools and platform that empower our community to bring
          any experience that they can imagine to life. Our vision is to reimagine the way people
          come together, from anywhere in the world, and on any device. We’re on a mission to
          connect a billion people with optimism and civility, and looking for amazing talent to
          help us get there.
        </p>
        <p>
          A career at Roblox means you’ll be working to shape the future of human interaction,
          solving unique technical challenges at scale, and helping to create safer, more civil
          shared experiences for everyone.
        </p>
        <p>
          Link:{' '}
          <a href="https://careers.roblox.com/" target="_blank" rel="noopener noreferrer">
            https://careers.roblox.com/
          </a>
        </p>
      </>
    ),
  },
  {
    name: 'Sandia',
    logo: sandiaLogo,
    blurb: (
      <>
        <p>Sandia is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          For more than 76 years, Sandia National Laboratories has delivered essential science
          and technology to resolve the nation’s most challenging security issues and is the
          nation’s premier science and engineering lab for national security and technology.
          Sandia is made up of world-class scientists, engineers, technologists, post docs,
          visiting researchers, and student interns all focused on cutting-edge technology,
          ranging from homeland defense, global security, biotechnology, and environmental
          preservation to energy and combustion research, computer security, and nuclear defense.
        </p>
      </>
    ),
  },
  { name: 'SCM', logo: scmLogo },
  { name: 'Texas Instruments', logo: texasInstrumentsLogo },
  { name: 'Visa', logo: visaLogo },
].map((sponsor) => ({ ...sponsor, tier: tierFor(sponsor.name) }))

const TOTAL_SPONSOR_SLOTS = 21

const SPONSORS = Array.from({ length: TOTAL_SPONSOR_SLOTS }, (_, i) => {
  const sponsor = SPONSOR_LIST[i]
  if (sponsor) {
    return {
      name: sponsor.name,
      logo: sponsor.logo,
      tier: sponsor.tier,
      blurb:
        sponsor.blurb ??
        `${sponsor.name} is a valued sponsor of HackCMU 2026. More details coming soon.`,
    }
  }
  return {
    name: 'Coming Soon',
    logo: dogLogo,
    tier: 'grey',
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
            <span className={`sponsor-frame-inner tier-${sponsor.tier}`}>
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
            <div className="sponsor-modal-blurb">{activeSponsor.blurb}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Sponsors
