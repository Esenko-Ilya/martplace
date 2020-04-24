$(function () {

  $('.slider-weekly__inner').slick({
    appendArrows: '.slider-weekly__arrows',
    prevArrow: "<div class='slider-weekly__arrow arrow arrow--prev lick-prev lnr lnr-chevron-left'></div>",
    nextArrow: "<div class='slider-weekly__arrow arrow arrow--next slick-next lnr lnr-chevron-right'></div>"
  });

  $('.slider-feed__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: '.slider-feed__arrows',
    prevArrow: "<div class='slider-feed__arrow arrow arrow--prev lnr lnr-chevron-left'></div>",
    nextArrow: "<div class='slider-feed__arrow arrow arrow--next lnr lnr-chevron-right'></div>"

  });

  $('.search__select').select2({
    width: '195px',
  });

  $('.rate-star').rateYo({
    starWidth: '15px',
    readOnly: true,
    rating: 4.5,
    spacing: '3px',
    ratedFill: '#ffc000'
  });

  $('.newest__item-star, .slider-feed__item-star').rateYo({
    starWidth: '13px',
    readOnly: true,
    rating: 4.5,
    spacing: '3px',
    ratedFill: '#ffc000'
  });

  $('.header__menu-burger').on('click', function () {
    $('.header__menu-list').slideToggle();
  });

  $('.header__menu-layout').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  $('.newest__filter').on('click', function () {
    $('.newest__filter-list').toggleClass('active');
  });
 
  $('.header__menu-item').on('click', function () {
    $(this).children('.header__submenu-list').toggleClass('active');
  });

  var touch = $('.header__menu-item');
  var menuWrapper = $('.header__menu-list');
  var w = $(window).width();

  $('html').click(function() {
    menuWrapper.find('.header__submenu-list').slideUp(0);
  });

  menuWrapper.click(function(e) {
    e.stopPropagation();
  });

  $(touch).on('click', function(e) {
    e.preventDefault();
    var menu = $(this).closest('.header__menu-item').find('.header__submenu-list');
    var isClosed = menu.is(':hidden'); // закрыто ли подменю, по которому кликнули

    menuWrapper.find('.header__submenu-list').slideUp(0); // закрываем все подменю

    // если меню было закрыто, то открываем его
    if (isClosed) {
      menu.slideDown(0);
    }
  });


  var $range = $(".product__range-slider"),
  $inputFrom = $(".product__input-from"),
  $inputTo = $(".product__input-to"),
  $simbol = '$',
  instance,
  min = 0,
  max = 325,
  from = 10,
  to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 30,
  to: 300,
  prefix: "$",
  hide_min_max: true,    
  hide_from_to: true, 
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});


  var mixer = mixitup('.newest__inner');
  $(window).on("load", function () {
    if ($('.newest__inner').length) {
      var mixer = mixitup('.newest__inner');
    }
  });



});