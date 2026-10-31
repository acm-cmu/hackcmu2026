import './Winners.css'

const TBD = '[to fill in]'

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
  {
    title: 'Grand Prize',
    cards: [{ label: 'Grand Prize Winner', winner: ROBOT_JOUSTING }],
  },
  {
    title: 'Sponsor Track',
    cards: [
      {
        label: 'IFM Track Winner',
        winner: { project: 'K2 Cascade', team: 'K2 Cascade', members: ['Peter Qin'] },
      },
    ],
  },
  {
    title: 'Tracks',
    cards: [
      { label: 'Optimization', winner: FLASHTEX },
      { label: 'Multiplayer', winner: ROBOT_JOUSTING },
      {
        label: 'Traveling',
        winner: {
          project: 'Trip Judge',
          team: 'Companions from Central Plains',
          members: ['Ryan He', 'Daniel Y Dong', 'Zhouxuan Yu'],
        },
      },
      {
        label: 'Food',
        winner: {
          project: 'Forkcast',
          team: 'ROKA',
          members: ['Shinyong Park', 'Chris Lee', 'Chris Lee', 'Beomjin Seo'],
        },
      },
    ],
  },
  {
    title: 'Sponsor Prizes',
    cards: [
      {
        label: 'SpaceXAI Prize',
        winner: {
          project: 'Gotchu',
          team: 'Sightline',
          members: ['Thomaz Kanz', 'Divya Gupta', 'William Montague', 'Daphne Davila'],
        },
      },
      {
        label: 'Sandia Prize',
        winner: {
          project: 'Fantasy Phishing',
          team: 'Great Heinz Think Alike',
          members: ['Hamza Mahamud', 'Leo Peele', 'James Piper', 'Evan Lubinsky'],
        },
      },
      {
        label: 'MLH: Best Use of Gemini',
        winner: {
          project: 'StepMate',
          team: 'Command',
          members: ['Faribah Nuha', 'Amishi Gupta', 'Rishika Pachava', 'Swetha Mandaleeka'],
        },
      },
      {
        label: 'MLH: Best Use of Eleven Labs',
        winner: { project: 'The Job Rooms', members: ['Kevin Zhang', 'Gaocheng Zeng'] },
      },
      {
        label: 'MLH: Best Use of Solana',
        winner: {
          project: 'FoodTrace',
          team: 'Jon Doe',
          members: ['Oliver Chou', 'Jimmy Chen', 'James Yeh', 'Nian-Nian Wang'],
        },
      },
      {
        label: 'MLH: Best Use of Vultr',
        winner: {
          project: 'JoyWalk',
          team: 'OdyssAI',
          members: ['Minki Kim', 'Yucheon Park', 'Doyoung Heo', 'Seungyeon Back'],
        },
      },
      {
        label: 'MLH: Best Use of Auth0',
        winner: {
          project: "Stack'd",
          members: ['Drishti Singh', 'Emily Hu', 'Mridula Murugan', 'Kelsey Liu'],
        },
      },
      {
        label: 'MLH: Best Use of MongoDB',
        winner: {
          project: 'Rove',
          team: 'The Rovers',
          members: ['Rishika Agarwal', 'Megan Han', 'Rachit Jaiswal', 'Aryan Jain'],
        },
      },
    ],
  },
  {
    title: 'ACM Prizes',
    cards: [
      {
        label: 'Best Design',
        winner: {
          project: 'CookPilot',
          team: '404 Brain Not Found',
          members: ['Selene Wang', 'Margaret Chai', 'Alejandro Tabares Arango', 'Joaquin Delgado Lorino'],
        },
      },
      { label: "People's Favorite", winner: FLASHTEX },
    ],
  },
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
