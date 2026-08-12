import { useEffect, useState } from 'react'
import foreground from './assets/foreground.png'
import hackcmuLabel from './assets/hackcmu-label-trim.png'
import board from './assets/board-trim.png'
import ticketBooth from './assets/ticket-booth-trim.png'
import emblem from './assets/emblem.svg'
import sponsorsLogos from './assets/sponsors.svg'
import './App.css'

const APPLY_FORM_URL = '#apply-placeholder'
const SECTIONS = ['tickets', 'tracks', 'sponsors']

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

const CLOUD_RADIUS = 200
const CLOUD_SPACING = 200
const CLOUD_CUT = 300

function SidebarClouds({ height }) {
  const count = Math.ceil(height / CLOUD_SPACING) + 3
  const startY = -CLOUD_SPACING

  return (
    <svg
      className="sidebar-clouds"
      width={CLOUD_CUT}
      height={height}
      viewBox={`0 0 ${CLOUD_CUT} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <circle
          key={i}
          cx={CLOUD_CUT - CLOUD_RADIUS}
          cy={startY + i * CLOUD_SPACING}
          r={CLOUD_RADIUS}
        />
      ))}
    </svg>
  )
}

function SideNav({ activeSection, progress }) {
  return (
    <nav className="side-nav" aria-label="Section navigation">
      <div className="side-nav-track">
        <div className="side-nav-progress" style={{ height: `${progress}%` }} />
      </div>
      <ul>
        {SECTIONS.map((id) => (
          <li key={id} className={activeSection === id ? 'active' : ''}>
            <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const [viewportHeight, setViewportHeight] = useState(
    typeof window === 'undefined' ? 0 : window.innerHeight,
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const onResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    let raf = null

    const measure = () => {
      raf = null
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0)

      const mid = window.scrollY + window.innerHeight / 2
      let current = ''
      for (const id of SECTIONS) {
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
      <SidebarClouds height={viewportHeight} />
      <SideNav activeSection={activeSection} progress={progress} />

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

      <section className="board-tickets" id="tickets">
        <div className="ticket-col">
          <img
            className="ticket-booth-img"
            src={ticketBooth}
            alt="A ticket booth where a dog station master hands out a ticket"
          />
          <a className="apply-btn" href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
            Get Ticket
          </a>
        </div>
      </section>

      <section className="tracks" id="tracks">
        <h2>Tracks</h2>
        <p className="section-note">Coming soon.</p>
        <div className="tracks-empty" />
      </section>

      <section className="sponsors" id="sponsors">
        <h2>Sponsors</h2>
        <p className="section-note">Coming soon.</p>
        <img className="sponsors-logos" src={sponsorsLogos} alt="Our sponsors" />
      </section>

      <footer className="site-footer">
        <p>HackCMU 2026 · Carnegie Mellon University</p>
      </footer>
    </>
  )
}

export default App
