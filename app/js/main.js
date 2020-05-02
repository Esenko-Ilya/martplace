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
    nextArrow: "<div class='slider-feed__arrow arrow arrow--next lnr lnr-chevron-right'></div>",    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,               
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,          
        }
      }
    ]
  });

  // $('.search__select').select2({
  //   width: '195px',
  // });

  $('.rate-star').rateYo({
    starWidth: '15px',
    readOnly: true,
    rating: 4.5,
    spacing: '3px',
    ratedFill: '#ffc000'
  });

  $('.newest__item-star, .slider-feed__item-star, .product__content-star').rateYo({
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
  $('.favourites-filter__filter').on('click', function () {
    $('.favourites-filter__filter-list').toggleClass('active');
  });


  $('.header__pages-link').on('click', function () {
    $('.header__pages').toggleClass('active');
    
  });
 
//dropdown effect
$('.header__menu-link').on('click', function(e){
  e.preventDefault();
  if ( $(this).next().hasClass('active') ) {
  $(this).next().slideUp().removeClass('active')
  } else {
  $('.header__menu-link').next().slideUp().removeClass('active');
  $(this).next().slideDown().addClass('active');
  }
  });
//range-slider
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
//fliter-icon
$('.product-filter__sort-list').on('click', function () {
  $('.product__content-item').addClass('list');
  $('.product-filter__sort-list').addClass('active');
  $('.product-filter__sort-grid').removeClass('active');
});
$('.product-filter__sort-grid').on('click', function () {
  $('.product__content-item').removeClass('list');
  $('.product-filter__sort-grid').addClass('active');
  $('.product-filter__sort-list').removeClass('active');
});





  var mixer = mixitup('.newest__inner');
  $(window).on("load", function () {
    if ($('.newest__inner').length) {
      var mixer = mixitup('.newest__inner');
    }
  });



});