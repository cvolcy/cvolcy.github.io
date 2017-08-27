$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  $('.button-collapse').sideNav({draggable: true});

  var dist = $('main.section')[0].offsetTop - 50;
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= dist) {
      $("header > nav").removeClass("filtered");
    } else {
      $("header > nav").addClass("filtered");
    }
  });
});
