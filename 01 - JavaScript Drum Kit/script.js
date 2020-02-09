const keys = document.querySelectorAll('.key');

function playDrums(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const element = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!(element || sound)) return;

  element.classList.add('playing');
  sound.currentTime = 0;
  sound.play();
}

function removeClass(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playDrums);
keys.forEach(key => key.addEventListener('transitionend', removeClass));
