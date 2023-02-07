import { apiKey } from './App Id';
import { toDisplay } from './printOnDisplay';

let searcKeyWord = document.getElementById('city');

export function searchCity() {
  if(searcKeyWord.value === ""){
    searcKeyWord.value = "Globe"
  }
  event.preventDefault();
  displayToPage();
}
export let dataSets

export async function displayToPage() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searcKeyWord.value}&APPID=${apiKey}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    dataSets = data
    return data
  } catch (error) {
    console.error(error);
    return error
  }
  toDisplay()
}
