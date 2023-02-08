function convertTimeZone(timezone) {
  let hours = Math.floor(timezone / 3600);
  let minutes = Math.floor((timezone % 3600) / 60);
  let sign = hours > 0 ? '+' : '-';
  hours = Math.abs(hours);
  return `UTC ${sign}${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
}

console.log(convertTimeZone(19800));
