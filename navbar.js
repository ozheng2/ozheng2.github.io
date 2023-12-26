var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  console.log(window.scrollY);
  if(1030 > currentScrollPos) {                                      // if (865 > currentScrollPos) {  865 = where the header and about me sections meet/background changes color
    document.getElementById("nav").style.top = "15px";
    document.getElementById("back-to-top").style.right = "-15rem";
  } else {
    document.getElementById("nav").style.top = "-50px";
    document.getElementById("back-to-top").style.right = "1.5rem";
  }
  prevScrollpos = currentScrollPos;
}