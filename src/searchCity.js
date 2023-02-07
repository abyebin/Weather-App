import { apiKey } from './Apiid';

let searcKeyWord = document.getElementById('city');

export function searchCity() {
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
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

