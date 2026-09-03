import { useEffect, useState } from 'react'
import a16zLogo from './assets/sponsor_logos/a16z_logo.png'
import adobeLogo from './assets/sponsor_logos/adobe_logo.png'
import bloombergLogo from './assets/sponsor_logos/bloomberg_logo.png'
import citadelLogo from './assets/sponsor_logos/citadel_logo.png'
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
import spacexaiLogo from './assets/sponsor_logos/spacexai_logo.png'
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
  if (name === 'SpaceXAI') return 'silver'
  if (BRONZE_SPONSORS.has(name)) return 'bronze'
  return 'base'
}

const SPONSOR_LIST = [
  { name: 'a16z', logo: a16zLogo },
  { name: 'Adobe', logo: adobeLogo },
  {
    name: 'Bloomberg',
    logo: bloombergLogo,
    blurb: (
      <>
        <p>Bloomberg is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Bloomberg is a global information and technology company. We use our dynamic network of
          data, ideas and analysis to solve difficult problems. Our customers around the world
          rely on us to deliver accurate, real-time business and market information that helps
          them make important financial decisions.
        </p>
      </>
    ),
  },
  {
    name: 'Citadel',
    logo: citadelLogo,
    blurb: (
      <>
        <p>Citadel | Citadel Securities is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Citadel is one of the world's leading alternative investment firms, pursuing superior
          long-term returns for the world's preeminent public and private institutions. Citadel
          Securities is the next-generation capital markets firm, delivering critical liquidity
          and helping to shape the markets of tomorrow.
        </p>
      </>
    ),
  },
  {
    name: 'DE Shaw',
    logo: deShawLogo,
    blurb: (
      <>
        <p>DE Shaw is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          We're a global investment and technology development firm headquartered in New York
          City with more than 3,000 people around the globe. Since our founding in 1988, we've
          earned a worldwide reputation for innovation, rigorous risk management, cutting-edge
          technology, and the quality of our people. To learn more about our culture, impact,
          research, and programs, visit our website and our YouTube channel.
        </p>
        <p>
          Website:{' '}
          <a href="https://www.deshaw.com/" target="_blank" rel="noopener noreferrer">
            https://www.deshaw.com/
          </a>
        </p>
        <p>
          Youtube Channel:{' '}
          <a
            href="https://www.youtube.com/@deshawgroup"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.youtube.com/@deshawgroup
          </a>
        </p>
      </>
    ),
  },
  {
    name: 'Garner Health',
    logo: garnerHealthLogo,
    blurb: (
      <>
        <p>Garner Health is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Garner’s mission is to transform the healthcare economy, delivering high-quality and
          affordable care for all. Using a new approach to data science and novel financial
          incentives, we help patients identify the highest-quality care and help doctors improve
          how they practice medicine. We seek to change the economics of health care so that
          providers thrive by practicing the best medicine, not by performing more invasive
          procedures. If you are excited about delivering high-quality and affordable health care
          for all, join us.
        </p>
      </>
    ),
  },
  { name: 'HRT', logo: hrtLogo },
  { name: 'IFM', logo: ifmLogo },
  {
    name: 'Jane Street',
    logo: janeStreetLogo,
    blurb: (
      <>
        <p>Jane Street is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Jane Street is a quantitative trading firm with offices worldwide. We hire smart, humble
          people who love to solve problems, build systems, and test theories. Will our next
          great idea come from you?
        </p>
      </>
    ),
  },
  { name: 'Jump', logo: jumpLogo },
  {
    name: 'Lockheed Martin',
    logo: lockheedMartinLogo,
    blurb: (
      <>
        <p>Lockheed Martin is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Lockheed Martin is a global defense technology company driving innovation and advancing
          scientific discovery. Our all-domain mission solutions and 21st Century Security® vision
          deliver transformative technologies that deter potential adversaries and ensure America
          and its allies can achieve peace through strength.
        </p>
      </>
    ),
  },
  { name: 'Microsoft', logo: microsoftLogo },
  {
    name: 'Quadrature',
    logo: quadratureLogo,
    blurb: (
      <>
        <p>Quadrature is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Founded by programmers in 2010, we’re a systematic trading firm made up of smart,
          collaborative people who are passionate about using technology to solve complex
          problems. By combining cutting-edge technology with deep quantitative research, we
          build automated trading systems that generate consistent, significant returns on our
          proprietary capital.
        </p>
        <p>
          At Quadrature, we envision a future where we trade all liquid, electronically tradeable
          asset classes across all horizons.
        </p>
      </>
    ),
  },
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
  {
    name: 'SCM',
    logo: scmLogo,
    blurb: (
      <>
        <p>SCM is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Stevens Capital Management LP (“SCM”) is a quantitative hedge fund manager specializing
          in the rigorous development and disciplined implementation of empirically based trading
          strategies. We employ a variety of statistical methods and techniques using our robust
          technology and data infrastructure. We operate a 24 hour low-latency global operation
          trading liquid futures contracts, currencies and equities, using automated proprietary
          execution algorithms. Our flagship fund has been in business for more than 30 years.
        </p>
        <p>
          SCM is in constant pursuit of exceptionally talented and motivated individuals with a
          history of outstanding achievement, who are interested in developing and implementing
          automated trading strategies. SCM actively seeks candidates for career opportunities in
          quantitative financial research and C++ development.
        </p>
        <p>
          Developer Internship Opportunity:{' '}
          <a href="https://grnh.se/eyywl26a1us" target="_blank" rel="noopener noreferrer">
            https://grnh.se/eyywl26a1us
          </a>
        </p>
      </>
    ),
  },
  {
    name: 'SpaceXAI',
    logo: spacexaiLogo,
    blurb: (
      <>
        <p>SpaceXAI is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          SpaceXAI is the company behind Grok and now, SpaceXAI. We build frontier AI models to
          understand the universe.
        </p>
        <p>
          One model family. One API. Frontier intelligence for useful work: chat, hard
          engineering, real-time voice, and image and video. Always-on agents included. Built to
          extend what humanity can know and do.
        </p>
      </>
    ),
  },
  {
    name: 'Texas Instruments',
    logo: texasInstrumentsLogo,
    blurb: (
      <>
        <p>Texas Instruments is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Texas Instruments is a leading semiconductor company founded in 1930 and headquartered
          in Dallas, Texas. TI designs and manufactures analog and embedded processing chips that
          power everything from automotive systems to industrial equipment, serving customers
          worldwide with nearly a century of innovation and expertise. Our semiconductors power
          the world’s essential technologies – from phones and data centers to medical equipment
          and cars. With 80,000+ products, we offer the industry's most comprehensive analog and
          embedded portfolio.
        </p>
      </>
    ),
  },
  {
    name: 'Visa',
    logo: visaLogo,
    blurb: (
      <>
        <p>Visa is a valued sponsor of ACM@CMU.</p>
        <p>This is a message from them:</p>
        <p>
          Visa is a world leader in payments technology, facilitating transactions between
          consumers, merchants, financial institutions and government entities across more than
          200 countries and territories, dedicated to uplifting everyone, everywhere by being the
          best way to pay and be paid.
        </p>
        <p>
          At Visa, you'll have the opportunity to create impact at scale — tackling meaningful
          challenges, growing your skills and seeing your contributions impact lives around the
          world.
        </p>
        <p>
          Join Visa and do work that matters – to you, to your community, and to the world.
          Progress starts with you.
        </p>
        <p>
          Learn more at{' '}
          <a href="https://www.visa.com/students" target="_blank" rel="noopener noreferrer">
            Visa.com/students
          </a>
        </p>
      </>
    ),
  },
].map((sponsor) => ({ ...sponsor, tier: tierFor(sponsor.name) }))

const SPONSORS = SPONSOR_LIST.map((sponsor) => ({
  name: sponsor.name,
  logo: sponsor.logo,
  tier: sponsor.tier,
  blurb:
    sponsor.blurb ?? `${sponsor.name} is a valued sponsor of HackCMU 2026. More details coming soon.`,
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
