import '../styling/WorkLog.css';

export default function DailyWorkLog() {
  return (
    <form className="worklog-card" onSubmit={(e) => e.preventDefault()}>
      <header className="worklog-header">
        <h2 className="worklog-title">Daily Work Log</h2>
        <p className="worklog-subtitle">Fill out today’s details</p>
      </header>

      <div className="worklog-fields">
        <div className="field">
          <label htmlFor="employeeName" className="label">Employee Name</label>
          <input id="employeeName" name="employeeName" type="text" className="input" placeholder="Enter name" />
        </div>

        <div className="field">
          <label htmlFor="date" className="label">Date</label>
          <input id="date" name="date" type="date" className="input" />
        </div>

        <div className="field">
          <label htmlFor="customerName" className="label">Customer Name</label>
          <input id="customerName" name="customerName" type="text" className="input" placeholder="Enter customer" />
        </div>

        <div className="field">
          <label htmlFor="location" className="label">Location</label>
          <input id="location" name="location" type="text" className="input" placeholder="Enter location" />
        </div>

        <div className="field">
          <label htmlFor="scopeOfWork" className="label">Scope of Work</label>
          <textarea id="scopeOfWork" name="scopeOfWork" className="input textarea" placeholder="Describe scope"></textarea>
        </div>

        <div className="field">
          <label htmlFor="repairsMade" className="label">Repairs Made</label>
          <textarea id="repairsMade" name="repairsMade" className="input textarea" placeholder="List repairs"></textarea>
        </div>

        <div className="field">
          <label htmlFor="partsUsed" className="label">Parts Used</label>
          <textarea id="partsUsed" name="partsUsed" className="input textarea" placeholder="List parts"></textarea>
        </div>

        <div className="field">
          <label htmlFor="mileage" className="label">Mileage</label>
          <input id="mileage" name="mileage" type="number" className="input" placeholder="0" />
        </div>
      </div>

      <div className="worklog-submit">
        <button type="submit" className="button-accent">Submit</button>
      </div>
    </form>
  );
}
