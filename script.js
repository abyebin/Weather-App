const getLocation = document.getElementById('getLocation');

getLocation.addEventListener('click', locationX);

function locationX() {
  console.log('Hello');
  navigator.geolocation.getCurrentPosition(showPosition);
}
let locationArr = [0, 1];
function showPosition(position) {
  locationArr[0] = position.coords.latitude;
  locationArr[1] = position.coords.longitude;

  console.log(locationArr);
}

// function
// fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(response) {
//     img.src = response.data.images.original.url;
//   });

// 02cd7df6f57621292521348f6a56ec7c

