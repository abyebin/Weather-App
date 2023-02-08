
export function getUTC0(){
    let currentTime = currentTimeInMinutes()
    let diff = new Date().getTimezoneOffset();

    let utc =  currentTime + diff
    let hours = Math.floor(utc/60);
    let minutes = utc % 60

    let time = `${hours}:${minutes}`
    return time
}

function currentTimeInMinutes(){
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()

    let currentMinutes = (hours * 60) +minutes
    return currentMinutes
}

