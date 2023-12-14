var moment = require('moment');
import { sqrt } from 'mathjs'

/* global moment */
console.log("Hello, world!");

let datetime = moment().startOf("day").fromNow();
console.log(datetime);

let timeToday = moment().calendar();
console.log(timeToday);

let date = moment().format('MMMM Do YYYY, h:mm:ss a');                    
console.log(date);

//math problem
console.log(sqrt(-4).toString()) // 2i
