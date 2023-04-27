



    
theBigTimer();


function theBigTimer() {

let now = new Date().getTime();
let future = new Date('2023-04-28T09:30:30').getTime();
console.log ('data di oggi',now);
console.log ('data di domani',future);
let millToTomorrow
let secondsToTomorrow
let minutesToTomorrow
let hoursToTomorrow
let daysToTomorrow
let minutiStrani
let secsStrani
const insertDays = document.querySelector('.days')
const insertHours = document.querySelector('.hours')
const insertMinutes = document.querySelector('.minutes')
const insertSeconds = document.querySelector('.seconds')



getDateDifference(now, future);
transformToSeconds(millToTomorrow);
transformToMinutes(secondsToTomorrow);
transformToHours(minutesToTomorrow);
transformToDays(hoursToTomorrow);
transformMins(minutesToTomorrow)
transformSecs (Math.round(secondsToTomorrow))
writeDown()
console.log ('secondi a domani', secondsToTomorrow);
console.log ('minuti a domani', minutesToTomorrow);
console.log ('ore a domani', hoursToTomorrow);
console.log ('giorni a domani', daysToTomorrow);
console.log ('test mins', minutiStrani)







function getDateDifference (data1, data2) {
    millToTomorrow = (data2 - data1)
    return (data2 - data1)
}
    
function transformToSeconds (date) {
    secondsToTomorrow = ((date) / 1000)
    return date / 1000
}

function transformToMinutes (secs) {
    minutesToTomorrow = Math.round(secs / 60)
}

function transformToHours (mins) {
    hoursToTomorrow = Math.round(mins / 60)
}

function transformToDays (hours) {
    daysToTomorrow = Math.round(hours / 24)
}

function transformMins (va1) {
    let XX = (va1 / 60)
    let XXX = (XX - Math.floor(XX))
    minutiStrani = Math.round((XXX * 100) * 60 / 100)
    
}

function transformSecs (va2) {
    let XX = (va2 / 60)
    let XXX = (XX - Math.floor(XX))
    secsStrani = Math.round((XXX * 100) * 60 / 100)
}
    
   
function writeDown () {
    insertDays.innerHTML = daysToTomorrow
    insertHours.innerHTML = hoursToTomorrow
    insertMinutes.innerHTML = minutiStrani
    insertSeconds.innerHTML = secsStrani
}

console.log ('nuovo testissimi', (minutesToTomorrow))

setTimeout(theBigTimer, 1000)
}

