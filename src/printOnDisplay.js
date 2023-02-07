import { dataSetg } from './getCurrentLocation';
import { dataSets } from './searchCity';
import { kelvinToCelcius } from './Converter';

const mainTemp = document.querySelector('.main-temp');
const feelslike = document.querySelector('.feel');
const city = document.querySelector('.text-city');
const currentdate = document.querySelector('.current-date');
const time = document.querySelector('.current-time');

export function toDisplay() {
  mainTemp.innerHTML = kelvinToCelcius(dataSetg.main.temp);
  feelslike.innerHTML = kelvinToCelcius(dataSetg.main.feels_like);
  city.innerHTML = dataSetg.name + ',' + ' ' + dataSetg.sys.country;
  currentdate.innerHTML = new Date().toLocaleDateString();
  time.innerHTML = new Date().toLocaleTimeString();

  console.log(dataSetg);
}
