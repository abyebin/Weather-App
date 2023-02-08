import { convertTimeZone } from './Converter';

let utcTimeMinutes;
export let cityTime;

export function getUTC0() {
  let currentTime = currentTimeInMinutes();
  let diff = new Date().getTimezoneOffset();
  let x = 'AM';

  let utc = currentTime + diff;
  utcTimeMinutes = utc;

  if (utc >= 720) {
    x = 'PM';
  }

  let hours = Math.floor(utc / 60);
  let minutes = utc % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let time = `${hours}:${minutes} ${x}`;
  return time;
}

function currentTimeInMinutes() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let currentMinutes = hours * 60 + minutes;
  cityTime = currentMinutes;
  return currentMinutes;
}

export function timeNOw(timezone) {
  getUTC0();
  convertTimeZone(timezone);
  let timeTotal = cityTime + utcTimeMinutes;
  let hours = Math.floor(timeTotal / 60);
  let minutes = timeTotal % 60;
  
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  
  let minuteFormat = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  let hourFormat = `${hours}:${minuteFormat} ${ampm}`;
  return hourFormat;
}
