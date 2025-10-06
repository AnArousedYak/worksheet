import '../styling/TimeClock.css';

export default function TimeClock() {
  return (
    <section className="time-section">
      <h3>Time Tracking</h3>
      <div className="time-group">
        <div className="time-row">
          <label>Shop:</label>
          <button type="button">Clock In</button>
        </div>
        <div className="time-row">
          <label>Travel:</label>
          <button type="button">Clock In</button>
        </div>
        <div className="time-row">
          <label>Site:</label>
          <button type="button">Clock In</button>
        </div>
      </div>
    </section>
  );
}
