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

// CONFETTI ANIMATION
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#c41e3a', '#8b008b', '#d4af37', '#ff69b4', '#ff4500'];

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
