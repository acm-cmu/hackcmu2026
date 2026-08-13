import { useState } from 'react'
import './Faq.css'

const FAQS = [
  { question: 'Question 1', answer: 'Answer 1' },
  { question: 'Question 2', answer: 'Answer 2' },
  { question: 'Question 3', answer: 'Answer 3' },
  { question: 'Question 4', answer: 'Answer 4' },
  { question: 'Question 5', answer: 'Answer 5' },
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
