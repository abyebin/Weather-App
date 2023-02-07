import { dataSet } from './storage ';
import { kelvinToCelcius } from './Converter';

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

export function toDisplay() {
  mainTemp.innerHTML = kelvinToCelcius(dataSet.main.temp);
  feelslike.innerHTML = kelvinToCelcius(dataSet.main.feels_like);
  city.innerHTML = dataSet.name + ',' + ' ' + dataSet.sys.country;
  currentdate.innerHTML = new Date().toLocaleDateString();
  time.innerHTML = new Date().toLocaleTimeString();
  visibility.innerHTML = dataSet.visibility / 1000;
  seaLevel.innerHTML = dataSet.main.sea_level;
  groundLevel.innerHTML = dataSet.main.pressure;
  clouds.innerHTML = dataSet.weather[0].main;
  description.innerHTML = dataSet.weather[0].description;

  console.log(dataSet);
}

// {
//     "coord": {
//         "lon": 76.2236,
//         "lat": 10.5139
//     },
//     "weather": [
//         {
//             "id": 801,
//             "main": "Clouds",
//             "description": "few clouds",
//             "icon": "02n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 298.12,
//         "feels_like": 299,
//         "temp_min": 298.12,
//         "temp_max": 298.12,
//         "pressure": 1012,
//         "humidity": 89,
//         "sea_level": 1012,
//         "grnd_level": 1011
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 0.78,
//         "deg": 136,
//         "gust": 1.04
//     },
//     "clouds": {
//         "all": 23
//     },
//     "dt": 1675788300,
//     "sys": {
//         "type": 1,
//         "id": 9211,
//         "country": "IN",
//         "sunrise": 1675732650,
//         "sunset": 1675774858
//     },
//     "timezone": 19800,
//     "id": 1254187,
//     "name": "Thrissur",
//     "cod": 200
// }
