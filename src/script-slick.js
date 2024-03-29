$('.news__cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    aytoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$('.testimonials__cards').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  prevArrow: '.arrow_prev',
  nextArrow: '.arrow_next'
});