import { dataSet } from './storage ';
import { kelvinToCelcius } from './Converter';

const mainTemp = document.querySelector('.main-temp');

export function colorChange() {
  let temp = kelvinToCelcius(dataSet.main.temp);
  if (temp <= 0) {
    mainTemp.style.color = 'cyan';
  } else if (temp > 0 && temp <= 10) {
    mainTemp.style.color = 'blue';
  } else if (temp > 10 && temp <= 20) {
    mainTemp.style.color = 'green';
  } else if (temp > 20 && temp <= 30) {
    mainTemp.style.color = 'yellow';
  } else if (temp > 30 && temp <= 35) {
    mainTemp.style.color = 'orange';
  } else if (temp > 35 && temp <= 40) {
    mainTemp.style.color = 'orangered';
  } else if (temp > 40) {
    mainTemp.style.color = 'green';
  }
}

export function showdisplay() {
  const homeScreen = document.querySelector('.homeScreen');
  homeScreen.style.display = "none"
}
