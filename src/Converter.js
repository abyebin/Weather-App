
function kelvinToCelcius(k){
    let celcius = k - 273.15
    return celcius.toFixed(1)
}

function kelvinToFahernheit(k){
    let fahrenheit = (k - 273.15) * 9/5 + 32
    return fahrenheit.toFixed(1)
}

function fahrenheiToCelcius(f) {
    let celcius = (f-32)/1.8;
    return celcius.toFixed(1)
}

function unixToHuman(t){
var date = new Date(t * 1000);
return date.toLocaleString();
}

