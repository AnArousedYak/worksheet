export function buildCalendarModel({
    startOfWeek = 0,                 
    showFullWeekdayNames = true,    
    showTodayHighlight = true,
    titlePrefix = '',
    hoursByDate,                     
  } = {}) {
   
    const locale = typeof navigator !== 'undefined' ? navigator.language : undefined;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const today = new Date();
    const year = today.getFullYear();
    const monthIndex = today.getMonth(); // 0..11
    const monthStart = new Date(year, monthIndex, 1);
    const monthEnd = new Date(year, monthIndex + 1, 0);
    const daysInMonth = monthEnd.getDate();
  
    const padTwo = (n) => String(n).padStart(2, '0');
    const makeLocalKey = (d) => `${d.getFullYear()}-${padTwo(d.getMonth() + 1)}-${padTwo(d.getDate())}`;
    const isSameLocalDay = (a, b) =>
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  
  
    const monthTitle = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone }).format(monthStart);
    const dayNumberFormatter = new Intl.DateTimeFormat(locale, { day: 'numeric', timeZone });
    
    const weekdayFormatter = new Intl.DateTimeFormat(locale, {
      weekday: showFullWeekdayNames ? 'long' : 'short',
      timeZone,
    });
  
  
    const weekdayHeaders = (() => {
      const base = Array.from({ length: 7 }, (_, i) => weekdayFormatter.format(new Date(2020, 10, 1 + i)));
      return startOfWeek === 1 ? [...base.slice(1), base[0]] : base;
    })();
  

    const leadingBlankCount = ((dow) => (dow - startOfWeek + 7) % 7)(monthStart.getDay());
    const days = Array.from({ length: daysInMonth }, (_, i) => {
    const dateObject = new Date(year, monthIndex, i + 1);
    const key = makeLocalKey(dateObject);
    const label = dayNumberFormatter.format(dateObject);
    const isToday = showTodayHighlight && isSameLocalDay(dateObject, today);
    const hours = hoursByDate instanceof Map ? hoursByDate.get(key) : undefined;

    return { dateObject, key, label, isToday, hours };
});
  
    return {
      title: `${titlePrefix}${monthTitle}`,
      weekdayHeaders,
      leadingBlankCount,
      days,
    };
  }