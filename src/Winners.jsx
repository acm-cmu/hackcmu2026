import './Winners.css'

const TBD = '[to fill in]'
const PLACES = ['1st', '2nd', '3rd']

const placeCards = () => PLACES.map((label) => ({ label }))
const winnerCard = (label = 'Winner') => [{ label }]

const SECTIONS = [
  { title: 'Grand Prize Winner', cards: winnerCard() },
  { title: 'IFM Sponsor Track Winner', cards: winnerCard() },
  { title: 'Optimization Track', cards: placeCards() },
  { title: 'Multiplayer Track', cards: placeCards() },
  { title: 'Traveling Track', cards: placeCards() },
  { title: 'Food Track', cards: placeCards() },
  { title: 'SpaceXAI Prize Winner', cards: winnerCard() },
  { title: 'Sandia Prize Winner', cards: winnerCard() },
  {
    title: 'MLH Prizes',
    cards: [
      'Best Use of Gemini',
      'Best Use of Eleven Labs',
      'Best Use of Solana',
      'Best Use of Vultr',
      'Best Use of Auth0',
      'Best Use of MongoDB',
    ].map((label) => ({ label })),
  },
  { title: 'Best Design Winner', cards: winnerCard() },
  { title: "People's Favorite", cards: winnerCard() },
]

function WinnerCard({ label }) {
  return (
    <div className="winner-card">
      <div className="winner-card-header">
        <span className="winner-card-rule" aria-hidden="true" />
        <h4>{label}</h4>
        <span className="winner-card-rule" aria-hidden="true" />
      </div>
      <div className="winner-name">{TBD}</div>
    </div>
  )
}

function Winners() {
  return (
    <div className="winners-wrap">
      <h2 className="winners-title">Winners</h2>
      <p className="winners-subtitle">Congratulations to everyone who rode the Midnight Express!</p>

      {SECTIONS.map((section) => (
        <section className="winners-group" key={section.title}>
          <div className="winners-group-heading">
            <span className="winners-rule" aria-hidden="true" />
            <h3>{section.title}</h3>
            <span className="winners-rule" aria-hidden="true" />
          </div>
          <div className="winners-grid">
            {section.cards.map((card) => (
              <WinnerCard key={card.label} label={card.label} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Winners
