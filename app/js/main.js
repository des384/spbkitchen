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