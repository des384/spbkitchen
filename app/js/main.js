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
  });
});

$(function () {


// let checkIt = true;
// let btn = document.getElementById("btn");
// btn.addEventListener("click", readMore);
// function readMore() {
// let more = document.getElementById("more");
// if (checkIt) {
// more.style.display = "flex";
// btn.innerHTML = "Скрыть";
// checkIt = false;
// } else {
// more.style.display = "none";
// btn.innerHTML = "Подробнее";
// checkIt = true;
// }
// }



// $(".portfolio__items").each(function() {
//     let more = $(this).find(".show-more");
//     let hide = $(this).find(".hide-content");
//     hide.hide();
//     more.click(function() {
//         hide.slideToggle();
//         more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
//     });
// });


// $(".hide-content").hide();
// $(".show-more").click(function() {
//     $(this).next(".hide-content").slideToggle();
//     $(this).text($(this).text() == "Скрыть" ? "Показать еще" : "Скрыть");
// });

// var mixer = mixitup('.portfolio__items');

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