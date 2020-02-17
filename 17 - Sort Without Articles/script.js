const bandList = document.querySelector('#bands');

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

// const sorted = bands
//   .map(band => band.split(' '))
//   .map(band => {
//     if (band[0] === 'The' || band[0] === 'A' || band[0] === 'An') {
//       return band.splice(1);
//     }
//     return band;
//   })
//   .map(band => band.join(' '))
//   .sort();

function strip(bandName) {
  return bandName.replace(/^(a | the | an)/i, '').trim();
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

const html = sortedBands.map(band => `<li>${band}</li>`).join('');

bandList.innerHTML = html;
