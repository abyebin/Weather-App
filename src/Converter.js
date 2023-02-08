
export function kelvinToCelcius(k){
    let celcius = k - 273.15
    return celcius.toFixed(0)
}

function kelvinToFahernheit(k){
    let fahrenheit = (k - 273.15) * 9/5 + 32
    return fahrenheit.toFixed(1)
}

function fahrenheiToCelcius(f) {
    let celcius = (f-32)/1.8;
    return celcius.toFixed(1)
}

export function unixToHuman(t){
var date = new Date(t * 1000);
return date.toLocaleTimeString();
}

export function convertTimeZone(timezone) {
    let hours = Math.floor(timezone / 3600);
    let minutes = Math.floor((timezone % 3600) / 60);
    let sign = hours > 0 ? '+' : '-';
    hours = Math.abs(hours);
    return `UTC ${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  convertTimeZone()

export function windDi(w){
    if(w >= 0 && w < 30 ){
        return "N"
    }
    else if(w >= 30 && w < 60 ){
        return "NE"
    }
    else if(w >= 60 && w < 120 ){
        return "E"
    }
    else if(w >= 120 && w < 150 ){
        return "SE"
    }
    else if(w >= 150 && w < 210 ){
        return "S"
    }
    else if(w >= 210 && w < 240 ){
        return "SW"
    }
    else if(w >= 240 && w < 300 ){
        return "W"
    }
    else if(w >= 300 && w < 330 ){
        return "NW"
    }
    else if(w >= 300 && w < 330 ){
        return "NW"
    }else return "N"
}
