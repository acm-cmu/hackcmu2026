import './Winners.css'

const TBD = '[to fill in]'

const firstPlace = (winner) => [{ label: '1st', winner }]
const winnerCard = (winner) => [{ label: 'Winner', winner }]

const FLASHTEX = {
  project: 'Flashtex',
  team: 'flashflood.vim',
  members: ['Aarush Raheja', 'Kabir Goyal', 'Nat Karri', 'Taysen Tsao'],
}

const ROBOT_JOUSTING = {
  project: 'Robot Jousting',
  team: 'Robot Jousting',
  members: ['Chris Shi', 'Avnith Vijayram', 'Siddarth Radhakrishnan'],
}

const SECTIONS = [
  { title: 'Grand Prize Winner', cards: winnerCard(ROBOT_JOUSTING) },
  {
    title: 'IFM Sponsor Track Winner',
    cards: winnerCard({ project: 'K2 Cascade', team: 'K2 Cascade', members: ['Peter Qin'] }),
  },
  {
    title: 'Optimization Track',
    cards: firstPlace(FLASHTEX),
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
  {
    title: 'SpaceXAI Prize Winner',
    cards: winnerCard({
      project: 'Gotchu',
      team: 'Sightline',
      members: ['Thomaz Kanz', 'Divya Gupta', 'William Montague', 'Daphne Davila'],
    }),
  },
  {
    title: 'Sandia Prize Winner',
    cards: winnerCard({
      project: 'Fantasy Phishing',
      team: 'Great Heinz Think Alike',
      members: ['Hamza Mahamud', 'Leo Peele', 'James Piper', 'Evan Lubinsky'],
    }),
  },
  {
    title: 'MLH Prizes',
    cards: [
      {
        label: 'Best Use of Gemini',
        winner: {
          project: 'StepMate',
          team: 'Command',
          members: ['Faribah Nuha', 'Amishi Gupta', 'Rishika Pachava', 'Swetha Mandaleeka'],
        },
      },
      {
        label: 'Best Use of Eleven Labs',
        winner: { project: 'The Job Rooms', members: ['Kevin Zhang', 'Gaocheng Zeng'] },
      },
      {
        label: 'Best Use of Solana',
        winner: {
          project: 'FoodTrace',
          team: 'Jon Doe',
          members: ['Oliver Chou', 'Jimmy Chen', 'James Yeh', 'Nian-Nian Wang'],
        },
      },
      {
        label: 'Best Use of Vultr',
        winner: {
          project: 'JoyWalk',
          team: 'OdyssAI',
          members: ['Minki Kim', 'Yucheon Park', 'Doyoung Heo', 'Seungyeon Back'],
        },
      },
      {
        label: 'Best Use of Auth0',
        winner: {
          project: "Stack'd",
          members: ['Drishti Singh', 'Emily Hu', 'Mridula Murugan', 'Kelsey Liu'],
        },
      },
      {
        label: 'Best Use of MongoDB',
        winner: {
          project: 'Rove',
          team: 'The Rovers',
          members: ['Rishika Agarwal', 'Megan Han', 'Rachit Jaiswal', 'Aryan Jain'],
        },
      },
    ],
  },
  {
    title: 'Best Design Winner',
    cards: winnerCard({
      project: 'CookPilot',
      team: '404 Brain Not Found',
      members: ['Selene Wang', 'Margaret Chai', 'Alejandro Tabares Arango', 'Joaquin Delgado Lorino'],
    }),
  },
  { title: "People's Favorite", cards: winnerCard(FLASHTEX) },
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
          {winner.team && <div className="winner-team">{winner.team}</div>}
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
