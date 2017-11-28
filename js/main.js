$(window).scroll(function() {
  var skillsSection = $("#skills");
  var bottomOfWindow = $(window).scrollTop() + $(window).height();
  var cards = $('.card');

  // navbar shrinks and follows when scrolled past it's height
  if ($('.navbar').offset().top > 50) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }

  // Skills section
  // animate diamond grades
  if (bottomOfWindow > (skillsSection.offset().top + skillsSection.outerHeight()/2)) {
    $('.grade').each(function() {
      $(this).children('.blue').each(function(i) {
        $(this).animate({
          color: "rgb(33, 38, 62)"
    }, i++ * 2000);
      });
    })
  }

  cards.each(function() {
    if(bottomOfWindow > ($(this).offset().top) + $(this).outerHeight()/2) {
      console.log("animate");
      $(this).animate({
        opacity: 1
      }, 2000);
    }
  });
});

$(function() {
  $('.page-scroll a').bind('click', function() {
    var $anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - 50,
        },
        1500,
        'easeInOutExpo'
      );
    event.preventDefault();
  });

  // Download button tilt animation
  $('#dl .button').mouseenter(function() {
    $(this).children('.fa-diamond').removeClass('rotate-left').addClass('rotate-right');
  });

  $('#dl .button').mouseleave(function() {
    $(this).children('.fa-diamond').removeClass('rotate-right').addClass('rotate-left');
  });
});
