$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1, 
    dots: true,   
    fade: true,
    // prevArrow: '<svg сlass="slick-prev" width="92" height="12" viewBox="0 0 92 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.8111 0L7.29022 1.34617L4.26236 4.67309H92.0001V6.67309H4.26236L7.29022 10L5.8111 11.3462L0.647949 5.67309L5.8111 0Z" fill="#CA6D38"/></svg>',
    // nextArrow: '<svg class="slick-next" width="92" height="12" viewBox="0 0 92 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M86.1891 11.3462L84.71 10L87.7379 6.67311L0.000145367 6.6731L0.000145542 4.6731L87.7379 4.67311L84.71 1.3462L86.1891 2.62515e-05L91.3523 5.67311L86.1891 11.3462Z" fill="#CA6D38"/></svg>'
appendArrows: $('.reviews__nav'),
appendDots: $('.reviews__nav-dots'),
prevArrow: '<span class="reviews__nav-prev"></span>',
nextArrow: '<span class="reviews__nav-next"></span>',
autoplay:true,
  });
});
/*mask telephon */

$(function () {
  $('.showroom__slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.arrow__prev-room',
    nextArrow: '.arrow__next-room',
    centerMode: true,
    centerPadding: '0',
    dots: true,
    appendDots: $('.showroom__nav-dots'),
    autoplay:true,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 631,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        }
      },
  ]
  });


});

/*Кнопка Показать еще в портфолио*/

jQuery(document).ready(function($){
  $(".show-more").click(function(e){
    $(".mix:hidden").slice(0,6).fadeIn();
    if ($(".mix:hidden").length < 1) $(this).fadeOut();
  })
})

// $(document).ready(function () {
//     $('#Container').mixItUp({
//       selectors: {
//         filter: '.filter'
//       }
//     });
  
//     $('#Container2').mixItUp({
//       selectors: {
//         filter: '.filter'
//       }
//     });
//   });

// var items = $('.mix'),
// per = 4,
// i = 1,
// total = 0;
// $('.show-more').on('click', function(){
// 	total = per * (i++);
// 	items.slice(0, total).show();
//     $(this)[total >= items.length ? 'hide' : 'flex']();
// }).click();

/*Фильтр Сортировка в портфолио*/

const filterBox = document.querySelectorAll('.mix');
document.querySelector('.portfolio__navigation').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});

/*Сделать активной вкладку в портфолио*/
$('document').ready(function (){
  $('.portfolio__button').click(function (){
      $('.portfolio__button').removeClass('portfolio__button--active');
      $(this).addClass('portfolio__button--active');
  });
});


// $('#clear').click(function () {
//   $('#input-outer input').val('');
// });

// const resetBtn = document.querySelector('.invalid-check')
// const input = document.querySelector('.input')
// resetBtn.addEventListener('click', () => {
//   input.value = ''
// })

/*кнопка стереть через крестик в поле формы */
const resetBtn = document.querySelector('.invalid-check')
const input = document.querySelector('.input')
resetBtn.addEventListener('click', () => {
  input.value = ''
  
})

/* Scroll to top*/
$( window).on('scroll',function() {
  let offtop = $(this).scrollTop();
  let page_h = document.body.clientHeight;
  if (offtop > 580){$('.totop').fadeIn('fast');}
  else{$('.totop').fadeOut('fast');}
  if(offtop > page_h - 900){
      $('.totop').addClass('stopped')
  }
  else{
      $('.totop').removeClass('stopped')
  }
});
$('.totop').on('click',function(){
  $('html, body').animate({ scrollTop: 0 }, 500);
});


/*мобильное меню*/
$('.menu__btn').click(function (event) {
  $('.menu__btn,.menu').toggleClass('active');
  $('body').toggleClass('lock');
});
