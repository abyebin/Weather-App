
let utcM
let timeZoneM

function getUTC0(){
    let currentTime = currentTimeInMinutes()
    let diff = new Date().getTimezoneOffset();
    let utc =  currentTime + diff
    utcM = utc
}


function currentTimeInMinutes(){
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let currentMinutes = (hours * 60) +minutes
    return currentMinutes
}

function convertTimeZone(timezone) {
    let hours = Math.floor(timezone / 3600);
    let minutes = Math.floor((timezone % 3600) / 60);

    timeZoneM = minutes + (hours*60)
  }

function presentTime(){
    getUTC0()
convertTimeZone(19800)
}

presentTime()

let x = timeZoneM + utcM
let q = Math.floor(x/60);
let k = x % 60

console.log(`${q}:${k}`)