window.addEventListener('scroll', function(data){
  var nav = document.getElementsByTagName('nav')[0];
  if (document.body.scrollTop) {
    nav.className = "scrolled";
  } else {
    nav.className = "";
  }
});
