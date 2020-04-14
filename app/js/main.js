$(function () {

  $('.slider-weekly__inner').slick({

  });

  $('.slider-feed__inner').slick({
    slidesToShow:3,
    slidesToScroll:1,
       
  });

  $('.search__select').select2({
    width: '195px',
  });

  $('.rate-star').rateYo({
    starWidth: '15px',
    readOnly: true,
    rating: 4.5,
    spacing: '3px'
  });

  $('.newest__item-star, .slider-feed__item-star').rateYo({
    starWidth: '13px',
    readOnly: true,
    rating: 4.5,
    spacing: '3px'
  });

  var mixer = mixitup('.newest__inner');
  $(window).on("load", function () {
    if ($('.newest__inner').length) {
        var mixer = mixitup('.newest__inner');
      }
    });


    $('.newest__filter-point').on('click', function(){
      $('.newest__filter-list').toggleClass('active')
    });
});