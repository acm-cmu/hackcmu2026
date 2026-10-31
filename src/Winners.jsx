import './Winners.css'

const TBD = '[to fill in]'

const firstPlace = (winner) => [{ label: '1st', winner }]
const winnerCard = (winner) => [{ label: 'Winner', winner }]

const ROBOT_JOUSTING = {
  project: 'Robot Jousting',
  team: 'Robot Jousting',
  members: ['Chris Shi', 'Avnith Vijayram', 'Siddarth Radhakrishnan'],
}

const SECTIONS = [
  { title: 'Grand Prize Winner', cards: winnerCard(ROBOT_JOUSTING) },
  { title: 'IFM Sponsor Track Winner', cards: winnerCard() },
  {
    title: 'Optimization Track',
    cards: firstPlace({
      project: 'Flashtex',
      team: 'flashflood.vim',
      members: ['Aarush Raheja', 'Kabir Goyal', 'Nat Karri', 'Taysen Tsao'],
    }),
  },
  { title: 'Multiplayer Track', cards: firstPlace(ROBOT_JOUSTING) },
  {
    title: 'Traveling Track',
    cards: firstPlace({
      project: 'Trip Judge',
      team: 'Companions from Central Plains',
      members: ['Ryan He', 'Daniel Y Dong', 'Zhouxuan Yu'],
    }),
  },
  {
    title: 'Food Track',
    cards: firstPlace({
      project: 'Forkcast',
      team: 'ROKA',
      members: ['Shinyong Park', 'Chris Lee', 'Chris Lee', 'Beomjin Seo'],
    }),
  },
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

function WinnerCard({ label, winner }) {
  return (
    <div className="winner-card">
      <div className="winner-card-header">
        <span className="winner-card-rule" aria-hidden="true" />
        <h4>{label}</h4>
        <span className="winner-card-rule" aria-hidden="true" />
      </div>
      {winner ? (
        <div className="winner-info">
          <div className="winner-name">{winner.project}</div>
          <div className="winner-team">{winner.team}</div>
          <div className="winner-members">{winner.members.join(' · ')}</div>
        </div>
      ) : (
        <div className="winner-name">{TBD}</div>
      )}
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
              <WinnerCard key={card.label} label={card.label} winner={card.winner} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Winners
