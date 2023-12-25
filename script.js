// JavaScript to create snowflakes
document.addEventListener('DOMContentLoaded', function () {
    const snowContainer = document.getElementById('snow-container');

    // Adjust the number of snowflakes as needed
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
        snowflake.style.animationDelay = `${Math.random()}s`;
        snowContainer.appendChild(snowflake);
    }
});

// countdown timer

// Set the date we're counting down to (New Year's Day)
const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `
        <div class="countdown-item">
            <span class="countdown-number count1">${days}</span>
            <span class="countdown-label count1">Dite</span>
        </div>
        <br>
        <div class="countdown-item">
            <span class="countdown-number count2">${hours}</span>
            <span class="countdown-label count2">Ore</span>
        </div>
        <br>
        <div class="countdown-item">
            <span class="countdown-number count3">${minutes}</span>
            <span class="countdown-label count3">Minuta</span>
        </div>
        <br>
        <div class="countdown-item">
            <span class="countdown-number count4">${seconds}</span>
            <span class="countdown-label count4">Sekonda</span>
        </div>
    `;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "<h2>Gezuar Vitin e RI Pookie!! Tkam Xhan.</h2>";
    }
}, 1000);

// function showYayMessage() {
//     document.getElementById("result-message").innerText = "Taa NGROO";
//   }

function showYayMessage() {
    // Get the result message element
    var resultMessage = document.getElementById("result-message");

    // Set the innerHTML to display an image
    resultMessage.innerHTML = '<img class="ta-ngroh" src="img/6.png" alt="ta ngroo"><h1 class="zemra11">❤️</h1>';
  }

function moveNoButton() {
    var button = document.getElementById("noButton");
    var rect = button.getBoundingClientRect();
  
    var newX = Math.random() * (window.innerWidth - rect.width);
    var newY = Math.random() * (window.innerHeight - rect.height);
  
    // Check if the new position is outside the viewport, and adjust if necessary
    newX = Math.min(Math.max(newX, 0), window.innerWidth - rect.width);
    newY = Math.min(Math.max(newY, 0), window.innerHeight - rect.height);
  
    button.style.position = "fixed";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }
  


