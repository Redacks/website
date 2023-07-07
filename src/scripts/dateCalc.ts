export function dateTimeOffset(date: Date = new Date(), lang?: string): string {
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - date.getTime();
  
  const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30; // Assuming 30 days in a month
  const months = Math.floor(diffInMilliseconds / millisecondsPerMonth);
  
  let result: string;
  if (months >= 12) {
    const years = Math.floor(months / 12);
    if (lang === 'de') {
      result = years === 1 ? years + ' Jahr' : years + ' Jahre';
    } else {
      result = years === 1 ? years + ' year' : years + ' years';
    }
  } else {
    if (lang === 'de') {
      result = months === 1 ? months + ' Monat' : months + ' Monate';
    } else {
      result = months === 1 ? months + ' month' : months + ' months';
    }
  }
  
  return result;
}
