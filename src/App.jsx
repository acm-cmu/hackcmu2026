import { useEffect, useState } from 'react'
import foreground from './assets/foreground.png'
import hackcmuLabel from './assets/hackcmu-label-trim.png'
import board from './assets/board-trim.png'
import ticketBooth from './assets/ticket-booth-trim.png'
import emblem from './assets/emblem.svg'
import Schedule from './Schedule.jsx'
import Tracks from './Tracks.jsx'
import Faq from './Faq.jsx'
import Sponsors from './Sponsors.jsx'
import './App.css'

const DAY_START_HOUR = 7
const DAY_END_HOUR = 19

function getTimeOfDayTheme() {
  if (typeof window === 'undefined') return 'dark'
  const hour = new Date().getHours()
  return hour >= DAY_START_HOUR && hour < DAY_END_HOUR ? 'light' : 'dark'
}

const APPLY_FORM_URL = 'https://forms.gle/2ZbetvDn44GPYP6GA'
const SECTIONS = [
  { id: 'home', label: 'Station' },
  { id: 'tickets', label: 'Tickets' },
  { id: 'tracks', label: 'Tracks' },
  { id: 'faq', label: 'FAQ' },
  { id: 'sponsors', label: 'Sponsors' },
]

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to night mode'}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.6 15.5A8.7 8.7 0 0 1 9 4.4a.9.9 0 0 0-1.1-1.2A10 10 0 1 0 21.8 16.6a.9.9 0 0 0-1.2-1.1"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 2v2.5M12 19.5V22M22 12h-2.5M4.5 12H2M19 5l-1.8 1.8M6.8 17.2 5 19M19 19l-1.8-1.8M6.8 6.8 5 5" />
          </g>
        </svg>
      )}
    </button>
  )
}

const CLOUD_CUT_RATIO = 0.21
const CLOUD_CUT_MIN = 160
const CLOUD_CUT_MAX = 360

function SidebarClouds({ width, height }) {
  const cut = Math.min(CLOUD_CUT_MAX, Math.max(CLOUD_CUT_MIN, width * CLOUD_CUT_RATIO))
  const radius = (cut * 2) / 3
  const spacing = radius
  const count = Math.ceil(height / spacing) + 3
  const startY = -spacing

  return (
    <svg
      className="sidebar-clouds"
      width={cut}
      height={height}
      viewBox={`0 0 ${cut} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <circle key={i} cx={cut - radius} cy={startY + i * spacing} r={radius} />
      ))}
    </svg>
  )
}

const CLOUD_UNIT_WIDTH = 96
const CLOUD_UNIT_STEP = 42

function CloudTrail({ width }) {
  const count = Math.ceil(width / CLOUD_UNIT_STEP) + 3
  const startX = -CLOUD_UNIT_WIDTH

  return (
    <div className="cloud-trail-wrap">
      <svg
        className="cloud-trail"
        width="100%"
        height="52"
        viewBox={`0 0 ${width} 52`}
        preserveAspectRatio="none"
        fill="#ffffff"
        aria-hidden="true"
      >
        {Array.from({ length: count }).map((_, i) => {
          const x = startX + i * CLOUD_UNIT_STEP
          const scale = i % 3 === 0 ? 1.1 : i % 3 === 1 ? 0.95 : 1.02
          const y = 2 + (i % 2) * 4
          return (
            <g key={i} transform={`translate(${x}, ${y}) scale(${scale})`}>
              <ellipse cx="42" cy="28" rx="34" ry="10" />
              <circle cx="14" cy="18" r="12" />
              <circle cx="34" cy="14" r="16" />
              <circle cx="54" cy="17" r="13" />
              <circle cx="70" cy="20" r="10" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

function SideNav({ activeSection }) {
  const index = SECTIONS.findIndex(({ id }) => id === activeSection)
  const fillPercent = index === -1 ? 0 : (index / (SECTIONS.length - 1)) * 100

  return (
    <nav className="side-nav" aria-label="Section navigation">
      <div className="side-nav-track">
        <div className="side-nav-progress" style={{ height: `${fillPercent}%` }} />
      </div>
      <ul>
        {SECTIONS.map(({ id, label }) => (
          <li key={id} className={activeSection === id ? 'active' : ''}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function App() {
  const [theme, setTheme] = useState(getTimeOfDayTheme)
  const [activeSection, setActiveSection] = useState('')
  const [viewportHeight, setViewportHeight] = useState(
    typeof window === 'undefined' ? 0 : window.innerHeight,
  )
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === 'undefined' ? 0 : window.innerWidth,
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const onResize = () => {
      setViewportHeight(window.innerHeight)
      setViewportWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    let raf = null

    const measure = () => {
      raf = null
      const mid = window.scrollY + window.innerHeight / 2
      let current = ''
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) current = id
      }
      setActiveSection(current)
    }

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <SidebarClouds width={viewportWidth} height={viewportHeight} />
      <SideNav activeSection={activeSection} />

      <section className="hero" id="home">
        <div className="hero-art">
          <img
            className="foreground"
            src={foreground}
            alt="The HackCMU Midnight Express train pulling out under a starry night sky"
          />
          <img
            className="hackcmu-label"
            src={hackcmuLabel}
            alt="HackCMU 2026: Midnight Express ticket badge"
          />
          <img className="hero-emblem" src={emblem} alt="" />
          <div className="board-wrap">
            <img className="board-img" src={board} alt="" />
            <textarea
              className="board-fill"
              placeholder="What will you build at HackCMU?"
              aria-label="What will you build at HackCMU?"
            />
          </div>
        </div>
      </section>

      <CloudTrail width={viewportWidth} />

      <section className="intro" id="about">
        <h2>What is HackCMU?</h2>
        <p className="intro-text">
          HackCMU is Carnegie Mellon's premier hackathon, a 24-hour beginner-friendly challenge
          where creativity, code, and caffeine collide. Rally your crew and turn bold ideas into
          reality!
        </p>
      </section>

      <CloudTrail width={viewportWidth} />

      <section className="board-tickets" id="tickets">
        <Schedule />

        <div className="ticket-col">
          <img
            className="ticket-booth-img"
            src={ticketBooth}
            alt="A ticket booth where a dog station master hands out a ticket"
          />
          <a className="apply-btn" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
            Get Ticket
          </a>
          <span className="apply-btn-hint">click me!</span>
        </div>
      </section>

      <CloudTrail width={viewportWidth} />

      <section className="tracks" id="tracks">
        <h2 className="tracks-title">Tracks</h2>
        <p className="tracks-subtitle">
          Track themes will be announced during the Opening Ceremony on Friday, September 11.
          Teams will choose a track when submitting your project on Saturday.
        </p>
        <Tracks />
      </section>

      <CloudTrail width={viewportWidth} />

      <section className="faq" id="faq">
        <Faq />
      </section>

      <CloudTrail width={viewportWidth} />

      <section className="sponsors" id="sponsors">
        <Sponsors />
      </section>

      <CloudTrail width={viewportWidth} />

      <footer className="site-footer">
        <p className="footer-conducted">Conducted by ACM@CMU</p>
        <p className="footer-note">
          HackCMU acknowledges the use of AI tools to assist in event organization and materials.
        </p>
      </footer>
    </>
  )
}

export default App
