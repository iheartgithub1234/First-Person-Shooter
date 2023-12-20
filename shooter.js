let box = document.getElementById("box");
let backgroundImage = document.getElementById("backgroundImage");
let state = document.getElementById("state");
let bodyguard = document.getElementById("bodyguard");
let crosshair = document.getElementById("crosshair");
let x;
let y;
let xPositions = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500];
let currentPos = 0;
let misses = 0;
let hits = 0;
let ak47 = document.getElementById("ak47-div");
let shot = new Audio("rifleshot.mp3");

document.addEventListener("mousemove", function(event) {
    x = event.clientX;
    y = event.clientY;
    
    backgroundImage.style.top = -(y) + "px";
    backgroundImage.style.left = (-(x) + 100) + "px";
    
    bodyguard.style.top = (-(y) - 500) + "px";
    bodyguard.style.left = (-(x) + 100 + currentPos) + "px";
    
    crosshair.style.top = (y - 50) + "px";
    crosshair.style.left = (x - 50) + "px";
});

document.onclick = function() {
    shot.play();
    
    document.body.style.backgroundColor = "red";
    ak47.style.backgroundImage = "url('firedak47.png')";
    setTimeout(function() {
        document.body.style.backgroundColor = "darkgrey";
        ak47.style.backgroundImage = "url('stillak47.png')";
    }, 150);
    
    misses++;
    state.textContent = "Accuracy: " + hits + " out of " + misses;
}

bodyguard.onclick = function(event) {
    x = event.clientX;
    y = event.clientY;
    
    hits++;
    state.textContent = "Accuracy: " + hits + " out of " + misses;
    
    currentPos = xPositions[Math.floor(Math.random()*xPositions.length)];
    bodyguard.style.left = (-(x) + 100 + currentPos) + "px";
}