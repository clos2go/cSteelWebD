function sing() {
    console.log("Twinkle Twinkle little Star.");
    console.log("How I wonder ...");
}

sing();

// setInterval(sing, 1000);
// clearInterval(2);
var timesRun = 0;
var interval = setInterval(function() {
    timesRun += 1;
    if (timesRun === 3) {
        clearInterval(interval)
    }
    console.log("I am an anonymous function!");
    console.log("This is awesome!!");
}, 2000)