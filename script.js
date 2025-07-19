// script.js

const btn = document.getElementById('goBtn');
const txt = document.getElementById('reveal');
const sfx = document.getElementById('sfx');

btn.addEventListener('click', () => {
  // ensure audio is loaded before playing
  if (sfx.readyState >= 2) {
    sfx.currentTime = 0;
    sfx.play();
  } else {
    sfx.addEventListener('canplaythrough', () => {
      sfx.currentTime = 0;
      sfx.play();
    }, { once: true });
  }

  // reveal the message
  txt.style.opacity = '1';

  // sprinkle confetti
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = ['#f44336','#ffeb3b','#8bc34a','#03a9f4'][Math.floor(Math.random() * 4)];
    c.style.animationDelay = (Math.random().toFixed(2)) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }

  // lock the button
  btn.disabled = true;
  btn.textContent = "👏 You Rocked It! 👏";
});
