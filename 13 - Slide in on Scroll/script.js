const sliderImages = document.querySelectorAll('.slide-in');
console.log(sliderImages);

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.5) {
      sliderImages[0].classList.toggle('active');
    }
  });
}

function createObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(sliderImages[0]);
}

createObserver();

// function debounce(func, wait = 20, immediate = true) {
//   let timeout;
//   return function() {
//     const context = this;
//     const args = arguments;
//     const later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     const callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// function checkSlide(e) {
//   sliderImages.forEach(sliderImage => {
//     // Half way through the image
//     const slideInAt =
//       window.scrollY + window.innerHeight - sliderImage.heigth / 2;
//     // Bottom of the image
//     const imageBottom = sliderImage.offsetTop + sliderImage.height;
//     const isHalfShown = slideInAt > sliderImage.offsetTop;
//     const isNotScrolledPast = window.scrollY < imageBottom;
//     if (isHalfShown && isNotScrolledPast) {
//       sliderImage.classList.add('active');
//     } else {
//       sliderImage.classList.remove('active');
//     }
//   });
// }

// window.addEventListener('scroll', debounce(checkSlide));
