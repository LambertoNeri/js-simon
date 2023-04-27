let now = new Date().getTime()
let future = new Date('2023-04-28T09:30:30').getTime()
console.log ('data di oggi',now)
console.log ('data di domani',future)
let daMillisecondare 
let secondsToTomorrow

console.log ('millisecondi mancanti a domani', getDateDifference(now, future))
console.log ('this is transform', transformToSeconds(daMillisecondare))




function getDateDifference (data1, data2) {
    daMillisecondare = (data2 - data1)
    return (data2 - data1)
}
    
function transformToSeconds (date) {
    secondsToTomorrow = date / 1000
    return date / 1000
 }