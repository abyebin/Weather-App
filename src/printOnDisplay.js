import { dataSet } from './storage ';
import { kelvinToCelcius } from './Converter';
import { unixToHuman, windDi, convertTimeZone } from './Converter';
import { getUTC0, timeNOw} from './updateTimeDate';

const mainTemp = document.querySelector('.main-temp');
const feelslike = document.querySelector('.feel');
const city = document.querySelector('.text-city');
const currentdate = document.querySelector('.current-date');
const time = document.querySelector('.current-time');
const visibility = document.querySelector('.visibilityS');
const seaLevel = document.querySelector('.seaLevelS');
const groundLevel = document.querySelector('.grndLvlS');
const clouds = document.querySelector('.clouds');
const description = document.querySelector('.description');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const windSpeed = document.querySelector('.windS');
const windDirection = document.querySelector('.deg');
const windgust = document.querySelector('.gustS');
const timezone = document.querySelector('.timeZone');
const humidity = document.querySelector('.humidity');
const utc = document.querySelector('.utc0');

export function toDisplay() {
  mainTemp.innerHTML = kelvinToCelcius(dataSet.main.temp);
  feelslike.innerHTML = kelvinToCelcius(dataSet.main.feels_like);
  city.innerHTML = dataSet.name + ',' + ' ' + dataSet.sys.country;
  visibility.innerHTML = dataSet.visibility / 1000;
  seaLevel.innerHTML = dataSet.main.sea_level;
  groundLevel.innerHTML = dataSet.main.pressure;
  clouds.innerHTML = dataSet.weather[0].main;
  description.innerHTML = dataSet.weather[0].description;
  sunrise.innerHTML = unixToHuman(dataSet.sys.sunrise);
  sunset.innerHTML = unixToHuman(dataSet.sys.sunset);
  windSpeed.innerHTML = `${dataSet.wind.speed} m/s`;
  windDirection.innerHTML = `${dataSet.wind.deg} &deg; ${windDi(
    dataSet.wind.deg
  )}`;
  windgust.innerHTML = `${dataSet.wind.gust} m/s`;
  timezone.innerHTML = convertTimeZone(dataSet.timezone);
  humidity.innerHTML = `Humidity: ${dataSet.main.humidity}%`;
  // utc.innerHTML = `UTC time: ${getUTC0()}`;
    
  currentdate.innerHTML = new Date().toLocaleDateString();
  time.innerHTML = timeNOw(dataSet.timezone);

  console.log();
}
