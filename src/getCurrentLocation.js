import { apiKey } from './App Id';
import { dataSet,manageData } from './storage ';
import { showdisplay } from './background';

let latitudex = 0;
let longitudex = 0;

const getLocation = document.getElementById('getLocation');

function showPosition(position) {
  latitudex = position.coords.latitude;
  longitudex = position.coords.longitude;
  displayToPage();
}

export function locationX() {
  showdisplay()
  navigator.geolocation.getCurrentPosition(showPosition);
}

export async function displayToPage() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitudex}&lon=${longitudex}&appid=${apiKey}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    dataSet = data
  } catch (error) {
    console.log(error);
    return error
  }
  manageData()
}
