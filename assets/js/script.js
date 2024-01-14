// Carousel
jQuery(".carousel0").owlCarousel({
  autoplay: true,
  rewind: false,
  loop: true,
  /* use rewind if you don't want loop */
  margin: 0, 
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  dots: false,
  items: 1,
});

jQuery(".carousel6").owlCarousel({
  autoplay: true,
  rewind: true,
  loop: true,
  /* use rewind if you don't want loop */
  margin: 0, 
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  dots: true,
  items: 1,
});

$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
$( ".carousel3 .owl-prev").html('<i class="fa fa-play"></i>');
$( ".carousel3 .owl-next").html('<i class="fa fa-play"></i>');

// searchbar js 
$(".searchBar").click(function() {
  $(".header-section").toggleClass("search-active");
  $(this).toggleClass("search-show")
})

$('.owl-theme').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  center: true,
  responsiveClass:true,
  responsive:{
      0:{
        items:1,
        nav:true,
        loop:true,
        dots:false
      },
      600:{
        items:1,
        nav:true,
        loop:true,
        dots:false
      },
      1000:{
          items:3,
          nav:true,
          loop:true,
          dots:false
      }
  }
})