
import { dataSet } from './storage ';
import { kelvinToCelcius } from './Converter';


const mainTemp = document.querySelector('.main-temp');
const feelslike = document.querySelector('.feel');
const city = document.querySelector('.text-city');
const currentdate = document.querySelector('.current-date');
const time = document.querySelector('.current-time');

export function toDisplay() {
  mainTemp.innerHTML = kelvinToCelcius(dataSet.main.temp);
  feelslike.innerHTML = kelvinToCelcius(dataSet.main.feels_like);
  city.innerHTML = dataSet.name + ',' + ' ' + dataSet.sys.country;
  currentdate.innerHTML = new Date().toLocaleDateString();
  time.innerHTML = new Date().toLocaleTimeString();

  console.log(dataSet);
}
