// Trigger confetti on page load
document.addEventListener('DOMContentLoaded', function() {
    triggerConfetti();
});

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

// REVEAL COUPON
function revealCoupon(button) {
    const couponContent = button.nextElementSibling;
    
    if (couponContent.style.display === 'none') {
        couponContent.style.display = 'block';
        button.textContent = 'Hide Coupon';
        triggerConfetti();
    } else {
        couponContent.style.display = 'none';
        button.textContent = 'Click to Reveal';
    }
}

// LIVE COUNTDOWN TIMER
function updateCountdown() {
    const start = new Date('2024-03-16T00:00:00');
    const now = new Date();
    let diff = now - start;

    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;

    const nowYear = now.getFullYear(), nowMonth = now.getMonth(), nowDay = now.getDate();
    const startYear = 2024, startMonth = 2, startDay = 16;

    let years = nowYear - startYear;
    let months = nowMonth - startMonth;
    let days = nowDay - startDay;

    if (days < 0) {
        months--;
        const prevMonth = new Date(nowYear, nowMonth, 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const pad = n => String(n).padStart(2, '0');
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// CONFETTI ANIMATION
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d9', '#ffc4e0', '#ff69b4'];

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
