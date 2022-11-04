const today = new Date()
const endDate = new Date(2022, 10, 30)
const seconds = 1000 //epoch time(unix time)
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24 //this is in milliseconds

//used to repeat the countdown function
setInterval(countdown, seconds)

function countdown(){
    const today = new Date()
    const timeBetween = endDate - today
    
    /* display days, hours, minutes and seconds within the function because timeBetween is declared in the function
    Math.floor() was used to round the number 
    .innerHTML property modifies the content of an HTML element */

    document.getElementById("days").innerHTML = Math.floor(timeBetween/days)
    document.getElementById("hours").innerHTML= Math.floor((timeBetween%days)/hours)
    document.getElementById("minutes").innerHTML = Math.floor((timeBetween%hours)/minutes)
    document.getElementById("seconds").innerHTML = Math.floor((timeBetween%minutes)/seconds)
}