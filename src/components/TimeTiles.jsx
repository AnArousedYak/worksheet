import { buildCalendarModel } from '../utils/calendarModel';
import '../styling/CalendarMonth.css'
export default function CalendarMonth({
  startOfWeek = 0,
  showFullWeekdayNames = true,
  showTodayHighlight = true,
  titlePrefix = '',
  hoursByDate, 
}) {
  const model = buildCalendarModel({
    startOfWeek,
    showFullWeekdayNames,
    showTodayHighlight,
    titlePrefix,
    hoursByDate,
  });

  return (
    <section className="calendar-card" aria-labelledby="calendar-title">
      <header className="calendar-header">
        <h2 id="calendar-title" className="calendar-title">{model.title}</h2>
        <p className="calendar-subtitle" />
      </header>
      <div className="calendar-weekdays" role="row">
        {model.weekdayHeaders.map((name) => (
          <div key={name} className="calendar-weekday" role="columnheader" aria-label={name}>
            {name}
          </div>
        ))}
      </div>
      <div className="calendar-grid" role="rowgroup" aria-label="Month days">
        {Array.from({ length: model.leadingBlankCount }).map((_, i) => (
          <div key={`blank-${i}`} className="calendar-tile calendar-tile--blank" aria-hidden="true" />
        ))}
        {model.days.map((d) => (
          <article
            key={d.key}
            className={`calendar-tile${d.isToday ? ' calendar-tile--today' : ''}`}
            aria-label={`Day ${d.label}${typeof d.hours === 'number' ? ` — ${d.hours} hours` : ''}`}
          >
            <div className="tile-top">
              <span className="tile-daynum">{d.label}</span>
            </div>
            <div className="tile-hours">
              {typeof d.hours === 'number' ? `${d.hours.toFixed(2)} hours` : ''}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}