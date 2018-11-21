

$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('#header').addClass('fixed-header');
    }
    else {
        $('#header').removeClass('fixed-header');
    }
});



$('.slider_active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000,
            });
        });


$('.brand_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})




$('.grid_wrapper').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid_iteam',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid_iteam'
  }
})





var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});