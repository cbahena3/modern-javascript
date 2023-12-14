/* global moment */
console.log("Hello, world!")

let datetime = moment().startOf("day").fromNow();
console.log(datetime);

let timeToday = moment().calendar();
console.log(timeToday);

let date = moment().format('MMMM Do YYYY, h:mm:ss a');                    
console.log(date);
