const menuToggle = document.querySelectorAll('.menu-toggle');
const nav = document.querySelector('.nav');

function addEvent(element, evName, fn) {
  if (element.addEventListener) {
    element.addEventListener(evName, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + evName, function (e) {
      fn(e || window.event);
    });
  }
}

// menuToggle.forEach((e) => {
//   e.addEventListener('click', function () {
//     nav.style.transition = 'transform .5s ease-in-out';
//     setTimeout(() => {
//       nav.style.transition = 'none';
//     }, 500);
//     if (nav.classList.contains('onscreen')) {
//       window.scrollTo(0, 0);
//       nav.classList.remove('onscreen');
//     } else {
//       nav.classList.add('onscreen');
//     }
//   });
// });

[...menuToggle].forEach((e) => {
  addEvent(e, 'click', function () {
    nav.style.transition = 'transform .5s ease-in-out';
    setTimeout(() => {
      nav.style.transition = 'none';
    }, 500);
    if (nav.classList.contains('onscreen')) {
      window.scrollTo(0, 0);
      nav.classList.remove('onscreen');
    } else {
      nav.classList.add('onscreen');
    }
  });
});
