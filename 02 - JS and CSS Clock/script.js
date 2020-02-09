const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function displayTime() {
  const time = new Date();

  const secDeg = (time.getSeconds() / 60) * 360 + 90;
  const minDeg = (time.getMinutes() / 60) * 360 + 90;
  const hourDeg = (time.getHours() / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(displayTime, 1000);
