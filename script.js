// Tab Navigation
function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Update button states
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// COUNTDOWN TIMER
function updateCountdown() {
    const targetDate = new Date('2026-06-16').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        document.getElementById('countdown-text').textContent = '🎉 HAPPY BIRTHDAY BABIE! 🎉';
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        triggerConfetti();
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (days === 1) {
        document.getElementById('countdown-text').textContent = "Only 1 day until Babie turns 27! 💕";
    } else if (days === 0 && hours > 0) {
        document.getElementById('countdown-text').textContent = "It's almost here! 🎉";
    } else {
        document.getElementById('countdown-text').textContent = `${days} days until Babie's 27th Birthday! 🎂`;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// ENVELOPE - OPEN LETTER
function openEnvelope() {
    const letterContent = document.getElementById('letter-content');
    const envelope = document.getElementById('envelope');

    if (letterContent.style.display === 'none') {
        letterContent.style.display = 'block';
        envelope.style.display = 'none';
        triggerConfetti();
    } else {
        letterContent.style.display = 'none';
        envelope.style.display = 'flex';
    }
}

// CONFETTI ANIMATION
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff69b4', '#ff1493', '#9932cc', '#ffd700', '#ff4500', '#ff69b4'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 3500);
    }
}

// PAGE LOAD - Initialize
window.addEventListener('load', () => {
    updateCountdown();
});
