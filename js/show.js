var slides = [];
var original = "";

function setSlide(inc){
  var curr = parseInt( location.hash.replace('#', '') ) + inc;

  if (curr >= 0 && curr < slides.length) {
    location.hash = curr;
    $('show').finish();
    $('#show').fadeOut(100, function(){
      $('#show').html(slides[curr]);
      $('#show').fadeIn(100);
    });
    $('#prev').css("visibility", (curr > 0)                  ? "visible" : "hidden");
    $('#next').css("visibility", (curr + 1 < slides.length ) ? "visible" : "hidden");
  }
}

if (! /^\d+$/.test( location.hash.replace('#', '') )) {
  location.hash = 0;
}

$(window).on('hashchange', function() {
  setSlide(0);
});

$(function(){
  orginal = $('#show').html();
  $('#show > *').each(function(){
    var tagName = $(this).prop("tagName")
    if (tagName == 'H2' || tagName == 'H1') {
      slides.push([]);
    }
    slides[slides.length - 1].push( $(this) );
  });

  setSlide(0);
  $(document).on('click', '#next', function(){
    setSlide(1);
  });
  $(document).on('click', '#prev', function(){
    setSlide(-1);
  });
});

$(document).keydown(function(e) {
  if (e.which == 37 || e.which == 39 ) {
    e.preventDefault();
    setSlide(e.which == 37 ? -1 : 1);
  }
  return;
});
