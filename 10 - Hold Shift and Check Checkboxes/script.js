const inputs = document.querySelectorAll('.item input');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    inputs.forEach(input => {
      console.log(input);
      if (input === this || input === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them inbetween');
      }

      if (inBetween) {
        input.checked = true;
      }
    });
  }

  lastChecked = this;
}

inputs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
