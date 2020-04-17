var menuToggle = document.querySelectorAll('.menu-toggle');
var nav = document.querySelector('.nav');
var burger = nav.querySelector('.burger');

console.log('HELLO IE!');

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

// menuToggle.forEach(function (e) {
//   addEvent(e, 'click', function () {
//     nav.style.transition = 'transform .5s ease-in-out';
//     setTimeout(function () {
//       nav.style.transition = 'none';
//     }, 500);
//     if (nav.classList.contains('onscreen')) {
//       window.scrollTo(0, 0);
//       nav.classList.remove('onscreen');
//       burger.innerHTML = '<i class="fas fa-bars show-xsm"></i>';
//     } else {
//       nav.classList.add('onscreen');
//       burger.innerHTML = '<i class="fas fa-times show-xsm"></i>';
//     }
//   });
// });

for (let i = 0; i < menuToggle.length; i++) {
  addEvent(menuToggle[i], 'click', function () {
    nav.style.transition = 'transform .5s ease-in-out';
    setTimeout(function () {
      nav.style.transition = 'none';
    }, 500);
    if (nav.classList.contains('onscreen')) {
      window.scrollTo(0, 0);
      nav.classList.remove('onscreen');
      burger.innerHTML = '<i class="fas fa-bars show-xsm"></i>';
    } else {
      nav.classList.add('onscreen');
      burger.innerHTML = '<i class="fas fa-times show-xsm"></i>';
    }
  });
}
