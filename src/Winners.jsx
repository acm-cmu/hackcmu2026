import './Winners.css'

const TBD = '[to fill in]'
const PLACES = ['1st', '2nd', '3rd']

const TRACK_WINNERS = [
  { name: 'Optimization', color: '#d9534f' },
  { name: 'Multiplayer', color: '#4f9d6e' },
  { name: 'Traveling', color: '#e8b93a' },
  { name: 'Food', color: '#4f7fbf' },
]

const SPECIAL_PRIZES = [
  'Grand Prize',
  'IFM Sponsor Track',
  'SpaceXAI Prize',
  'Sandia Prize',
  'Best Design',
  "People's Favorite",
]

const MLH_PRIZES = [
  'Best Use of Gemini',
  'Best Use of Eleven Labs',
  'Best Use of Solana',
  'Best Use of Vultr',
  'Best Use of Auth0',
  'Best Use of MongoDB',
]

function GroupHeading({ children }) {
  return (
    <div className="winners-group-heading">
      <span className="winners-rule" aria-hidden="true" />
      <h3>{children}</h3>
      <span className="winners-rule" aria-hidden="true" />
    </div>
  )
}

function WinnerCard({ title, accent, children }) {
  return (
    <div className="winner-card">
      <div className="winner-card-header">
        <span className="winner-card-rule" aria-hidden="true" />
        <h4 style={accent ? { '--accent': accent } : undefined}>{title}</h4>
        <span className="winner-card-rule" aria-hidden="true" />
      </div>
      <ol className="winner-list">{children}</ol>
    </div>
  )
}

function WinnerRow({ label, name = TBD }) {
  return (
    <li className="winner-row">
      <div className="winner-label">{label}</div>
      <div className="winner-divider" aria-hidden="true" />
      <div className="winner-name">{name}</div>
    </li>
  )
}

function Winners() {
  return (
    <div className="winners-wrap">
      <h2 className="winners-title">Winners</h2>
      <p className="winners-subtitle">Congratulations to everyone who rode the Midnight Express!</p>

      <GroupHeading>Track Winners</GroupHeading>
      <div className="winners-grid">
        {TRACK_WINNERS.map((track) => (
          <WinnerCard key={track.name} title={track.name} accent={track.color}>
            {PLACES.map((place) => (
              <WinnerRow key={place} label={place} />
            ))}
          </WinnerCard>
        ))}
      </div>

      <GroupHeading>Special Prizes</GroupHeading>
      <div className="winners-grid">
        {SPECIAL_PRIZES.map((title) => (
          <WinnerCard key={title} title={title}>
            <WinnerRow label="Winner" />
          </WinnerCard>
        ))}
      </div>

      <GroupHeading>MLH Prizes</GroupHeading>
      <div className="winners-grid">
        {MLH_PRIZES.map((title) => (
          <WinnerCard key={title} title={title}>
            <WinnerRow label="Winner" />
          </WinnerCard>
        ))}
      </div>
    </div>
  )
}

export default Winners
