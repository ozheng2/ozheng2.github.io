// var prevScrollpos = window.scrollY;
var image = document.getElementById("Image");

window.onscroll = function() {
  // var currentScrollPos = window.scrollY;
  var imageRect = image.getBoundingClientRect();
  var top = (imageRect.top) - 63;
  //console.log(window.scrollY);
  // console.log(top);
  // console.log(down);
  if(top > 0) {                                                           //   if (865 > currentScrollPos) {  865 = where the header and about me sections meet/background changes color
    document.getElementById("nav").style.top = "15px";
    document.getElementById("back-to-top").style.right = "-15rem";
  } else {
    document.getElementById("nav").style.top = "-50px";
    document.getElementById("back-to-top").style.right = "1.5rem";
  }
  // prevScrollpos = currentScrollPos;
}
  // var nav = document.getElementById("nav");
  // var navRect = nav.getBoundingClientRect();
  // var down = (navRect.bottom);     Get navbar bottom position (63px)