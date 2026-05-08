const prompt = require("prompt-sync")();
let minutes = Number(prompt("Enter the number of minutes: "));

const minutes_per_hour = 60;
const hours_per_day = 24;
const day_per_year = 365;

const minutes_per_day = minutes_per_hour * hours_per_day
const minutes_per_year = minutes_per_day * day_per_year

const years = Math.floor(minutes/minutes_per_year)
const remaining_minutes = minutes % minutes_per_year
const days = Math.floor(remaining_minutes/minutes_per_day)

console.log(`${minutes} is equal to ${years} years and ${days} days`)
