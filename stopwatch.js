//initializing the variables
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = 0;

//defining status of the stopwatch
let status = "stopped";
//stop watch function to get it work

function stopWatch() {
        seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
        }
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else {
        displayHours = hours;
    }
    document.getElementById("display").innerHTML= displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function StartStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startstop").innerHTML = "Stop";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start";
        status = "stopped";
    }
}

function reStart() {
    window.clearInterval(interval)
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startstop").innerHTML = "Start";
}
