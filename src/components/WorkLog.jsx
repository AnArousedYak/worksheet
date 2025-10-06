import '../styling/WorkLog.css'

export default function DailyWorkLog() {
    return (
        <form>
            <h2>Daily Work Log</h2>
    
            <label>
                Employee Name:
            <input type="text" name="employeeName" />
            </label>
    
            <label>
                Date:
            <input type="date" name="date" />
            </label>
    
            <label>
                Customer Name:
            <input type="text" name="customerName" />
            </label>
    
            <label>
                Location:
            <input type="text" name="location" />
            </label>
    
            <label>
                Scope of Work:
            <textarea name="scopeOfWork" />
            </label>
    
            <label>
                Repairs Made:
            <textarea name="repairsMade" />
            </label>
    
            <label>
                Parts Used:
            <textarea name="partsUsed" />
            </label>
    
            <label>
                Mileage:
            <input type="number" name="mileage" />
            </label>
 
        </form>
    );
  }
  