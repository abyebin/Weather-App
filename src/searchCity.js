import { apiKey } from './App Id';
import { dataSet,manageData } from './storage ';

let searcKeyWord = document.getElementById('city');

export function searchCity() {
  if(searcKeyWord.value === ""){
    searcKeyWord.value = "Globe"
  }
  event.preventDefault();
  displayToPage();
}
export async function displayToPage() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searcKeyWord.value}&APPID=${apiKey}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    dataSet = data
  } catch (error) {
    console.error(error);
  }
  manageData()
}
