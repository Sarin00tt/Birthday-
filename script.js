// Turntable Play/Stop Controls
const vinyl = document.getElementById('vinylRecord');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const memoryDisplay = document.getElementById('memoryDisplay');
const trackItems = document.querySelectorAll('.track-item');
const secretBtn = document.getElementById('secretBtn');

playBtn.addEventListener('click', () => {
    vinyl.classList.add('spinning');
});

stopBtn.addEventListener('click', () => {
    vinyl.classList.remove('spinning');
});

// Click track to display memory
trackItems.forEach(item => {
    item.addEventListener('click', () => {
        const memoryText = item.getAttribute('data-memory');
        vinyl.classList.add('spinning');
        memoryDisplay.innerHTML = `🎵 <strong>Now Playing:</strong> "${memoryText}"`;
    });
});

// Secret Track Surprise
secretBtn.addEventListener('click', () => {
    alert("🎉 SURPRISE! 💖\n\nHappy Birthday to the most amazing girl in the world! Even with all the miles between us, loving you is the easiest thing I've ever done. Get ready for your real gift coming soon!");
});

// Live Countdown to Next Visit (Format: YYYY-MM-DD)
function updateCountdown() {
    const nextVisitDate = new Date('2026-12-31T00:00:00'); // Change this to your actual meetup date
    const now = new Date();
    const diff = nextVisitDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        document.getElementById('countdownText').innerText = `⏳ Next reunion in: ${days} days, ${hours} hours!`;
    } else {
        document.getElementById('countdownText').innerText = `✨ We are finally together right now! ✨`;
    }
}

updateCountdown();
