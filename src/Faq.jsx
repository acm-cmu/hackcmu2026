import { useState } from 'react'
import './Faq.css'

const FAQS = [
  {
    question: 'What is HackCMU?',
    answer:
      'HackCMU is a 24-hour event where students from across campus come together to make something awesome — like an app, website or hardware hack.',
  },
  {
    question: 'How do I register?',
    answer: (
      <>
        You can register here:{' '}
        <a href="https://forms.gle/XHyQMkiPM8SFS1ze6" target="_blank" rel="noopener noreferrer">
          Ticket!
        </a>
      </>
    ),
  },
  {
    question: 'How do project tracks work?',
    answer:
      "When you submit your project, you'll choose a track that best fits your idea, along with a short (50-word) explanation of why it belongs in that track. We will distribute prizes for each track based on the number of people who select it. For instance, if most people choose track 1, then we will have first, second, and third place prizes for that track. If only a few people choose track 2, then we will only have a first place prize for that track.",
  },
  {
    question: 'When will project tracks be released?',
    answer:
      'We will announce the tracks during the opening ceremony of HackCMU on September 11th, Friday.',
  },
  {
    question: "What if I'm an undergrad / graduate / doctoral student?",
    answer: 'All current CMU students are welcome!',
  },
  {
    question: 'Where will HackCMU be held?',
    answer: 'HackCMU will mostly take place in Simmons Auditorium at Tepper!',
  },
  {
    question: 'How much does this cost?',
    answer:
      "$0! We'll provide meals, snacks, drinks, and lots of swag, thanks to the support of our wonderful sponsors.",
  },
  {
    question: 'What do I do after I register?',
    answer: "Wait for a follow-up email with more details. Invite your friends! It'll be fun!",
  },
  {
    question: 'I’m not a “hacker”, can I still participate?',
    answer:
      "Students of all skill levels are encouraged to attend, even if you've never written a line of code! Anyone is welcome to participate — such as designers, engineers, data scientists, etc. The only requirement is your attitude to learn!",
  },
  {
    question: 'Are there teams? Do I need one to sign up?',
    answer:
      "Working as a team is highly encouraged, but not required. We'll be facilitating team-forming the day-of, so don't be discouraged if you don't have a team! We don't actually track team formations until project submission, where you'll list your crew and their contributions to code, design, and ideation.",
  },
  {
    question: 'How big can a team be?',
    answer: 'There is a maximum final team size which is up to 4 people!',
  },
  {
    question: 'What are the rules? Can I work on my project ahead of time?',
    answer:
      'All work must be original, and you are not permitted to start building or designing your project until the event. Brainstorming ideas and forming teams beforehand is fine, though.',
  },
  {
    question: 'What is the judging criteria?',
    answer:
      'Projects will be judged based on: real-life usefulness, technological complexity, originality, and presentation/demo quality.',
  },
  {
    question: 'How do prizes work?',
    answer:
      "We will have prizes for each tracks. In addition, we will select an overall grand prize across all projects. We will also have sponsor-specific prizes that aren't restricted to any track.",
  },
  {
    question: 'How can I be entered into the raffle?',
    answer: "You'll be automatically entered into the raffle if you submit a project by the due date!",
  },
  {
    question: 'Who runs this event?',
    answer: (
      <>
        You can learn more about us at{' '}
        <a href="https://www.acmatcmu.com/" target="_blank" rel="noopener noreferrer">
          acmatcmu.com
        </a>
        !
      </>
    ),
  },
  {
    question: 'What is the MLH Code of Conduct?',
    answer: (
      <>
        HackCMU is a MLH Member Event and adheres to the{' '}
        <a
          href="https://transactional.mlh.io/ls/click?upn=u001.ylVwTgUGgwKU7pzcrRvDJ8PHbadmgV5k5JoIkdGqo6gYWO-2FAkMiUgVbQIw7qjmJ0SEIHBSAJSxstJ1QaNLt03938IOMU-2F-2FI2DhqvACqTCjZCbld1yTzeGhhC1c2-2F-2FXZpQIaDG-2BRT-2F4hesvmMI6z8qofWkQPHhgYB4yALDeK0eqQhn4fN82UuHPJgssB2L-2BwC5wNqqQGHPJ6LxQ6V7SPRSNsaiiXpjZwfDsNw9JxPlT82UX4DyhFgGaXYLE7Mz-2BsYUp-2BQLjJdn8OaqZaeUNqNrkbXNyQew6GOdFKYcZEFvcYHNWbDmlesBm5Hyf1crtPt7x-2F2YjsI1bZxjn4K6sQ93BiVU4CrsZJqaK-2BTHnXmuKXHW1L2YpIjfyd0JKUPI3LrD7p7iOoPRVHWvvHYEFQf1TvtXyCwHn5A4q6r-2BfBKDar4c7r306fhIvbgkjcFer9uw2vFZ3J9pIgHBC6wOsuFIBtqAg-2BrTuQRymJWUhI6SBVeHd-2FhgybcVj4qV30xdXfd3y-2BM03Jad2I2Pwp8584xLrjiTDUE09lLHN-2FkspfyHT7scg5USzToaeJLfSYtnTMnFR8uV4abocfdm3mqxwu4ymcxHjLttFXOU90MdRpnRw08-2FCKPnHVvIZC8EiIY9yFplKfPnEBn8lQlYgJBJDIto32vq1B-2FtauyA50ls5Tl3tIPyuX-2BldO8jvQ4gJ93dl6cDGZ0-2BaMkNqFB3M3FCcdIZg-3D-3DBAll_et-2BSWg2qxMdkIzCe-2FIQP5lu3AVtydvrfl4A8XI4ppvOoabyCFM52NzlvQTFl7AQ4ZaQ1583Zc5hE7gbEcw36zbjMy6Es0r8LuJ5Uak2OdzSuOUR2km2k7-2B1cmVf4cSjob4EskAvkbqUmelOk6Uw-2Bc00wCJXmOC9chBDrlLHCAhIVj-2BcLVvB-2FTr3blrMKu2g-2BcfGVXKfV5EsGJ4j8jWmBNMNJ41yW7U04U77KRfOrI6U1rSJ43XbSm29inVHbKWTt2X3NyqEwvsnCFufRgsl8l4I2dTF4fpSl5jcXi-2FS-2FsFg-3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLH Code of Conduct
        </a>
        .
      </>
    ),
  },
  {
    question: 'Any other questions, comments, or concerns?',
    answer:
      "Email us at acm-exec@cs.cmu.edu. We'd also love for you to follow us on social media @acmatcmu, LinkedIn group, keep up with our website, and join our Discord server :)",
  },
]

function Faq() {
  const [openSet, setOpenSet] = useState(() => new Set())

  const toggle = (i) => {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="faq-wrap">
      <div className="faq-masthead">
        <span className="faq-rule" aria-hidden="true" />
        <h2 className="faq-title">Bulletin of Answers</h2>
        <span className="faq-rule" aria-hidden="true" />
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => {
          const isOpen = openSet.has(i)
          return (
            <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.question}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
