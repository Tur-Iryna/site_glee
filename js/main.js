$(function () {

  $('.product-one__filter-btn').on('click', function () {
    $('.product-one__filters').slideToggle();
  });

  $('.product-second__filter-btn').on('click', function () {
    $('.product-one__filters').slideToggle();
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');

  });

  $('.related-slider').slick({
    slidesToShow: 4,
    prevArrow: ' <button class="slick-arrow slick-prev slick-left"><img src="images/prev.png" alt="prev arrow"></button>',
    nextArrow: '<button class="slick-arrow slick-next slick-right"><img src="images/next.png" alt="next arrow"></button>'
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');


    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-details__num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });


  $('.filter-list').on('click', function () {
    $('.products-item').addClass('products-item--list');

  });

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#dedede",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="18px" viewBox="0 0 20 18" version="1.1"><g id="surface1" ><path style=" stroke:none;fill-rule:nonzero;fill:#ffcc00;fill-opacity:1;" d="M 11.003906 0.632812 C 10.820312 0.246094 10.429688 0 10.003906 0 C 9.578125 0 9.191406 0.246094 9.003906 0.632812 L 6.769531 5.285156 L 1.785156 6.03125 C 1.367188 6.09375 1.019531 6.386719 0.890625 6.792969 C 0.765625 7.195312 0.867188 7.644531 1.167969 7.941406 L 4.785156 11.566406 L 3.929688 16.6875 C 3.859375 17.109375 4.035156 17.539062 4.378906 17.789062 C 4.722656 18.039062 5.175781 18.070312 5.550781 17.871094 L 10.007812 15.460938 L 14.460938 17.871094 C 14.835938 18.070312 15.292969 18.042969 15.636719 17.789062 C 15.980469 17.535156 16.152344 17.109375 16.082031 16.6875 L 15.226562 11.566406 L 18.84375 7.941406 C 19.140625 7.644531 19.25 7.195312 19.117188 6.792969 C 18.984375 6.386719 18.640625 6.09375 18.226562 6.03125 L 13.234375 5.285156 Z M 11.003906 0.632812 " /></g></svg > ',

  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })



  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpead: 2000


  });

  $(function () {
    var mixer = mixitup('.products__items');

  });


  $(function () {
    var mixer = mixitup('.design__items');

  });



});

