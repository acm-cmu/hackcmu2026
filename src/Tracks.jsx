import { useEffect, useState } from 'react'
import './Tracks.css'

const TRACKS = [
  { name: 'Track 1', color: '#d9534f', description: 'Details for this track are coming soon.' },
  { name: 'Track 2', color: '#e8b93a', description: 'Details for this track are coming soon.' },
  { name: 'Track 3', color: '#4f9d6e', description: 'Details for this track are coming soon.' },
  { name: 'Track 4', color: '#4f7fbf', description: 'Details for this track are coming soon.' },
  { name: 'Track 5', color: '#9268c9', description: 'Details for this track are coming soon.' },
]

function TrainIcon() {
  return (
    <svg viewBox="0 0 48 32" width="78" height="52" aria-hidden="true">
      <rect x="4" y="10" width="30" height="14" rx="3" fill="currentColor" />
      <rect x="10" y="4" width="8" height="8" rx="2" fill="currentColor" />
      <path d="M34 14h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-8z" fill="currentColor" opacity="0.85" />
      <circle cx="12" cy="26" r="3.4" fill="currentColor" />
      <circle cx="24" cy="26" r="3.4" fill="currentColor" />
      <circle cx="38" cy="26" r="3.4" fill="currentColor" />
    </svg>
  )
}

function Tracks() {
  const [activeTrack, setActiveTrack] = useState(null)

  useEffect(() => {
    if (!activeTrack) return undefined

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveTrack(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeTrack])

  return (
    <>
      <div className="tracks-row">
        {TRACKS.map((track) => {
          const isActive = activeTrack?.name === track.name
          return (
            <button
              key={track.name}
              type="button"
              className={`track-icon-btn${isActive ? ' active' : ''}`}
              style={{ color: track.color, backgroundColor: isActive ? `${track.color}26` : undefined }}
              onClick={() => setActiveTrack((cur) => (cur?.name === track.name ? null : track))}
              aria-expanded={isActive}
              aria-label={`View ${track.name} details`}
            >
              <TrainIcon />
              <span className="track-icon-label">{track.name}</span>
            </button>
          )
        })}
      </div>

      {activeTrack && (
        <div className="track-panel" style={{ borderColor: activeTrack.color }} key={activeTrack.name}>
          <button
            type="button"
            className="track-panel-close"
            style={{ borderColor: activeTrack.color, color: activeTrack.color }}
            onClick={() => setActiveTrack(null)}
            aria-label="Close"
          >
            ×
          </button>
          <h3 className="track-panel-title" style={{ color: activeTrack.color }}>
            {activeTrack.name}
          </h3>
          <p className="track-panel-desc">{activeTrack.description}</p>
        </div>
      )}
    </>
  )
}

export default Tracks
