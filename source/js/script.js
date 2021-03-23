JS:
function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();

//===========================================================
$('.header-burger').click(function () {
   $('.header-burger, .header-menu').toggleClass('act');
   $('body').toggleClass('lock');
});

$('.header-menu').click(function () {
   $('.header-burger, .header-menu').removeClass('act');
   $('body').removeClass('lock');
});
//============================================================
let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

let body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
   let arrows = document.querySelectorAll('.arrows');
   for (i = 0; i < arrows.length; i++) {
      // let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrows[i].nextElementSibling;
      let thisArrow = arrows[i];
      // thisLink.classList.add('parent');
      arrows[i].addEventListener('click', function () {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('active');
      });
   }
} else {
   body.classList.add('mouse');
}

//===========================================================

const swiper = new Swiper('.swiper-container', {
   speed: 400,
   spaceBetween: 0,
   //стрелки
   navigation: {
      nextEl: '.arrow__next',
      prevEl: '.arrow__prev'
   },
});