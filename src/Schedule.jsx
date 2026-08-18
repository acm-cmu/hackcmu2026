import { useState } from 'react'
import './Schedule.css'

const SCHEDULE = [
  {
    date: 'September 11th, 2026',
    events: [
      {
        time: '5:00 – 6:00 pm',
        title: 'Boarding',
        location: 'Tepper Simmons Auditorium',
        desc: 'Check in with organizers and find your team members.',
      },
      {
        time: '6:00 – 6:30 pm',
        title: 'Departure',
        location: 'Tepper Simmons Auditorium',
        desc: 'Join us for the opening ceremony of HackCMU 2026!',
      },
      {
        time: '7:00 – 9:00 pm',
        title: 'Dinner + Sponsor Expo',
        location: 'Tepper Simmons Auditorium',
        desc: 'Meet our amazing event sponsors!',
      },
      {
        time: '12:00 – 1:00 am',
        title: 'Midnight Cafe Halte',
        location: 'Tepper Simmons Auditorium',
        desc: 'Fuel up with late-night snacks!',
      },
    ],
  },
  {
    date: 'September 12th, 2026',
    events: [
      {
        time: '12:00 – 1:00 pm',
        title: 'Lunch',
        location: 'Tepper Simmons Auditorium',
        desc: 'Grab a bite before submitting your final project.',
      },
      {
        time: '4:00 pm',
        title: 'Baggage Check',
        location: 'Google Form',
        desc: 'Submit your project description and track selection.',
      },
      {
        time: '4:00 – 6:30 pm',
        title: 'Platform Showcase',
        location: 'Tepper Simmons Auditorium',
        desc: 'Show off your amazing project to everyone!',
      },
      {
        time: '6:30 – 7:00 pm',
        title: 'Dinner',
        location: 'Tepper Simmons Auditorium',
        desc: 'Relax and enjoy dinner with fellow hackers.',
      },
      {
        time: '7:00 – 8:00 pm',
        title: 'Arrival',
        location: 'Tepper Simmons Auditorium',
        desc: 'We hope you continue to reach for the stars!',
      },
    ],
  },
]

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
      <path
        d={direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Schedule() {
  const [dayIndex, setDayIndex] = useState(0)
  const day = SCHEDULE[dayIndex]

  const isFirstDay = dayIndex === 0
  const isLastDay = dayIndex === SCHEDULE.length - 1

  const goPrev = () => setDayIndex((i) => Math.max(0, i - 1))
  const goNext = () => setDayIndex((i) => Math.min(SCHEDULE.length - 1, i + 1))

  return (
    <div className="schedule">
      <div className="schedule-heading">
        <span className="schedule-rule" aria-hidden="true" />
        <h2 className="schedule-title">Scheduling</h2>
        <span className="schedule-rule" aria-hidden="true" />
      </div>

      <div className="schedule-day" key={day.date}>
        <button
          type="button"
          className="schedule-nav schedule-nav-prev"
          onClick={goPrev}
          disabled={isFirstDay}
          aria-label="Previous day"
        >
          <ArrowIcon direction="prev" />
        </button>
        <button
          type="button"
          className="schedule-nav schedule-nav-next"
          onClick={goNext}
          disabled={isLastDay}
          aria-label="Next day"
        >
          <ArrowIcon direction="next" />
        </button>

        <div className="schedule-day-header">
          <span className="schedule-day-rule" aria-hidden="true" />
          <h3>{day.date}</h3>
          <span className="schedule-day-rule" aria-hidden="true" />
        </div>

        <ol className="schedule-list">
          {day.events.map((ev) => (
            <li className="schedule-row" key={`${day.date}-${ev.time}-${ev.title}`}>
              <div className="schedule-time">{ev.time}</div>
              <div className="schedule-divider" aria-hidden="true" />
              <div className="schedule-details">
                <div className="schedule-event">{ev.title}</div>
                <div className="schedule-location">{ev.location}</div>
                <p className="schedule-desc">{ev.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="schedule-dots" aria-hidden="true">
          {SCHEDULE.map((d, i) => (
            <span key={d.date} className={i === dayIndex ? 'schedule-dot active' : 'schedule-dot'} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule
