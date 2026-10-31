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
  { title: 'Grand Prize', color: '#dfa121' },
  { title: 'IFM Sponsor Track', color: '#9268c9' },
  { title: 'SpaceXAI Prize', color: '#dfa121' },
  { title: 'Sandia Prize', color: '#dfa121' },
  { title: 'Best Design', color: '#dfa121' },
  { title: "People's Favorite", color: '#dfa121' },
]

const MLH_PRIZES = [
  'Best Use of Gemini',
  'Best Use of Eleven Labs',
  'Best Use of Solana',
  'Best Use of Vultr',
  'Best Use of Auth0',
  'Best Use of MongoDB',
]

function Ticket({ label, color, children }) {
  return (
    <div className="winner-ticket" style={{ '--ticket-color': color }}>
      <div className="winner-ticket-stub">
        <span className="winner-ticket-label">{label}</span>
      </div>
      <div className="winner-ticket-body">{children}</div>
    </div>
  )
}

function Winners() {
  return (
    <div className="winners-wrap">
      <h2 className="winners-title">Winners</h2>
      <p className="winners-subtitle">Congratulations to everyone who rode the Midnight Express!</p>

      <h3 className="winners-heading">Track Winners</h3>
      <div className="winners-grid">
        {TRACK_WINNERS.map((track) => (
          <Ticket key={track.name} label={track.name} color={track.color}>
            <ol className="winner-places">
              {PLACES.map((place) => (
                <li key={place}>
                  <span className="winner-place">{place}</span>
                  <span className="winner-name">{TBD}</span>
                </li>
              ))}
            </ol>
          </Ticket>
        ))}
      </div>

      <h3 className="winners-heading">Special Prizes</h3>
      <div className="winners-grid">
        {SPECIAL_PRIZES.map((prize) => (
          <Ticket key={prize.title} label={prize.title} color={prize.color}>
            <p className="winner-name solo">{TBD}</p>
          </Ticket>
        ))}
      </div>

      <h3 className="winners-heading">MLH Prizes</h3>
      <div className="winners-grid">
        {MLH_PRIZES.map((prize) => (
          <Ticket key={prize} label={prize} color="#4f7fbf">
            <p className="winner-name solo">{TBD}</p>
          </Ticket>
        ))}
      </div>
    </div>
  )
}

export default Winners
