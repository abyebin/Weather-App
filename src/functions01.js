const getLocation = document.getElementById('getLocation');
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click',searchCity)
getLocation.addEventListener('click', locationX);

// city keyword
let searcKeyWord = "";

function searchCity(){
  searcKeyWord = document.getElementById('city').value;
  
}

//find current location
let latitudex = 0
let longitudex = 0
let apiKey = "02cd7df6f57621292521348f6a56ec7c"

let temp = "";

function locationX() {
  navigator.geolocation.getCurrentPosition(showPosition);
  displayToPage()
}

function showPosition(position) {
  latitudex = position.coords.latitude;
  longitudex = position.coords.longitude;
}

export function displayToPage(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitudex}&lon=${longitudex}&appid=${apiKey}`,{mode: 'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response)
        temp = response.main.temp
    })
}

