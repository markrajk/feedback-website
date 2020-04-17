var menuToggle = document.querySelectorAll('.menu-toggle');
var header = document.querySelector('header');
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
    var pos = window.scrollY;
    nav.style.transition = 'transform .5s ease-in-out';
    setTimeout(function () {
      nav.style.transition = 'none';
    }, 500);
    if (nav.classList.contains('onscreen')) {
      //window.scrollTo(0, 0);
      nav.classList.remove('onscreen');
      burger.innerHTML = '<i class="fas fa-bars show-xsm"></i>';
    } else {
      nav.classList.add('onscreen');
      burger.innerHTML = '<i class="fas fa-times show-xsm"></i>';
    }
  });
}
console.log('TEST!!!');
window.addEventListener('scroll', function () {
  if (
    window.scrollY > 69 &&
    !header.classList.contains('sticky-header') &&
    !nav.classList.contains('onscreen')
  ) {
    // header.style.transform = 'translate(0,-100%)';
    header.classList.add('animate-sticky-header');

    header.classList.add('sticky-header');
  } else if (window.scrollY === 0) {
    header.classList.remove('animate-sticky-header');

    header.classList.remove('sticky-header');
  }
});
