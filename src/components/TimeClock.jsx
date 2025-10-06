import '../styling/TimeClock.css';

export default function TimeClock() {
  return (
    <section className="timecard">
      <header className="timecard-header">
        <h3 className="timecard-title">Time Tracking</h3>
        <p className="timecard-subtitle">Choose an activity to clock in or out</p>
      </header>
      <div className="time-group">
        <div className="time-row">
          <label className="label">Shop</label>
          <div className="button-row">
            <button type="button" className="button-accent">Clock In</button>
            <button type="button" className="button-secondary">Clock Out</button>
          </div>
        </div>
        <div className="time-row">
          <label className="label">Travel</label>
          <div className="button-row">
            <button type="button" className="button-accent">Clock In</button>
            <button type="button" className="button-secondary">Clock Out</button>
          </div>
        </div>
        <div className="time-row">
          <label className="label">Site</label>
          <div className="button-row">
            <button type="button" className="button-accent">Clock In</button>
            <button type="button" className="button-secondary">Clock Out</button>
          </div>
        </div>
      </div>
    </section>
  );
}
